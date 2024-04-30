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

const LoginPage: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800">
            <div className="max-w-md w-full space-y-8">
                {/* Session Status */}
                <div>{/* Display session status here */}</div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    {/* Email Address */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                            required
                            autoFocus
                            autoComplete="username"
                        />
                        {/* Display email input error messages here */}
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                            required
                            autoComplete="current-password"
                        />
                        {/* Display password input error messages here */}
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember_me"
                                type="checkbox"
                                name="remember"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-600 dark:checked:bg-indigo-500"
                            />
                            <label
                                htmlFor="remember_me"
                                className="ml-2 block text-sm text-gray-800 dark:text-gray-300"
                            >
                                Remember me
                            </label>
                        </div>
                        {/* Forgot Password Link */}
                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    {/* Login Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Log in
                        </button>
                    </div>
                </form>

                {/* Or Separator */}
                <div className="mt-6">
                    <hr className="h-px bg-gray-300 dark:bg-gray-700" />
                    <div className="relative px-3">
                        <span className="absolute inset-0 flex items-center justify-center w-full">
                            <span className="relative z-10 bg-white px-2 text-sm text-gray-500 dark:text-gray-400">
                                Or
                            </span>
                        </span>
                    </div>
                </div>

                {/* Continue with Google Button */}
                <div className="text-center">
                    <a
                        href="http://localhost:8000/auth/google/redirect"
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
