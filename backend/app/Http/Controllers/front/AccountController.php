<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AccountController extends Controller
{
   public function register(Request $request){

        $validator = Validator::make($request->all(),[

            'name' => 'required|min:5',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8|confirmed',
        ]);

        // This will return validator error
        if($validator->fails()){
            return response()->json([
                'status' => 400,
                'errors' => $validator->error()
            ],400);
        }

    // Now Save info in Database
    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
    ]);

    // Return success response
    return response()->json([
        'status' => 200,
        'message' => 'User registered successfully',
        'user' => $user
    ],200);
   }
}
