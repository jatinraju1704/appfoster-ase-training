<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

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



Route::get("/create", [UserController::class, 'create']);
Route::get("/getall", [UserController::class, 'getAll']);
Route::get("/getbyid/{id}", [UserController::class, 'getByid']);

// Route::get("/delete", );
// Route::get("/update", );