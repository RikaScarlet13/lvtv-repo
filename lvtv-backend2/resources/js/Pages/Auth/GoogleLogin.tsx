import React from "react";

const GoogleLogin: React.FC = () => {
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
            </div>
        </div>
    );
};

export default GoogleLogin;
