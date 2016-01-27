<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    
    Route::get('/', [
        'as'   => 'root_path',
        'uses' => 'PagesController@home'
    ]);

    Route::get('/about', [
        'as'   => 'about_path',
        'uses' => 'PagesController@about'
    ]);

    Route::post('/compile', function () {
        return shell_exec('g++ /home/freedev/Desktop/cpp_projects/hello.cpp 2>&1');
    });

});
