/**
 * Created by Valeri on 7/10/2017.
 */
function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

console.log(lookupChar("sasho", 3.5));
module.exports = {lookupChar};