/**
 * Created by Valeri on 7/3/2017.
 */
function sortArray(numbersArray, sortMethod) {
    let ascendingOrder = function (a,b) {
        return a - b;
    };

    let descendingOrder = function (a,b) {
        return b - a;
    };

    let sortingStrategies = {
        'asc': ascendingOrder,
        'desc': descendingOrder
    };

    return numbersArray.sort(sortingStrategies[sortMethod]);

}
sortArray([14, 7, 17, 6, 8], 'desc');