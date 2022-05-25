// const mixedArr =[false, null, '', 'stack', false, 1, 2, 3, 4, 5, 6, 7]

const arr = [1, false, NaN, 'str', true, 0];
arrLen = arr.length;
loopCount = 0
for (i = 0; i <= arrLen; i++) {
    for (j = i; j < arrLen; j++) {
        if (!arr[i] || typeof arr[i] != 'number') {

            arr[i] = arr[j + 1]
            arr[j + 1] = undefined
        }
    }
    if (arr[i] == undefined) loopCount++
}
// console.log('loop',loopCount);
arr.length -= loopCount
console.log(arr);






