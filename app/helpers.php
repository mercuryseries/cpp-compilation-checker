<?php

if (!function_exists('page_title')) {
    function page_title($title = '')
    {
        return !empty($title) ?
               "{$title} - IFT-3001 | C++ Code Build Checker"
               : "IFT-3001 | C++ Code Build Checker";
    }
}
