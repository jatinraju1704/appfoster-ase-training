<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\UserProjectController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


//* User's API
Route::post("/host/user/create", [UserController::class, 'create']);
Route::get("/host/user/get", [UserController::class, 'getAll']);
Route::get("/host/user/get/{id}", [UserController::class, 'getByid']);
Route::delete("/host/user/delete/{id}", [UserController::class, 'deleteById']);
Route::put("/host/user/update/{id}", [UserController::class, 'UpdateById']);


//* Project's API
Route::post("/host/project/create", [ProjectController::class, 'create']);
Route::get("/host/project/get", [ProjectController::class, 'getAll']);
Route::get("/host/project/get/{pid}", [ProjectController::class, 'getById']);
Route::delete("/host/project/delete/{pid}", [ProjectController::class, 'deleteById']);
Route::put("/host/project/update/{pid}", [ProjectController::class, 'UpdateById']);

//* User-Project API
Route::get("/host/user/{id}/project",[UserProjectController::class, 'getProjectsByUserId']);
Route::post("/host/user/project",[UserProjectController::class, 'addUserProject']);