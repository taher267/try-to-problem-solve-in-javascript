// const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4, 4];
// const duplicates = numbers.filter((v, i, a) => {
//     return a.indexOf(v) !== i
// });
// console.log(duplicates);
// function checkDuplecate(str) {
//     const newArr = [];
//     const dupArr = [];
//     for (const key of str) {
//         if (!newArr.includes(key)) {
//             newArr.push(key);
//         } else {
//             if (!dupArr.includes(key)) {
//                 dupArr.push(key)
//             }
//         }
//     }
//     return dupArr
// }

// console.log(checkDuplecate(numbers));
// const arr = [null, false, '', "test", 2, 3, 1, 4, 5, 6, 7];
// let count = 0
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length - 1; j++) {
//         if (!arr[j] || typeof arr[j] !== 'number') {
//             arr[j] = arr[(j + 1)]
//             arr[j + 1] = undefined
//         }

//     }
//     if (arr[i] === undefined) {
//         count++
//     }
// }
// arr.length -= count
// console.log(arr);

// const vowels = ['a', 'e', 'i', 'o', 'u']
// function countVowel(str) {
//     let count = 0
//     for (const vowel of str) {
//         if (vowels.includes(vowel.toLowerCase())) {
//             count++
//             console.log(vowel);
//         }
//     }
//     return count
// }
// console.log(countVowel("I Love Bangladesh"));

const arr = [false, null, '', 'stack', false, 1, 2, 3, 4, 5, 6, 7];

let count = 0;
let countI = 0;
let countJ = 0;
let countJIf = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (typeof arr[i] !== 'number') {
            // countJIf += 1;
            arr[i] = arr[j];
            arr[j] = undefined;
        }
    }
    if (arr[i] === undefined) count += 1;
}
arr.length -= count;
console.log(arr);

// console.log('loop I run ' + countI + ' times');
// console.log('loop J run ' + countJ + ' times');
// console.log('If condition in loop J run ' + countJIf + ' times');