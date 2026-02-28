<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AccountController extends Controller
{
   public function register(Request $request){

        $validator = Validator::make($request->all(),[

            'name' => 'required|min:5',
            'email' => 'required|email|unique:users',
            'password' => 'required',
        ]);

        // This will return validator error
        if($validator->fails()){
            return response()->json([
                'status' => 400,
                'errors' => $validator->error()
            ],400);
        }

        // Now Save info in Database
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        // Return success response
        return response()->json([
            'status' => 200,
            'message' => 'User registered successfully',
            'user' => $user
        ],200);
    }

    public function authenticate(Request $request){
        // Validate the request
        $validator = Validator::make($request->all(),[
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 400,
                'errors' => $validator->error()
            ],400);
        }

        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            
            $user = User::find(Auth::user()->id);

            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'status' => 200,
                'token' => $token,
                'name' => $user->name,
                'id' => Auth::user()->id
            ],200);
        } else {
            return response()->json([
                'status' => 401,
                'message' => 'Invalid email or password',
            ],401);
        }
    }
}
