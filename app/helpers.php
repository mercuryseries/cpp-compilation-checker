<?php

if (!function_exists('page_title')) {
    function page_title($title = '')
    {
        return !empty($title) ?
               "{$title} - IFT-3001 | Vérificateur de Complication C++"
               : "IFT-3001 | Vérificateur de Complication C++";
    }
}
