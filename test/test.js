// This test is for testing multiplication numbers
const assert = require('chai').assert;
const multiply = require('../multiply');

describe('Testing our multiplication', () => {
  it('should multiply 1 and 1 to get 1', () => {
    // using assert to test our function, first failed with no function RED
    // Test passed after creating function that returned 1 GREEN
    assert.equal(multiply(1, 1), 1);
  });

 
  it('should multiply 2 and 2 to get 4', () => {
    // Test failed while we used a return value of 1
    // Test passed after creating function that two numbers to return a product
    // Passed
    assert.equal(multiply(2, 2), 4);
  });

  it('should multiply 3 and 3 to get 9', () => {
    assert.equal(multiply(3, 3), 9);
    // Passed
  });

  it('should multiply 4 and 4 to get 16', () => {
    assert.equal(multiply(4, 4), 16);
  });
  // Passed

  it('should multiply 23 and 45 to get 1035', () => {
    assert.equal(multiply(23, 45), 1035);
  });
  // Passed
  it('should multiply 7 and 8 to get 56', () => {
    assert.equal(multiply(7, 8), 56);
  });
  it('should multiply 1000 and 1000 to get 1000000', () => {
    assert.equal(multiply(1000, 1000), 1000000);
  });
});
