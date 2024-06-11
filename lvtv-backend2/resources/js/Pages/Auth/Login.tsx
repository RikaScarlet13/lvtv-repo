// import { useEffect, FormEventHandler } from 'react';
// import Checkbox from '@/Components/Checkbox';
// import GuestLayout from '@/Layouts/GuestLayout';
// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import { Head, Link, useForm } from '@inertiajs/react';

// export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         email: '',
//         password: '',
//         remember: false,
//     });

//     useEffect(() => {
//         return () => {
//             reset('password');
//         };
//     }, []);

//     const submit: FormEventHandler = (e) => {
//         e.preventDefault();

//         post(route('login'));
//     };

//     return (
//         <GuestLayout>
//             <Head title="Log in" />

//             {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

//             <form onSubmit={submit}>
//                 <div>
//                     <InputLabel htmlFor="email" value="Email" />

//                     <TextInput
//                         id="email"
//                         type="email"
//                         name="email"
//                         value={data.email}
//                         className="mt-1 block w-full"
//                         autoComplete="username"
//                         isFocused={true}
//                         onChange={(e) => setData('email', e.target.value)}
//                     />

//                     <InputError message={errors.email} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel htmlFor="password" value="Password" />

//                     <TextInput
//                         id="password"
//                         type="password"
//                         name="password"
//                         value={data.password}
//                         className="mt-1 block w-full"
//                         autoComplete="current-password"
//                         onChange={(e) => setData('password', e.target.value)}
//                     />

//                     <InputError message={errors.password} className="mt-2" />
//                 </div>

//                 <div className="block mt-4">
//                     <label className="flex items-center">
//                         <Checkbox
//                             name="remember"
//                             checked={data.remember}
//                             onChange={(e) => setData('remember', e.target.checked)}
//                         />
//                         <span className="ms-2 text-sm text-gray-600">Remember me</span>
//                     </label>
//                 </div>

//                 <div className="flex items-center justify-end mt-4">
//                     {canResetPassword && (
//                         <Link
//                             href={route('password.request')}
//                             className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                         >
//                             Forgot your password?
//                         </Link>
//                     )}

//                     <PrimaryButton className="ms-4" disabled={processing}>
//                         Log in
//                     </PrimaryButton>
//                 </div>
//             </form>
//         </GuestLayout>
//     );
// }

import React from "react";
import { useState } from "react";
import axios from "axios";

const LoginPage: React.FC = () => {
    const [error, setError] = useState("");
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            // Make request to your backend to authenticate user
            const response = await axios.post("/api/login", {
                /* your login data */
            });
            const { token } = response.data; // Assuming your backend returns a token upon successful login

            // Store token in session storage
            sessionStorage.setItem("token", token);

            // Set the Authorization header with the token
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            // Redirect to dashboard or any other page upon successful login
            // Replace '/dashboard' with your desired route
            window.location.href = "/welcome";
        } catch (error) {
            setError("Login failed. Please try again."); // Handle login error
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800">
            <div className="max-w-md w-full space-y-8">
                {/* Continue with Google Button */}
                <div className="text-center">
                    <a
                        href="https://lvtv.online/auth/google/redirect"
                        className="inline-block w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white uppercase bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                        Continue with Google
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
