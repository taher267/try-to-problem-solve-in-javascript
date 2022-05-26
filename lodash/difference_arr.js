// const { difference } = require('lodash');

const arr3 = [11, 1, 5, 56]//0
const arr1 = [2, 1, 58]//1
const arr2 = [7, 8, 11]//1
const arr6 = [99, 44, 56]//1

// console.log(difference(arr1, arr3,arr2));

function _difference() {
  let arr2nd = [];
  const argsLen = arguments.length
  for (let i = 1; i < argsLen; i++) {
    arr2nd = arr2nd.concat(arguments[i])
  }

  const newArr = [];
  let key = 0;
  for (let j = 0; j < arguments[0].length; j++) {
    if (!arr2nd.includes(arguments[0][j])) {
      newArr[key++] = arguments[0][j]
    }
  }
  return newArr
}

console.log(_difference(arr3, arr1, arr2, arr6));