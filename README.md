# fs-mktemp

[![npm Package](https://img.shields.io/npm/v/fs-mktemp.svg)](https://www.npmjs.org/package/fs-mktemp)
[![License](https://img.shields.io/npm/l/express.svg)](https://github.com/honzahommer/node-fs-mktemp/blob/master/LICENSE)
[![build status](https://img.shields.io/travis/honzahommer/node-fs-mktemp/master.svg)](http://travis-ci.org/honzahommer/node-fs-mktemp)
[![downloads per month](http://img.shields.io/npm/dm/fs-mktemp.svg)](https://www.npmjs.org/package/fs-mktemp) [![Greenkeeper badge](https://badges.greenkeeper.io/honzahommer/node-fs-mktemp.svg)](https://greenkeeper.io/)

> `mktemp` command for Node.js

## Installation
> npm install fs-mktemp

## Usage

### mktempDir([prefix='tmp'], [callback]);

- `prefix` `<String>`

#### Example

```js
const { mktempDir } = require('fs-mktemp');

mktempDir((err, dir) => {
  if (err) {
    return console.error(err);
  }

  console.log(dir);
});

mktempDir()
  .then(dir => {
    console.log(dir);
  })
  .catch(err => {
    console.error(err);
  });
```

### mktempDirSync([prefix='tmp'])

- `prefix` `<String>`
- `callback` `<Function>`

#### Example

```js
const { mktempDirSync } = require('fs-mktemp');

console.log(mktempDirSync());
```

### mktempFile([prefix='tmp'], [callback])

- `prefix` `<String>`

#### Example

```js
const { mktempFile } = require('fs-mktemp');

mktempFile((err, file) => {
  if (err) {
    return console.error(err);
  }

  console.log(file);
});

mktempFile()
  .then(file => {
    console.log(file);
  })
  .catch(err => {
    console.error(err);
  });
```

### mktempFileSync([prefix='tmp'])

- `prefix` `<String>`
- `callback` `<Function>`

#### Example

```js
const { mktempFileSync } = require('fs-mktemp');

console.log(mktempFileSync());
```
