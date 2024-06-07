<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\UserController; // Import the missing UserController class


Route::middleware('auth:sanctum')->get('/user/roles', [UserController::class, 'getUserRole']);