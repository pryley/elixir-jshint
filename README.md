# elixir-jshint

[![npm version](https://badge.fury.io/js/elixir-jshint.svg)](https://badge.fury.io/js/elixir-jshint)
[![Build Status](https://travis-ci.org/geminilabs/elixir-jshint.svg?branch=master)](https://travis-ci.org/geminilabs/elixir-jshint)

## Install

```bash
$ npm install elixir-jshint --save-dev
$ touch .jshintrc
```

```js
// gulpfile.js
var elixir = require( 'laravel-elixir' );

require( 'elixir-jshint' );

elixir( function( mix )
{
    mix.jshint();
});
```

## Options

### Sources

Type: `String` or `Array`

Glob or array of globs to read. Using this will overwrite all defaults.

```javascript
// default
mix.jshint([
  'public/js/**/*.js',
  '!public/js/vendor/**/*.js'
]);
```

_The prefix `!` is for excluding files._

### JSHint options

Type: `Object`

_See [https://www.npmjs.com/package/gulp-jshint#options](https://www.npmjs.com/package/gulp-jshint#options)_

## License

[MIT](/LICENSE)
