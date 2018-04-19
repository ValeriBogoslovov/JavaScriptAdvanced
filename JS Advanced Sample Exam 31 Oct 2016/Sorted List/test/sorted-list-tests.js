/**
 * Created by Valeri on 7/18/2017.
 */
let expect = require('chai').expect;
let SortedList = require('../sorted-list').SortedList;

describe('Unit testing class SortedList()', function () {
    let sortedList;
    beforeEach(function () {
        sortedList = new SortedList();
    });

    describe('Testing initial state', function () {
        it('add method should exist', function () {
            expect(SortedList.prototype.hasOwnProperty('add')).to.be.true;
        });
        it('remove method should exist', function () {
            expect(SortedList.prototype.hasOwnProperty('remove')).to.be.true;
        });
        it('get method should exist', function () {
            expect(SortedList.prototype.hasOwnProperty('get')).to.be.true;
        });
        it('vrfyRange method should exist', function () {
            expect(SortedList.prototype.hasOwnProperty('vrfyRange')).to.be.true;
        });
        it('sort method should exist', function () {
            expect(SortedList.prototype.hasOwnProperty('sort')).to.be.true;
        });
        it("should have size property getter", function() {
            expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true, "Property size was not found.");
            expect(typeof sortedList.size).to.not.equal('function', "Property size should not be a function.");
        });
    });
    describe('Testing add method', function () {
        it('add method should add element to the collection', function () {
            sortedList.add(13);
            expect(sortedList.list.join(' ')).to.equal('13');
        });
        it('add should add multiple elements to the collection', function () {
            sortedList.add(13);
            sortedList.add(14);
            sortedList.add(15);
            sortedList.add(16);
            sortedList.add(17);
            expect(sortedList.list.join(' ')).to.equal('13 14 15 16 17');
        });
        it('when adding new element always sort the collection', function () {
            sortedList.add(4);
            sortedList.add(3);
            sortedList.add(2);
            sortedList.add(1);
            expect(sortedList.list.join(' ')).to.equal('1 2 3 4');
        });
    });
    describe('Testing remove method', function () {
        it('remove method should remove element at given index', function () {
            sortedList.add(54);
            sortedList.add(66);
            sortedList.remove(0);
            expect(sortedList.list.join(' ')).to.equal('66');
        });
        it('remove should throw Error "Collection is empty.", if length of collection is 0', function () {
            expect(() => sortedList.remove()).throw(Error, "Collection is empty.");
        });
        it('remove should throw Error "Index was outside the bounds of the collection.", ' +
            'if index is < 0', function () {
            sortedList.add(1);
            sortedList.add(2);
            expect(() => sortedList.remove(-1)).throw(Error, "Index was outside the bounds of the collection.");
        });
        it('remove should throw Error "Index was outside the bounds of the collection.", ' +
            'if index is bigger than collection length', function () {
            sortedList.add(1);
            sortedList.add(2);
            expect(() => sortedList.remove(3)).throw(Error, "Index was outside the bounds of the collection.");
        });
        it('remove should throw Error "Index was outside the bounds of the collection.", ' +
            'if index is equal to collection length', function () {
            sortedList.add(1);
            sortedList.add(2);
            expect(() => sortedList.remove(2)).throw(Error, "Index was outside the bounds of the collection.");
        });
    });
    describe('Testing get method', function () {
        it('get method should return the element at given index', function () {
            sortedList.add(1);
            sortedList.add(2);
            sortedList.add(3);
            sortedList.add(4);
            expect(sortedList.get(2)).to.equal(3);
        });
        it('get should throw Error "Collection is empty.", if length of collection is 0', function () {
            expect(() => sortedList.get()).throw(Error, "Collection is empty.");
        });
        it('get should throw Error "Index was outside the bounds of the collection.", ' +
            'if index is equal to collection length', function () {
            sortedList.add(1);
            sortedList.add(2);
            expect(() => sortedList.get(2)).throw(Error, "Index was outside the bounds of the collection.");
        });
        it('get should throw Error "Index was outside the bounds of the collection.", ' +
            'if index is bigger than collection length', function () {
            sortedList.add(1);
            sortedList.add(2);
            expect(() => sortedList.get(3)).throw(Error, "Index was outside the bounds of the collection.");
        });
        it('get should throw Error "Index was outside the bounds of the collection.", ' +
            'if index is < 0', function () {
            sortedList.add(1);
            sortedList.add(2);
            expect(() => sortedList.get(-1)).throw(Error, "Index was outside the bounds of the collection.");
        });
    });

    describe('Testing size method', function () {
        it('size with non empty collection should return collection length', function () {
            sortedList.add(1);
            sortedList.add(2);
            expect(sortedList.size).to.equal(2);
        });
        it('size with empty collection should return length 0', function () {
            expect(sortedList.size).to.equal(0);
        });
    });
});