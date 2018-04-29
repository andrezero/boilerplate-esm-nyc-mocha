# Node.js boilerplate - ES Modules + Mocha + Nyc

> Because ESM not really there yet.

Result of a quick research on how to get ESM code to test in Node.js with accurate code coverage reports.

Uses:
- [esm](https://github.com/standard-things/esm)
- [mocha](https://github.com/mochajs/mocha)
- [chai](https://github.com/chaijs/chai)
- [nyc](https://github.com/istanbuljs/nyc)

Includes:
- VSCode launcher


## Getting started

```
npm install

npm run test
npm run coverage
```


## What makes it work

- the `--require esm` argument, when running `_mocha`

- the `"require": ["esm"]` setting, in `.nycrc`

```json
  "require": [
    "esm"
  ],
```

- the `cjs: true` setting, in package.json

```json
  "esm": {
    "cjs": true
  },
```


## Kudos

Kudos:
- [all the people trying hard out there](https://www.google.es/search?q=nyc+coverage+unknown)
- [John-David Dalton's ESM package](https://github.com/standard-things/esm)
- [ESM Zero Configuration](https://medium.com/web-on-the-edge/tomorrows-es-modules-today-c53d29ac448c)
- [dschnare/std-esm-sandbox](https://github.com/dschnare/std-esm-sandbox/) - older boilderplate that was still using the deprecated `@std/esm`
- [Native ES Modules in NodeJS: Status And Future Directions](https://medium.com/@giltayar/native-es-modules-in-nodejs-status-and-future-directions-part-i-ee5ea3001f71) - good read
- [Testing in ES6 with Mocha and Babel 6](http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/) - another good read, even if Babel is no longer required here


## [MIT License](LICENSE-MIT)

[Copyright (c) 2017 Andre Torgal](http://andrezero.mit-license.org/2017)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
