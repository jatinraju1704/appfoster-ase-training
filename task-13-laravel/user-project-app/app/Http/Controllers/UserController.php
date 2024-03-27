<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserProject;

class UserController extends Controller
{
    
    public function create(Request $request){
        $user = new User();
        $user->name = $request["name"];
        $user->email = $request["email"];
        $user->gender = $request["gender"];
        $user->status = $request["status"];
        $user->save();
        return $user;
    }


    public function getAll(){
        $users = User::all();
        return $users;
    }

    public function getByid(Request $request){
        $uid = $request['id'];
        $user = User::where('user_id', $uid)->get();
        return $user;
    }

    public function deleteById(Request $request){
        $uid = $request['id'];
        $user = User::where('user_id', $uid)->delete();
        $userprojects = UserProject::where('user_id', $uid)->delete();
        return $user;
    }
    public function UpdateById(Request $request) {
        $user = new User();
        $uid = $request['id'];
        $user->name = $request["name"];
        $user->email = $request["email"];
        $user->gender = $request["gender"];
        $user->status = $request["status"];
        $u = User::where('user_id', $uid)->update($user->toArray());
        return $u;
    }
}
