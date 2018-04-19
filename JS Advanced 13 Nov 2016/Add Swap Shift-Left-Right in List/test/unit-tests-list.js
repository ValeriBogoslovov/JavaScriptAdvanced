/**
 * Created by Valeri on 7/20/2017.
 */
let expect = require('chai').expect;
let createList = require('../list').createList;

describe('Unit Testing List', function () {
    let myList;

    beforeEach(function () {
        myList = createList();
    });

    describe('Testing functionality', function () {
        it('add exists', function () {
            expect(myList.hasOwnProperty('add')).to.be.true;
        });
        it('shiftLeft exists', function () {
            expect(myList.hasOwnProperty('shiftLeft')).to.be.true;
        });
        it('shiftRight exists', function () {
            expect(myList.hasOwnProperty('shiftRight')).to.be.true;
        });
        it('swap exists', function () {
            expect(myList.hasOwnProperty('swap')).to.be.true;
        });
        it('toString exists', function () {
            expect(myList.hasOwnProperty('toString')).to.be.true;
        });
        it('initial list, should be empty', function () {
           expect(myList.toString()).to.equal('');
        });
        it('with single add,should add element to the list', function () {
            myList.add('hello');
            expect(myList.toString()).to.equal('hello');
        });
        it('with multiple adds, should put the elements at the end of the list', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            expect(myList.toString()).to.equal('Yo, 23, 33');
        });
        it('with list length = 0, should do nothing', function () {
            myList.shiftLeft();
            expect(myList.toString()).to.equal('')
        });
        it('with elements in the list, should move all elements to the left', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            myList.shiftLeft();
            expect(myList.toString()).to.equal('23, 33, Yo');
        });
        it('with list length = 0, should do nothing', function () {
            myList.shiftRight();
            expect(myList.toString()).to.equal('')
        });
        it('with elements in the list, should move all elements to the right', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            myList.shiftRight();
            expect(myList.toString()).to.equal('33, Yo, 23');
        });
        it('with equal first and second indeces, should return false', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            expect(myList.swap(1, 1)).to.be.false;
        });
        it('with equal first and second indeces, should not change the list', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            myList.swap(1, 1);
            expect(myList.toString()).to.equal('Yo, 23, 33');
        });
        it('with second index bigger than list length, should return false', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            expect(myList.swap(0,4)).to.be.false;
        });
        it('with second index bigger than list length, should not change the list', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            myList.swap(1, 5);
            expect(myList.toString()).to.equal('Yo, 23, 33');
        });
        it('with second index equal to list length, should return false', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            expect(myList.swap(0,3)).to.be.false;
        });
        it('with second index equal to list length, should not change the list', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            myList.swap(1, 3);
            expect(myList.toString()).to.equal('Yo, 23, 33');
        });
        it('with first index bigger than list length, should return false', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            expect(myList.swap(4,1)).to.be.false;
        });
        it('with first index bigger than list length, should not change the list', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            myList.swap(5, 2);
            expect(myList.toString()).to.equal('Yo, 23, 33');
        });
        it('with first index equal to list length, should return false', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            expect(myList.swap(3,0)).to.be.false;
        });
        it('with first index equal to list length, should not change the list', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            myList.swap(3, 2);
            expect(myList.toString()).to.equal('Yo, 23, 33');
        });
        it('with first index smaller than 0, should return false', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            expect(myList.swap(-1,1)).to.be.false;
        });
        it('with first index smaller than 0, should not change the list', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            myList.swap(-1, 2);
            expect(myList.toString()).to.equal('Yo, 23, 33');
        });
        it('with second index smaller than 0, should return false', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            expect(myList.swap(0,-1)).to.be.false;
        });
        it('with second index smaller than 0, should not change the list', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            myList.swap(0, -2);
            expect(myList.toString()).to.equal('Yo, 23, 33');
        });
        it('with second index string, should return false', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            expect(myList.swap(0,'2')).to.be.false;
        });
        it('with second index string, should not change the list', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            myList.swap(0, 'hey');
            expect(myList.toString()).to.equal('Yo, 23, 33');
        });
        it('with first index string, should return false', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            expect(myList.swap('0',1)).to.be.false;
        });
        it('with first index string, should not change the list', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            myList.swap('wow', 1);
            expect(myList.toString()).to.equal('Yo, 23, 33');
        });
        it('with second index floating point number, should return false', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            expect(myList.swap(0,3.1)).to.be.false;
        });
        it('with second index floating point number, should not change the list', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            myList.swap(0, 1.3);
            expect(myList.toString()).to.equal('Yo, 23, 33');
        });
        it('with first index floating point number, should return false', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            expect(myList.swap(2.3,1)).to.be.false;
        });
        it('with first index floating point number, should not change the list', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            myList.swap(2.5, 1);
            expect(myList.toString()).to.equal('Yo, 23, 33');
        });

        it('with 0 first index, should swap their position', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            myList.swap(0, 1);
            expect(myList.toString()).to.equal('23, Yo, 33');
        });
        it('with valid indeces, should return true after the swap', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            expect(myList.swap(0, 1)).to.be.true;
        });
        it('with 0 second index, should swap their position', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            myList.swap(1, 0);
            expect(myList.toString()).to.equal('23, Yo, 33');
        });
        it('with 0 second index, should return true after the swap', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            expect(myList.swap(1, 0)).to.be.true;
        });
        it('should return the list on one line separeted by (", ")', function () {
            myList.add('Yo');
            myList.add(23);
            myList.add(33);
            myList.add('Hello');
            expect(myList.toString()).to.equal('Yo, 23, 33, Hello');
        });
    });
});