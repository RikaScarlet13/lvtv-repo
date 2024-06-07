// import { useState } from "react";
// import axiosClient from "../api/axiosClient";
// import { Navigate } from "react-router-dom";

// const Logout = () => {
//     const [token, setToken] = useState<string | null>(null); // Define and initialize the token state variable

//     const handleLogout = async () => {
//         try {
//             const response = await axiosClient.post("/logout", null, {
//                 headers: {
//                     Authorization: `Bearer ${token}`, // Use the token variable here
//                 },
//             });

//             if (response) {
//                 setToken(null); // Reset the token state variable
//                 Navigate("/login");
//             }
//         } catch (error: any) {  // Explicitly type the error object
//             console.log(error.response?.data);
//         }
//     };

//     return (
//         <div>
//             <button onClick={handleLogout}>Logout</button>
//         </div>
//     );
// };

// export default Logout;
