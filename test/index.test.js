const fs = require('fs');
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

    it('promise without content and without prefix', () => {
      mktempFile().then(file => {
        expect(!!file.indexOf('/tmp.')).to.equal(true);
      });
    });

    it('promise without content and with prefix', () => {
      mktempFile('foo').then(file => {
        expect(!!file.indexOf('/foo.')).to.equal(true);
      });
    });

    it('promise with content and without prefix', () => {
      mktempFile({ content: 'bar' }).then(file => {
        expect(!!file.indexOf('/tmp.')).to.equal(true);
        expect(fs.readFileSync(file, 'utf8')).to.equal('bar');
      });
    });

    it('promise with content and with prefix', () => {
      mktempFile({ content: 'bar', prefix: 'foo' }).then(file => {
        expect(!!file.indexOf('/foo.')).to.equal(true);
        expect(fs.readFileSync(file, 'utf8')).to.equal('bar');
      });
    });
  });

  describe('mktempFileSync()', () => {
    it('without content and without prefix', () => {
      expect(!!mktempFileSync().indexOf('/tmp.')).to.equal(true);
    });

    it('without content and with prefix', () => {
      expect(!!mktempFileSync('foo').indexOf('/foo.')).to.equal(true);
    });

    it('with content and without prefix', () => {
      const file = mktempFileSync({ content: 'bar' });

      expect(!!file.indexOf('/tmp.')).to.equal(true);
      expect(fs.readFileSync(file, 'utf8')).to.equal('bar');
    });

    it('with content and with prefix', () => {
      const file = mktempFileSync({ content: 'bar', prefix: 'foo' });

      expect(!!file.indexOf('/foo.')).to.equal(true);
      expect(fs.readFileSync(file, 'utf8')).to.equal('bar');
    });
  });
});
