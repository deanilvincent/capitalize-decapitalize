const assert = require('chai').assert;

const app = require('../index')

describe('Index file test', ()=>{
    it('Should return capitalize every first letter of the word if letter case option is C', ()=>{
        assert.equal(app('c', 'just saying'), 'Just Saying')
    })
})