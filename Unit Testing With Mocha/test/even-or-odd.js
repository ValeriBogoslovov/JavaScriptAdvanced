/**
 * Created by Valeri on 7/10/2017.
 */


let expect = require("chai").expect;
let isOddOrEven = require("../odd-or-even").isOddOrEven;

describe("Test isOddOrEven function", function () {
   it("with a number parameter, should return undefined", function () {
      expect(isOddOrEven(13)).to.equal(undefined, "Function did not return the correct result!");
   });

   it("with an object parameter, should return undefined", function () {
       expect(isOddOrEven({name: "pesho"})).to.equal(undefined, "Function did not return the correct result!")
   });

   it("with an even length string, should return correct result", function () {
       expect(isOddOrEven("roar")).to.equal('even', 'Function did not return the correct result!')
   });

    it("with an odd length string, should return correct result", function () {
        expect(isOddOrEven("arr")).to.equal('odd', 'Function did not return the correct result!')
    })

    it("with an even length string separated by space, should return correct result", function () {
        expect(isOddOrEven("arr is even.")).to.equal('even', 'Function did not return the correct result!')
    })
});