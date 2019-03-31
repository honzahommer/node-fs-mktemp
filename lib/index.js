const { mkdtemp, mkdtempSync, writeFile, writeFileSync } = require('fs');
const { tmpdir } = require('os');
const { join } = require('path');
const { randomBytes } = require('crypto');
const { fromCallback } = require('universalify');

function randomString (count = 8) {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const bytes = randomBytes(count);
  const value = [];

  for (var i = 0; i < count; i++) {
    value.push(chars[bytes[i] % chars.length]);
  }

  return value.join('');
}

function tempPathPrefix (prefix = 'tmp', suffix = '') {
  return join(tmpdir(), `${prefix}.${suffix}`);
}

function mktempDir (prefix, callback) {
  if (!callback && typeof prefix === 'function') {
    callback = prefix;
    prefix = undefined;
  }

  return mkdtemp(tempPathPrefix(prefix), callback);
}

function mktempDirSync (prefix) {
  return mkdtempSync(tempPathPrefix(prefix));
}

function mktempFile (options, callback) {
  if (!callback && typeof options === 'function') {
    callback = options;
    options = {};
  }

  if (typeof options === 'string') {
    options = { prefix: options };
  }

  const { content = '', prefix } = options || {};
  const file = tempPathPrefix(prefix, randomString());

  return writeFile(file, content, { mode: 0o600 }, err => callback(err, file));
}

function mktempFileSync (options) {
  if (typeof options === 'string') {
    options = { prefix: options };
  }

  const { content = '', prefix } = options || {};
  const file = tempPathPrefix(prefix, randomString());

  writeFileSync(file, content, { mode: 0o600 });

  return file;
}

module.exports = {
  mktempDir: fromCallback(mktempDir),
  mktempDirSync,
  mktempFile: fromCallback(mktempFile),
  mktempFileSync
};
