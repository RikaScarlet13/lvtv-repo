<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Socialite\GoogleAuthController;
use App\Http\Controllers\Admin\UserController;

use Laravel\Socialite\Facades\Socialite;


Route::middleware(['guest', 'App\Http\Middleware\RedirectIfAuthenticated','App\Http\Middleware\RevalidateBackHistory'])->group(function () {
    Route::get('auth/google/redirect', [GoogleAuthController::class, 'redirect'])->name('google-auth.redirect');
    Route::get('auth/google/callback', [GoogleAuthController::class, 'callback'])->name('google-auth.callback');
});

Route::middleware('auth')->get('/open-owncast', function () {
    return view('owncast');
})->name('open-owncast');

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/welcome', function () {
    return Inertia::render('Welcome');
})->middleware(['auth', 'verified'])->name('welcome');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::middleware(['auth', 'role:super-admin'])->group(function () {
//     Route::get('/admin/users', [UserController::class, 'index'])->name('admin.users.index');
//     Route::post('/admin/users/{user}/assign-role', [UserController::class, 'assignRole'])->name('admin.users.assignRole');
// });

Route::middleware(['auth', 'role:super-admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/users', [UserController::class, 'index'])->name('users.index');
    Route::get('/users/{id}/edit', [UserController::class, 'edit'])->name('users.edit');
    Route::post('/users/{id}', [UserController::class, 'update'])->name('users.update');
});

// Route::get('/{any}', function () {
//     return view('app');
// })->where('any', '.*');

// Route::middleware(['preventBackHistory','otherMiddlewareClasses'])->group(function () {
    
// });


// 



require __DIR__.'/auth.php';
