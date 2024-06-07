<?php

namespace App\Http\Controllers\Socialite;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Laravel\Socialite\Facades\Socialite;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;



class GoogleAuthController extends Controller
{
   
    public function __construct()
    {
        $this->middleware('guest')->only('redirect');
        $this->middleware('preventBackHistory')->only('google-auth.callback'); 
        $this->middleware('auth')->only('google-auth.callback');
    }
    public function redirect()
{
           

    if (Auth::check()) {
        // If user is already authenticated, redirect to dashboard
        return redirect('/dashboard');

    }

    // If user is not authenticated, proceed with Google login
    return Socialite::driver('google')->redirect();
}

    // public function callback()
    // {
    //     try {
    //         $googleUser = Socialite::driver('google')->stateless()->user(); // Ignore the red line in stateless, it still works
    //     } catch (\Exception $e) {
    //         return redirect('/'); // Redirect to home or show error
    //     }
    
    //     // Check if the user already exists by email
    //     $existingUser = User::where('email', $googleUser->getEmail())->first();
    
    //     if ($existingUser) {
    //         // If the user already exists, log them in
    //         Auth::login($existingUser);
    //         return redirect('/welcome');
    //     }

    //     $user = User::updateOrCreate([
    //         'google_id' => $googleUser->getId(),
    //     ], [
    //         'name' => $googleUser->getName(),
    //         'email' => $googleUser->getEmail(),
    //         'password' => Hash::make('password'),
    //     ]);

        
    //     Auth::login($user);

    //     // $token = $user->createToken('Google Token')->accessToken;
    //     $token = JWTAuth::fromUser($user);

    // // Redirect to the dashboard or any other page
    // return redirect('/dashboard')->with(['access_token' => $token]);
    // }

//     public function callback()
// {
//     try {
//         $googleUser = Socialite::driver('google')->stateless()->user(); // Ignore the red line in stateless, it still works
//     } catch (\Exception $e) {
//         return redirect('/'); // Redirect to home or show error
//     }

//     // Check if the user already exists by email
//     $existingUser = User::where('email', $googleUser->getEmail())->first();

//     if ($existingUser) {
//         // If the user already exists, log them in
//         Auth::login($existingUser);
//         return redirect('/welcome');
//     }

//     // If the user doesn't exist, create a new user
//     $user = User::updateOrCreate([
//         'google_id' => $googleUser->getId(),
//     ], [
//         'name' => $googleUser->getName(),
//         'email' => $googleUser->getEmail(),
//         'password' => Hash::make('password'),
//     ]);

//     // Authenticate the user
//     Auth::login($user);

//     // Generate JWT token
//     $token = JWTAuth::fromUser($user);

//     // Send user data to Owncast API endpoint
//     $this->sendUserDataToOwncast($user);

//     // Redirect to the dashboard or any other page
//     return redirect('/dashboard')->with(['access_token' => $token]);
// }

// private function sendUserDataToOwncast($username)
// {
//     // Make an HTTP request to the Owncast API endpoint to send the user's name
//     // You need to replace 'your-owncast-api-url' with the actual URL of your Owncast API endpoint
//     $response = Http::post('your-owncast-api-url', [
//         'username' => $username,
//     ]);

//     // Handle the response as needed
// }

// FOR OWNCAST

public function callback()
    {
        try {
            $googleUser = Socialite::driver('google')->stateless()->user(); // Ignore the red line in stateless, it still works
        } catch (\Exception $e) {
            return redirect('/'); // Redirect to home or show error
        }

        // Check if the user already exists by email
        $existingUser = User::where('email', $googleUser->getEmail())->first();

        if ($existingUser) {
            // If the user already exists, log them in
            Auth::login($existingUser);
            return redirect('/welcome');
        }

        // If the user doesn't exist, create a new user
        $user = User::updateOrCreate([
            'google_id' => $googleUser->getId(),
        ], [
            'name' => $googleUser->getName(),
            'email' => $googleUser->getEmail(),
            'password' => Hash::make('password'),
        ]);

        // Assign a default role to the new user
        // $user->assignRole('student'); // Bugs when assigning role

        // Authenticate the user
        Auth::login($user);

        // Authenticate the user
        Auth::login($user);

        // Generate JWT token
        $token = JWTAuth::fromUser($user);

        // Send user data to Owncast API endpoint
        $this->sendUserDataToOwncast($user); // This line sends user data to Owncast

        // Redirect to the dashboard or any other page
        return redirect('/dashboard')->with(['access_token' => $token]);
    }

    // Add this method to send user data to Owncast
    private function sendUserDataToOwncast($user)
    {
        // Prepare data to send to Owncast
        $userData = [
            'name' => $user->name, // Adjust this based on your User model
            'email' => $user->email, // Adjust this based on your User model
            // Add any other data you want to send to Owncast
        ];

        // Send HTTP request to Owncast API endpoint
        // You can use any HTTP client library like GuzzleHttp to send the request
        // Example using GuzzleHttp:
        $client = new \GuzzleHttp\Client();
        $response = $client->post('https://lvtv-dev.sgp1.digitaloceanspaces.com', [
            'json' => $userData,
        ]);

        // Handle response from Owncast if needed
        // Example:
        if ($response->getStatusCode() === 200) {
            // Success
        } else {
            // Error handling
        }
    }

// Method to send user data to Owncast API endpoint
// private function sendUserDataToOwncast(User $user)
// {
//     // Construct the request payload
//     $userData = [
//         'displayName' => $user->name,
//         'email' => $user->email,
//         // Add any additional data you want to send
//     ];

//     // Send HTTP POST request to Owncast API endpoint
//     // Replace 'http://owncast-api.example.com/user-data' with the actual API endpoint URL
//     $response = Http::post('https://www.toptal.com/developers/postbin/b/1714910499956-4674793973099', $userData);

//     // Handle response as needed
//     if ($response->successful()) {
//         // Request succeeded
//         Log::info('User data sent to Owncast API successfully');
//     } else {
//         // Request failed
//         Log::error('Failed to send user data to Owncast API');
//     }
// }




    public function logout(Request $request): RedirectResponse
{
    Auth::logout();
 
    $request->session()->invalidate();
 
    $request->session()->regenerateToken();
 
    return redirect('/');
}
}