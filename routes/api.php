<?php

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


// use Illuminate\Http\Request;
// Route::post('register', 'API\AuthController@signup');
// Route::post('login', 'API\AuthController@login');
// Route::post('verify_otp', 'API\AuthController@verifyOtp');
Route::namespace('Api')->name('api.')->group(function () {

    // Backend Api
    Route::namespace('Admin')->prefix('admin')->name('admin.')->group(function () {
    });
});
