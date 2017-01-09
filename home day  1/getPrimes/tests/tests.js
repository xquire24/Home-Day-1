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

it("should return object of type array for 10", function() {
      expect(getPrimes(10)).toEqual([2, 3, 5, 7]);
    });

it("should return object of type array for 30", function() {
      expect(getPrimes(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });
it("should return object of type array for 50", function() {
      expect(getPrimes(50)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29,31, 37, 41, 43, 47]);
    });

it("should return object of type array for 5", function() {
      expect(getPrimes(1)).toEqual([]);
    });

it("should return object of type array for 45", function() {
      expect(getPrimes(45)).toEqual([2,3,5,7, 11, 13, 17, 19, 23, 29,31, 37, 41, 43]);
    });

it("should return object of type array for 100", function() {
      expect(getPrimes(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
    });


});