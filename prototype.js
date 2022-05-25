

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype = {
//     method1() {
//         console.log("Method One");
//     },
//     method2() {
//         console.log("Method Two");
//     },
//     method3() {
//         console.log("Method Three");
//     },
// }
// // const test1 = new Person('New name', 52).method2();

// // console.dir(newPerson.method1());

// const Something = new Array()
// console.dir(Something.push(''));
// let sum = 0
// function doSum(a) {
//     return function (b) {
//         return a + b
//     }
// }
// let temp = doSum(2)(5)
// console.log(temp());
// sum = sum+temp(8)
// console.log(sum);
// console.log(temp(8));

function sum(n) {
    if (n === 0) {
        return 0;
    } else {
        return n+ sum(n - 1);
    }
}

console.log(sum(3));
