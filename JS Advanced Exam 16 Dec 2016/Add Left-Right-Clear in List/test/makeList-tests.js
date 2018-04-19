/**
 * Created by Valeri on 7/17/2017.
 */
let makeList = require('../list-add-left-right-clear').makeList;
let expect = require('chai').expect;

describe("Unit testing of makeList()", function () {
    let myList = {};

    beforeEach(function () {
        myList = makeList();
    });

    describe("Testing addLeft()", function () {
       it("should add argument to index [0]", function () {
           myList.addLeft(20);
           myList.addLeft("nope");
           myList.addLeft("hello");
           myList.addRight("yes");
           expect(myList.toString().indexOf('hello')).to.equal(0);
       });

       it("should add empty string, when passed nothing", function () {
           myList.addLeft();
           myList.addLeft();
           myList.addLeft();
           let output = myList.toString().split(', ');
           expect(output.length).to.equal(3);
       });
    });
    describe("Testing addRight()", function () {
       it("should add argument at the end", function () {
           myList.addRight("hello");
           myList.addRight("yellow");
           let output = myList.toString().split(', ');
           expect(output[output.length - 1]).to.equal("yellow");
       });

       it("should add empty string, when nothing passed", function () {
          myList.addRight();
          myList.addRight();
          let output = myList.toString().split(', ');
          expect(output.length).to.equal(2);
       });
    });

    describe("Testing clear()", function () {
        it("should make new empty array", function () {
           myList.addRight("hellow");
           myList.addLeft("yellow");
           myList.addRight(123);
           myList.clear();
           expect(myList.toString().length).to.equal(0);
        });
    });
});