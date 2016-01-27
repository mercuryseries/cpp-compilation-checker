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

        $filename = 'main.cpp';
        $stderr   = 'error.tmp';

        $this->setupWorkspace($filename, $code);
        
        $command = $this->buildCommand($filename, $stderr);

        $this->execute($command);

        $errors = $this->retrieveErrors($stderr);
        
        $this->cleanUp([$filename, '*.o', '*.tmp', 'a.out']);

        return $errors;
    }

    private function buildCommand($filename, $stderr)
    {
        return "g++ -lm " . $filename . " 2>" . $stderr;
    }

    private function setupWorkspace($filename, $code)
    {
        $handle = fopen($filename, "w+");
        fwrite($handle, $code);
        fclose($handle);
    }

    private function execute($command)
    {
        shell_exec($command);
    }

    private function retrieveErrors($stderr)
    {
        return file_get_contents($stderr);
    }

    private function cleanUp($files = [])
    {
        foreach ($files as $file) {
            exec('rm ' . $file);
        }
    }
}
