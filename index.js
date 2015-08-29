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

Elixir.extend( 'jshint', function( src, options )
{
    var paths = new Elixir.GulpPaths().src( src );

    new Elixir.Task( 'jshint', function()
    {
        this.log( paths.src );

        return gulp
            .src( src )
            .pipe( jshint( options || {} ))
            .pipe( jshint.reporter( 'jshint-stylish' ))
            .pipe( jshint.reporter( 'fail' ))
            .on( 'error', function( e )
            {
                new Elixir.Notification().error( e, 'JSHint Failed!' )

                this.emit('end');
            })
            .pipe( new Elixir.Notification( 'JSHint Passed!' ));
    })
    .watch( paths.src.path );
});
