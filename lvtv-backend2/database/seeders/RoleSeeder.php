<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roleNames = ['super-admin', 'admin', 'streamer', 'moderator', 'student'];

        // Create roles if they don't already exist
        foreach ($roleNames as $roleName) {
            if (!Role::where('name', $roleName)->exists()) {
                Role::create(['name' => $roleName, 'guard_name' => 'web']);
            }
        }

        // Create a super admin user if it doesn't exist
        $superAdmin = User::firstOrCreate(
            ['email' => 'erikamaecamillecorpuz@student.laverdad.edu.ph'],
            [
                'name' => 'Super Admin',
                'google_id' => '108258202257502188786',
                'password' => Hash::make('dummyPassword'),
            ]
        );

        // Assign the super-admin role to the super admin user
        if (!$superAdmin->hasRole('super-admin')) {
            $superAdmin->assignRole('super-admin');
        }
    }
}
