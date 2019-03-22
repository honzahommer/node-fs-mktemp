const chai = require('chai');
const { expect } = require('chai');
const { mktempDir, mktempDirSync, mktempFile, mktempFileSync } = require('../lib');

describe('fs-mktemp', () => {
  describe('mktempDir()', () => {
    it('callback without prefix', done => {
      mktempDir((err, dir) => {
        expect(!!dir.indexOf('/tmp.')).to.equal(true);
        done();
      });
    });

    it('callback with prefix', done => {
      mktempDir('foo', (err, dir) => {
        expect(!!dir.indexOf('/foo.')).to.equal(true);
        done();
      });
    });

    it('promise without prefix', () => {
      mktempDir().then(dir => {
        expect(!!dir.indexOf('/tmp.')).to.equal(true);
      });
    });

    it('promise with prefix', () => {
      mktempDir('foo').then(dir => {
        expect(!!dir.indexOf('/foo.')).to.equal(true);
      });
    });
  });

  describe('mktempDirSync()', () => {
    it('without prefix', () => {
      expect(!!mktempDirSync().indexOf('/tmp.')).to.equal(true);
    });

    it('with prefix', () => {
      expect(!!mktempDirSync('foo').indexOf('/foo.')).to.equal(true);
    });
  });

  describe('mktempFile()', () => {
    it('callback without prefix', done => {
      mktempFile((err, file) => {
        expect(!!file.indexOf('/tmp.')).to.equal(true);
        done();
      });
    });

    it('callback with prefix', done => {
      mktempFile('foo', (err, file) => {
        expect(!!file.indexOf('/foo.')).to.equal(true);
        done();
      });
    });

    it('promise without prefix', () => {
      mktempFile().then(file => {
        expect(!!file.indexOf('/tmp.')).to.equal(true);
      });
    });

    it('promise with prefix', () => {
      mktempFile('foo').then(file => {
        expect(!!file.indexOf('/foo.')).to.equal(true);
      });
    });
  });

  describe('mktempFileSync()', () => {
    it('without prefix', () => {
      expect(!!mktempFileSync().indexOf('/tmp.')).to.equal(true);
    });

    it('with prefix', () => {
      expect(!!mktempFileSync('foo').indexOf('/foo.')).to.equal(true);
    });
  });
});
