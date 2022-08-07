<?php

use App\Http\Controllers\AdController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
route::post('/ads/{id}', [AdController::class, 'update']);
Route::apiResource('/ads', AdController::class);
Route::apiResource('/comments', CommentController::class);
Route::apiResource('/posts', PostController::class);
Route::apiResource('/users', UserController::class);
Route::post('/login', [UserController::class, 'log']);
// Route::post('/comments', [CommentController::class, 'store']);
// Route::patch('/ads/{id}', [AdController::class, 'updateAd']);


