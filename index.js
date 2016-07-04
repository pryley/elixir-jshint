var gulp   = require( 'gulp' );
var jshint = require( 'gulp-jshint' );
var Elixir = require( 'laravel-elixir' );

/*
 |----------------------------------------------------------------
 | JSHint
 |----------------------------------------------------------------
 |
 | This task uses JSHint to enforce proper coding conventions and
 | detect errors or potential problems in your JavaScript code
 | before the files are concatenated and minified for usage.
 */

var config = Elixir.config;

Elixir.extend( 'jshint', function( src, options )
{
    var paths = new Elixir.GulpPaths().src( src || [
        config.get( 'assets.js.folder' ) + '/**/*.js',
        '!' + config.get( 'assets.js.folder' ) + '/vendor/**/*.js',
    ]);

    paths.output = [];

    new Elixir.Task( 'jshint', function()
    {
        this.recordStep( 'Analysing JS' );

        return gulp
            .src( paths.src.path )
            .pipe( jshint( options || {} ))
            .pipe( jshint.reporter( 'jshint-stylish' ))
            .pipe( jshint.reporter( 'fail' ))
            .on( 'error', function( e )
            {
                new Elixir.Notification().error( e, 'JSHint Failed!' );

                this.emit('end');
            })
            .pipe( new Elixir.Notification( 'JSHint Passed!' ));
    }, paths )
    .watch( paths.src.path );
});
