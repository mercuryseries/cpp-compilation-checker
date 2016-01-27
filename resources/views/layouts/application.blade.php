<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{ page_title($title ?? '') }}</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="IFT-3001 - C++ Code Build Checker - Université LAVAL">
    <meta name="keywords" content="c++, vérificateur, compilation, build, checker, ift-3001, université, laval, conception, analayse, algorithme, québec, canada">

    <link href="//fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link href='//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700' rel='stylesheet'>
    
    <link rel="stylesheet" type="text/css" href="{{ elixir('css/app.css') }}" />

    @include('layouts/partials/_shim')
</head>
<body>
    @include('layouts/partials/_browsehappy')

    @include('layouts/partials/_nav')

    <div class="container">
        @yield('content')
        
        <hr>

        @include('layouts/partials/_footer')
    </div>

    <script src="{{ elixir('js/app.js') }}"></script>
    <script src="{{ elixir('js/client.js') }}"></script>
    @include('flashy::message')
    @include('shared/_build_errors_modal')
</body>
</html>