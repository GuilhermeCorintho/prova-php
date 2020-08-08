<?php

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

Route::get('persons', 'PersonController@getAllPersons');
Route::get('person/{id}', 'PersonController@getPerson');
Route::post('person', 'PersonController@createPerson');
Route::put('person/{id}', 'PersonController@updatePerson');
Route::delete('person/{id}','PersonController@deletePerson');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
