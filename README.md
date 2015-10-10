# Elixir JSHint

## Install

```bash
$ npm install elixir-jshint --save-dev
```

## Usage

### Example `gulpfile.js`

```js
var elixir = require( 'laravel-elixir' );

require( 'elixir-jshint' );

elixir( function( mix )
{
    mix.jshint( ['js/**/*.js', '!js/vendor/*.js'] );
});
```

### Advanced Example

```js
var elixir = require( 'laravel-elixir' );

require( 'elixir-jshint' );

elixir( function( mix )
{
    mix.jshint( ['js/**/*.js', '!js/vendor/*.js'], {
        lookup: true, // default is true
        linter: 'some-jshint-module' // default is "jshint"
    });
});
```

# License

[MIT](/LICENSE)
