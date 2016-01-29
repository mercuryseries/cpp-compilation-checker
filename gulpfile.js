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
    
    mix.browserify('client.js');

    mix.scripts([
        'vendor/jquery/jquery.js',
        'vendor/bootstrap/bootstrap.js',
        'vendor/jquery-tabby/jquery.textarea.js',
        'components/flashy.js',
        'application.js'
    ], 'public/js/app.js');

    mix.styles([
        'app.css'
    ], 'public/css/app.css');

    mix.version(['public/css/app.css', 'public/js/app.js', 'public/js/client.js']);
});
