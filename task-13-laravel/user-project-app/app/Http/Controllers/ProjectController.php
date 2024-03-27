<?php

namespace App\Http\Controllers;
use App\Models\Project;
use App\Models\UserProject;

use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function create(Request $request){
        $project = new Project();
        $project->project_name = $request['project_name'];
        $project->project_desc = $request['project_desc'];
        $project->save();
        return $project;
    }

    public function getAll(){
        $projects = Project::all();
        return $projects;
    }

    public function getByid(Request $request){
        $projectId = $request['pid'];
        $project = Project::where('project_id', $projectId)->get();
        return $project;
    }

    public function deleteById(Request $request){
        $projectId = $request['pid'];
        $project = Project::where('project_id', $projectId)->delete();
        $userprojects = UserProject::where('project_id', $projectId)->delete();
        return $userprojects;
    }

    public function UpdateById(Request $request){
        $project = new Project();
        $projectId = $request['pid'];
        $project->project_name = $request['project_name'];
        $project->project_desc = $request['project_desc'];
        $p = Project::where('project_id', $projectId)->update($project->toArray());
        return $p;
    }
}
