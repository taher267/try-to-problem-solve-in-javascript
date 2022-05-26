
var array = [1];
// var other = concat(array, 2, [3], [[4]]);
// other = [array, 2, [3], [[4, 6]]]

function _concat() {
    // other = Array.from(arguments);
    // other = [...arguments];
    makeArr = [];
    for (const iter in arguments) {
        makeArr[iter] = arguments[iter]
    }
    newArr = [];
    for (i = 0; i < makeArr.length; i++) {
        if (typeof makeArr[i] == 'object') newArr[i] = makeArr[i][0]
        else newArr[i] = makeArr[i]
    }
    return newArr
}
console.log(_concat(array, 2, [3], [[4]]));

