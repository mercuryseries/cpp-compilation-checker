<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class CompilationController extends Controller
{
    public function cPlusPlus(Request $request)
    {
        $code = $request->code;

        if (empty($code)) {
            return "Sorry. The code area is empty.";
        }
        
        $compiler = "g++";
        $filename_code = "main.cpp";
        $filename_error = "error.tmp";
        $command = $compiler . " -lm " . $filename_code . " 2>" . $filename_error;
        
        $file_code = fopen($filename_code, "w+");
        fwrite($file_code, $code);
        fclose($file_code);

        shell_exec($command);
        $error = file_get_contents($filename_error);
        
        exec("rm $filename_code");
        exec("rm *.o");
        exec("rm *.tmp");
        exec("rm a.out");

        return $error;
    }
}
