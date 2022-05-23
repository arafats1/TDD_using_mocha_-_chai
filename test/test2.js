
// This test is for testing factorial numbers
const assert = require('chai').assert;
const factorial = require('../factorial');

describe('Testing our factorial', () => {
    it('should return 1 when given 0', () => {
        assert.equal(factorial(0), 1);
    });
    it('should return 1 when given 1', () => {
        assert.equal(factorial(1), 1);
    });
    
    it('should return 2 when given 2', () => {
        assert.equal(factorial(2), 2);
    });
    
    it('should return 6 when given 3', () => {
        assert.equal(factorial(3), 6);
    });
    
    it('should return 24 when given 4', () => {
        assert.equal(factorial(4), 24);
    });
    
    it('should return 120 when given 5', () => {
        assert.equal(factorial(5), 120);
    });
    it('should return 720 when given 6', () => {
        assert.equal(factorial(6), 720);
    });
    });