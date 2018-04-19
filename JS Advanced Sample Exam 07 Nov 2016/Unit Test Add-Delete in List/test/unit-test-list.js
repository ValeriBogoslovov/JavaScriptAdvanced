/**
 * Created by Valeri on 7/19/2017.
 */
let expect = require('chai').expect;
let list = require('../add-delete-in-list').list;


describe('Unit test list', function () {
    let myList
    beforeEach(function () {
        myList = list;
        myList.delete(0);
        myList.delete(0);
        myList.delete(0);
    });

    describe('Test if properties exist', function () {
        it('add should exists', function () {
            expect(myList.hasOwnProperty('add')).to.equal(true);
        });
        it('delete should exists', function () {
            expect(myList.hasOwnProperty('delete')).to.equal(true);
        });
        it('toString should exists', function () {
            expect(myList.hasOwnProperty('toString')).to.equal(true);
        });
    });

    describe('Testing properties functions',function () {
       it('intial list should be empty', function () {
          expect(`[${list}]`).to.equal('[]')
       });
       it('add function should add item to the end of the list', function () {
          myList.add('2');
          myList.add(23);
          myList.add('Hello');
          expect(myList.toString().split(', ')[2]).to.equal('Hello');
       });
        it('delete function with invalid index should return undefined', function () {
            myList.add('2');
            myList.add(23);
            myList.add('Hello');
            expect(myList.delete("this")).to.be.undefined;
        });
        it('delete with index < 0 should return undefined', function () {
            myList.add('2');
            myList.add(23);
            myList.add('Hello');
            expect(myList.delete(-1)).to.be.undefined;
        });
        it('delete with index >= list length should return undefined', function () {
            myList.add('2');
            myList.add(23);
            myList.add('Hello');
            expect(myList.delete(3)).to.be.undefined;
            expect(myList.delete(4)).to.be.undefined;
        });
        it('delete with valid index should remove the item', function () {
            myList.add('2');
            myList.add(23);
            myList.add('Hello');
            myList.delete(0);
            expect(myList.toString()).to.equal('23, Hello');
        });
        it('delete with valid index should return the deleted item', function () {
            myList.add('2');
            myList.add(23);
            myList.add('Hello');
            expect(myList.delete(0)).to.equal('2');
        });
        it('toString should return the list items separated by ", "', function () {
            myList.add('2');
            myList.add(23);
            myList.add('Hello');
            expect(myList.toString()).to.equal('2, 23, Hello');
        })
    });
});