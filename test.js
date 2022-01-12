const assert = require('assert');

const capGreeting = require('./index.js');

if (capGreeting('Joe') !== 'Hello JOE') {
  throw new Error('wrong output');
} else {
  console.log('Test passing!');
}

// asserting true condition
assert(capGreeting('Joe') === 'Hello JOE');
console.log('Test passing!');

// function assert(condition) {
//   if (!condition) throw new Error();
// }
