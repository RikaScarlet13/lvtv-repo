<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User; // Import the User model
use Illuminate\Support\Facades\Hash; // Import the Hash facade

class AuthController extends Controller
{
    public function signup(Request $request)
    {
        // Validate the request data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        // Create a new user record
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password), // Hash the password
        ]);

        // Return a response indicating success
        return response()->json(['message' => 'User created successfully'], 201);
    }

    public function login(Request $request)
{
    // Validate the request data
    $request->validate([
        'email' => 'required|string|email',
        'password' => 'required|string',
    ]);

    // Attempt to get the user from the database
    $user = User::where('email', $request->email)->first();

    // Check if the user exists and the password is correct
    if ($user && Hash::check($request->password, $user->password)) {
        // The user is authenticated
        // Here you might want to generate and return an API token for the user
    } else {
        // Authentication failed
        return response()->json(['message' => 'Invalid credentials'], 401);
    }
}
}

