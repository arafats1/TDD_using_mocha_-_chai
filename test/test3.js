
// This test is for testing fibonacci numbers
const assert = require('chai').assert;
const fib = require('../fibonacci');

describe('Testing our fibonacci', () => {
    it('should return 1 when given 0', () => {
        assert.equal(fib(0), 0);
    });
    it('should return 1 when given 1', () => {
        assert.equal(fib(1), 1);
    });
    
    it('should return 2 when given 2', () => {
        assert.equal(fib(2), 1);
    });
    
    it('should return 3 when given 3', () => {
        assert.equal(fib(3), 2);
    });
    
    it('should return 5 when given 4', () => {
        assert.equal(fib(4), 3);
    });
    
    it('should return 8 when given 5', () => {
        assert.equal(fib(5), 5);
    });
    it('should return 8 when given 6', () => {
        assert.equal(fib(6), 8);
    });
    });