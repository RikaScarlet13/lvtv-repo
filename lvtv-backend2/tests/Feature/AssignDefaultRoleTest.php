<?php

// test('example', function () {
//     $response = $this->get('/');

//     $response->assertStatus(200);
// });


namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Spatie\Permission\Models\Role;
use App\Listeners\AssignDefaultRole;

class AssignDefaultRoleTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test that the user is assigned the "student" role upon registration.
     *
     * @return void
     */
    public function test_user_is_assigned_student_role_on_registration()
    {
        // Ensure the "student" role exists
        Role::create(['name' => 'student']);

        // Create a new user instance
        $user = User::factory()->create();

        // Trigger the Registered event
        $event = new Registered($user);
        $listener = new AssignDefaultRole();
        $listener->handle($event);

        // Refresh the user instance
        $user->refresh();

        // Assert that the user has the "student" role
        $this->assertTrue($user->hasRole('student'));
    }
}
