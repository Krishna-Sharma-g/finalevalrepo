const { expect } = require('chai');
const add = require('../src/utils/add'); // Example utility function

describe('Utility Function Tests', () => {
    it('should correctly add two numbers', () => {
        expect(add(2, 3)).to.equal(5);
    });
});

