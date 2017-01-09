// testing code goes here

'use strict'

var chai = require('jasmine');
// var assert = chai.assert;
// var expect = chai.expect;
// var should = chai.should();
var getPrimes = require('../app/library.js').getPrimes;


describe("prime number result tests ", function() {

it("should return object of type array for 3", function() {
      expect(getPrimes(3)).toEqual([2,3]);
    });


});