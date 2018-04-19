/**
 * Created by Valeri on 7/4/2017.
 */
(function solution() {
    return {
        add: function (vec1, vec2) {
            let result = [];
            result.push(vec1[0] + vec2[0]);
            result.push(vec1[1] + vec2[1]);
            return result;
        },
        multiply: function (vec1, scalar) {
            let result = [];
            result.push(vec1[0] * scalar);
            result.push(vec1[1] * scalar);
            return result;
        },
        length: function (vec1) {
            let result = Math.sqrt((vec1[0] * vec1[0]) + (vec1[1] * vec1[1]));
            return result;
        },
        dot: function (vec1, vec2) {
            let result = (vec1[0] * vec2[0]) + (vec1[1] * vec2[1]);
            return result;
        },
        cross: function (vec1, vec2) {
            let result = (vec1[0] * vec2[1]) - (vec1[1] * vec2[0]);
            return result;
        }
    }
})();

