const { it } = require('jest-circus');
const { describe } = require('yargs');

function add(a, b) {
  if (typeof a === 'number' && b === undefined) return a;
  if (typeof b !== 'number' || typeof b !== 'number') return undefined;
  return a + b;
}

const should = require('chai').should();

describe('Add', function () {
  it('should sum to numbers', function () {
    add(3, 5).should.equal(8);
    add(2, 7).should.equal(9);
  });

  it('should return undefined when is not passed numbers', function () {
    should.equal(add('hello', 'world'), undefined);
    should.equal(add(1, 'world'), undefined);
    should.equal(add('hello', 1), undefined);
  });

  it('should return the number if only one is passed', function () {
    should.equal(add(8), 8);
  });
});
