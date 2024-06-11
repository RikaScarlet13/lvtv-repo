@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>Edit User Roles</h1>

        <form action="{{ route('admin.users.update', $user->id) }}" method="POST">
            @csrf
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" class="form-control" value="{{ $user->name }}" disabled>
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" class="form-control" value="{{ $user->email }}" disabled>
            </div>

            <div class="form-group">
                <label for="roles">Roles</label>
                <select name="roles[]" id="roles" class="form-control" multiple>
                    @foreach($roles as $role)
                        <option value="{{ $role->name }}" {{ $user->hasRole($role->name) ? 'selected' : '' }}>
                            {{ $role->name }}
                        </option>
                    @endforeach
                </select>
            </div>

            <button type="submit" class="btn btn-primary">Update Roles</button>
        </form>
    </div>
@endsection
