const { exportAllDeclaration } = require('@babel/types');
const sum = require('./sum.js');

// test('test desc', () =>  {})

test('It should add two numbers correctly', () => {
  expect(sum(2, 7)).toBe(9);
});

// assert(foo !== 'bar')
// expect(foo).to.not.equal('bar')
// foo.should.not.equal('bar')
