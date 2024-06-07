<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Traits\HasRoles;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return view('admin.users.index', compact('users'));
    }

    public function edit($id)
    {
        $user = User::findOrFail($id);
        $roles = Role::all();
        return view('admin.users.edit', compact('user', 'roles'));
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->syncRoles($request->roles);
        return redirect()->route('admin.users.index')->with('success', 'User roles updated successfully.');
    }

    public function getUserRole()
    {
        $user = Auth::user();
        $roles = $user->getRoleNames(); // This will return a collection of role names

        return response()->json([
            'roles' => $roles,
        ]);
    }
}
