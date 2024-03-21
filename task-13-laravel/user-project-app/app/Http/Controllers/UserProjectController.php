<?php

namespace App\Http\Controllers;
use App\Models\Project;
use App\Models\User;
use App\Models\UserProject;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProjectController;

use Illuminate\Http\Request;

class UserProjectController extends Controller
{
    public function getProjectsByUserId(Request $request)
    {
        $uid = $request['id'];
        $user = User::where('user_id', $uid)->first();

        $projectList = UserProject::where('user_id', $uid)->distinct('project_id')->pluck('project_id');
        $projects = array();
        foreach ($projectList as $pid)
        {
            $project = Project::where('project_id', $pid)->first();
            array_push($projects, $project);
        }
        $user->projects = $projects;
        return $user;
    }

    public function addUserProject(Request $request)
    {
        $uid = $request['user_id'];
        $pid = $request['project_id'];
        $projectList = UserProject::where('user_id', $uid)->where('project_id', $pid)->get();
        if($projectList->isEmpty())
        {
            $userProject = new UserProject();
            $userProject->user_id = $uid;
            $userProject->project_id = $pid;
            $userProject->save();
            return $userProject;
        }
        return $projectList;
    }
}
