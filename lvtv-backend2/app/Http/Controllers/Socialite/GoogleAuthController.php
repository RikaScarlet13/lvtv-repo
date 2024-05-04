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

        $user = User::updateOrCreate([
            'google_id' => $googleUser->getId(),
        ], [
            'name' => $googleUser->getName(),
            'email' => $googleUser->getEmail(),
            'password' => Hash::make('password'),
        ]);

        
        Auth::login($user);

        // $token = $user->createToken('Google Token')->accessToken;
        $token = JWTAuth::fromUser($user);

    // Redirect to the dashboard or any other page
    return redirect('/dashboard')->with(['access_token' => $token]);
    }

    public function logout(Request $request): RedirectResponse
{
    Auth::logout();
 
    $request->session()->invalidate();
 
    $request->session()->regenerateToken();
 
    return redirect('/');
}
}