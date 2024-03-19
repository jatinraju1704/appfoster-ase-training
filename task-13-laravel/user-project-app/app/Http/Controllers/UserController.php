<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    
    public function create(){
        
    }

    public function getAll(){
        $users = User::all();
        echo "<pre>";
        print_r($users->toArray());
    }

    public function getByid(Request $request){
        $uid = $request['id'];
        $user = User::where('user_id', $uid)->get();
        echo "<pre>";
        print_r($user->toArray());
    }

    public function deleteById(){

    }
    public function UpdateById(){

    }
}
