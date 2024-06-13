package middleware

import (
	"crypto/subtle"
	// "encoding/json"
	"net/http"
	"strings"

	"github.com/owncast/owncast/core/data"
	"github.com/owncast/owncast/core/user"
	"github.com/owncast/owncast/utils"
	log "github.com/sirupsen/logrus"
)

// ExternalAccessTokenHandlerFunc is a function that is called after validing access.
type ExternalAccessTokenHandlerFunc func(user.ExternalAPIUser, http.ResponseWriter, *http.Request)

// UserAccessTokenHandlerFunc is a function that is called after validing user access.
type UserAccessTokenHandlerFunc func(user.User, http.ResponseWriter, *http.Request)

// RequireAdminAuth wraps a handler requiring HTTP basic auth for it using the given
// the stream key as the password and and a hardcoded "admin" for username.
func RequireAdminAuth(handler http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		username := "admin"
		password := data.GetAdminPassword()
		realm := "Owncast Authenticated Request"

		// Alow CORS only for localhost:3000 to support Owncast development.
		validAdminHost := "http://localhost:3000"
		w.Header().Set("Access-Control-Allow-Origin", validAdminHost)
		w.Header().Set("Access-Control-Allow-Credentials", "true")
		w.Header().Set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")

		// For request needing CORS, send a 204.
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		user, pass, ok := r.BasicAuth()

		// Failed
		if !ok || subtle.ConstantTimeCompare([]byte(user), []byte(username)) != 1 || subtle.ConstantTimeCompare([]byte(pass), []byte(password)) != 1 {
			w.Header().Set("WWW-Authenticate", `Basic realm="`+realm+`"`)
			http.Error(w, "Unauthorized", http.StatusUnauthorized)
			log.Debugln("Failed admin authentication")
			return
		}

		handler(w, r)
	}
}

func accessDenied(w http.ResponseWriter) {
	w.WriteHeader(http.StatusUnauthorized) //nolint
	w.Write([]byte("unauthorized"))        //nolint
}

// RequireExternalAPIAccessToken will validate a 3rd party access token.
func RequireExternalAPIAccessToken(scope string, handler ExternalAccessTokenHandlerFunc) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// We should accept 3rd party preflight OPTIONS requests.
		if r.Method == "OPTIONS" {
			// All OPTIONS requests should have a wildcard CORS header.
			w.Header().Set("Access-Control-Allow-Origin", "*")
			w.WriteHeader(http.StatusNoContent)
			return
		}

		authHeader := r.Header.Get("Authorization")
		token := ""
		if strings.HasPrefix(strings.ToLower(authHeader), "bearer ") {
			token = authHeader[len("bearer "):]
		}

		if token == "" {
			log.Warnln("invalid access token")
			accessDenied(w)
			return
		}

		integration, err := user.GetExternalAPIUserForAccessTokenAndScope(token, scope)
		if integration == nil || err != nil {
			accessDenied(w)
			return
		}

		// All auth'ed 3rd party requests should have a wildcard CORS header.
		w.Header().Set("Access-Control-Allow-Origin", "*")

		handler(*integration, w, r)

		if err := user.SetExternalAPIUserAccessTokenAsUsed(token); err != nil {
			log.Debugln("token not found when updating last_used timestamp")
		}
	})
}

// RequireUserAccessToken will validate a provided user's access token and make sure the associated user is enabled.
// Not to be used for validating 3rd party access.

// OWNCAST CODE
func RequireUserAccessToken(handler UserAccessTokenHandlerFunc) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		accessToken := r.URL.Query().Get("accessToken")
		if accessToken == "" {
			accessDenied(w)
			return
		}

		ipAddress := utils.GetIPAddressFromRequest(r)
		// Check if this client's IP address is banned.
		if blocked, err := data.IsIPAddressBanned(ipAddress); blocked {
			log.Debugln("Client ip address has been blocked. Rejecting.")
			accessDenied(w)
			return
		} else if err != nil {
			log.Errorln("error determining if IP address is blocked: ", err)
		}

		// A user is required to use the websocket
		user := user.GetUserByToken(accessToken)
		if user == nil || !user.IsEnabled() {
			accessDenied(w)
			return
		}

		handler(*user, w, r)
	})
}

// LVTV CODE

// func RequireUserAccessToken(handler UserAccessTokenHandlerFunc) http.HandlerFunc {
// 	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
// 		accessToken := r.URL.Query().Get("accessToken")
// 		if accessToken == "" {
// 			accessDenied(w)
// 			return
// 		}

// 		ipAddress := utils.GetIPAddressFromRequest(r)
// 		// Check if this client's IP address is banned.
// 		if blocked, err := data.IsIPAddressBanned(ipAddress); blocked {
// 			log.Debugln("Client IP address has been blocked. Rejecting.")
// 			accessDenied(w)
// 			return
// 		} else if err != nil {
// 			log.Errorln("Error determining if IP address is blocked:", err)
// 		}

// 		// Retrieve user data associated with the access token
// 		user := user.GetUserByToken(accessToken)
// 		if user == nil || !user.IsEnabled() {
// 			// User doesn't exist or is not enabled, create a new user
// 			if err := CreateUserFromGoogleData(r, accessToken); err != nil {
// 				log.Error("Failed to create user:", err)
// 				// Handle error, e.g., return an error response to the client
// 				http.Error(w, "Failed to create user", http.StatusInternalServerError)
// 				return
// 			}
// 			log.Info("New user created successfully")
// 			// Refresh user data after creating a new user
// 			user = user.GetUserByToken(accessToken) // <- Notice the change here
// 			if user == nil || !user.IsEnabled() {
// 				accessDenied(w)
// 				return
// 			}
// 		}

// 		handler(*user, w, r)
// 	})
// }

// // Function to create a new user using data from Google authentication
// func CreateUserFromGoogleData(r *http.Request, accessToken string) error {
// 	// Parse user data from the request
// 	var userData UserRequest
// 	if err := json.NewDecoder(r.Body).Decode(&userData); err != nil {
// 		return err
// 	}

// 	// Create a new user record in the database
// 	newUser := user.User{
// 		// Map user data fields to User struct fields
// 		ID:          userData.UserID,
// 		DisplayName: userData.DisplayName,
// 		Email:       userData.Email,
// 		// Set other fields as needed
// 	}

// 	// Insert the new user record into the database
// 	if err := data.CreateUser(newUser); err != nil {
// 		return err
// 	}

// 	// User created successfully
// 	return nil
// }

// func CreateUser(newUser user.User) error {
// 	// Prepare the SQL statement to insert a new user record
// 	insertSQL := `INSERT INTO users (id, display_name, email) VALUES (?, ?, ?)`

// 	// Execute the SQL statement to insert the new user record
// 	_, err := db.Exec(insertSQL, newUser.ID, newUser.DisplayName, newUser.Email)
// 	if err != nil {
// 		return err
// 	}

// 	// User created successfully
// 	return nil
// }

// RequireUserModerationScopeAccesstoken will validate a provided user's access token and make sure the associated user is enabled
// and has "MODERATOR" scope assigned to the user.
func RequireUserModerationScopeAccesstoken(handler http.HandlerFunc) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		accessToken := r.URL.Query().Get("accessToken")
		if accessToken == "" {
			accessDenied(w)
			return
		}

		// A user is required to use the websocket
		user := user.GetUserByToken(accessToken)
		if user == nil || !user.IsEnabled() || !user.IsModerator() {
			accessDenied(w)
			return
		}

		handler(w, r)
	})
}
