var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss', 'resources/assets/css');

    mix.copy('node_modules/bootstrap-sass/assets/javascripts/bootstrap.js', 'resources/assets/js/vendor/bootstrap/bootstrap.js')
       .copy('node_modules/jquery-tabby/jquery.textarea.js', 'resources/assets/js/vendor/jquery-tabby/jquery.textarea.js')
       .copy('bower_components/SyntaxHighlighter/scripts/XRegExp.js', 'resources/assets/js/vendor/SyntaxHighlighter/XRegExp.js')
       .copy('bower_components/SyntaxHighlighter/scripts/shCore.js', 'resources/assets/js/vendor/SyntaxHighlighter/shCore.js')
       .copy('bower_components/SyntaxHighlighter/scripts/shBrushCpp.js', 'resources/assets/js/vendor/SyntaxHighlighter/shBrushCpp.js')
       .copy('bower_components/SyntaxHighlighter/styles/shCore.css', 'resources/assets/css/vendor/SyntaxHighlighter/shCore.css')
       .copy('bower_components/SyntaxHighlighter/styles/shThemeEclipse.css', 'resources/assets/css/vendor/SyntaxHighlighter/shThemeEclipse.css');
    
    mix.browserify('client.js');

    mix.scripts([
        'vendor/jquery/jquery.js',
        'vendor/bootstrap/bootstrap.js',
        'vendor/SyntaxHighlighter/XRegExp.js',
        'vendor/SyntaxHighlighter/shCore.js',
        'vendor/SyntaxHighlighter/shBrushCpp.js',
        'vendor/jquery-tabby/jquery.textarea.js',
        'components/flashy.js',
        'application.js'
    ], 'public/js/app.js');

    mix.styles([
        'vendor/SyntaxHighlighter/shCore.css',
        'vendor/SyntaxHighlighter/shThemeEclipse.css',
        'app.css'
    ], 'public/css/app.css');

    mix.version(['public/css/app.css', 'public/js/app.js', 'public/js/client.js']);
});
