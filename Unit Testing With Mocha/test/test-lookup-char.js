/**
 * Created by Valeri on 7/10/2017.
 */
let expect = require('chai').expect;
let lookupChar = require('../lookup-char').lookupChar;

describe("Test lookupChar function", function () {
   it("with a non-string first parameter, should return undefined", function () {
       expect(lookupChar(13, 0)).to.equal(undefined, "The function did not return the correct result!");
   });

   it("with a non number second parameter, should return undefined", function () {
       expect(lookupChar("sasho","0")).to.equal(undefined, "The function did not return the correct result!");
   });

   it("with a string length <= index, should return message 'Incorrect index'", function () {
       expect(lookupChar("sa", 2)).to.equal("Incorrect index", "The function did not return the correct result!");
   });

   it("with an index < 0, should return message 'Incorrect index'", function () {
       expect(lookupChar("sa", -1)).to.equal('Incorrect index', "The function did not return the correct result!");
   });

   it("with valid parameters, should return char value at the given index", function () {
      expect(lookupChar("sasho", 3)).to.equal('h', "The function did not return the correct result!");
   });

   it("with valid parameters and index on white space, should return the white space char", function () {
      expect(lookupChar("what is your name", 4)).to.equal(' ', "The function did not return the correct result!");
   });

   it("with a floating point number , should return undefined", function () {
      expect(lookupChar("sasho", 3.5)).to.equal(undefined, "The function did not return the correct result!")
   });
});