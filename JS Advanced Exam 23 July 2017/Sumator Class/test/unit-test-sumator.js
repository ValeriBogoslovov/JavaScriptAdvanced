/**
 * Created by Valeri on 7/23/2017.
 */
let expect = require('chai').expect;
let Sumator = require('../sumator').Sumator;

describe('Unit Testing Sumator class', function () {
    let sumator;
    beforeEach(function () {
        sumator = new Sumator();
    });

    describe('All properties should exists', function () {
        it('data collection should exist', function () {
            expect(sumator.hasOwnProperty('data')).to.be.true;
        });
        it('add method should exist', function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.true;
        });
        it('sumNums method should exist', function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.true;
        });
        it('removeByFilter method should exist', function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.true;
        });
        it('toString method should exist', function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.true;
        })
    });
    describe('Initial state of collection', function () {
        it('should start with empty collection', function () {
            expect(sumator.data.length).to.equal(0);
        });
    });
    describe('Testing add method', function () {
        it('with passed one item should add it to the collection', function () {
            sumator.add('Hello');
            expect(sumator.data[0]).to.equal('Hello');
        });
        it('should add items of any type', function () {
            sumator.add('Hello');
            sumator.add(4151);
            sumator.add({name: 'Valio', age: 23});
            expect(sumator.toString()).to.equal('Hello, 4151, [object Object]');
        });
    });
    describe('Testing sumNums method', function () {
        it('should return 0, if collection does not have any numbers', function () {
            sumator.add('Hello');
            sumator.add('23');
            expect(sumator.sumNums()).to.equal(0);
        });
        it('with numbers it the collection should return their sum', function () {
            sumator.add('hello');
            sumator.add(5);
            sumator.add('22');
            sumator.add(3);
            expect(sumator.sumNums()).to.equal(8);
        });
    });
    describe('Testing removeByFilter', function () {
       it('should filter the collection by a given function', function () {
           sumator.add('Hello');
           sumator.add(23);
           sumator.add(1);
           sumator.add('2333');
           sumator.removeByFilter(x=> x.length > 2);
           expect(sumator.toString()).to.equal('23, 1');
       });
    });
    describe('Testing toString method', function () {
       it('with empty collection should return "(empty)"', function () {
         expect(sumator.toString()).to.equal('(empty)')
       });
       it('with items in the collection should return the items on one line separete by ", "', function () {
           sumator.add('Hello');
           sumator.add(23);
           sumator.add(1);
           sumator.add('2333');
           expect(sumator.toString()).to.equal('Hello, 23, 1, 2333');
       })
    });
});