const assert = require('chai').assert;
const toTestFunc = require('../toDebug');

describe('App', function() {
    it('should return 3', function() {
        assert.equal(toTestFunc(function haha(err, answer) {
            if (err) console.log("error ", err);
            if (answer !== 3) {
            console.log("wrong answer", answer);
            } else {
            console.log("correct");
            }
            return answer;
        }), 3);
    })
})