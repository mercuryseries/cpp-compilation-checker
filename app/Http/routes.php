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
        $CC = "g++";
        $out = "./a.out";
        $code = $_POST["code"];
        $input = $_POST["input"];
        $filename_code = "main.cpp";
        $filename_in = "input.tmp";
        $filename_error = "error.tmp";
        $executable = "a.out";
        $command = $CC . " -lm " . $filename_code;
        $command_error = $command . " 2>" . $filename_error;

        if (trim($code) == "") {
            return "Sorry. The code area is empty.";
        }
        
        $file_code = fopen($filename_code, "w+");
        fwrite($file_code, $code);
        fclose($file_code);
        
        $file_in = fopen($filename_in, "w+");
        fwrite($file_in, $input);
        fclose($file_in);

        exec("chmod 777 $executable");
        exec("chmod 777 $filename_error");

        shell_exec($command_error);
        $error = file_get_contents($filename_error);

        return $error;
        
        exec("rm -rf $filename_code");
        exec("rm -rf *.o");
        exec("rm -rf *.tmp");
        exec("rm -rf $executable");
    });
});
