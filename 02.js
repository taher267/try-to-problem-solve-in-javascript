const _ = require('lodash');


const obj1 = { 'a': 1, 'n': 99 }
const obj2 = { 'a': 3, 'b': 2 }
const test = _.defaults(obj1, obj2);//{ a: 1, b: 2 }
function margeObj(pm1, pm2) {
    // const newPm1 = Object.keys(pm1);

    Object.keys(pm1).forEach(val => {
        if (pm2[val]) {
            pm2[val] = pm1[val]
        } else {
            pm2[val] = pm1[val]
        }
    });
    // const newObj = {};
    // const sorted = pm2.sort()
    console.log(pm2);
}
// margeObj(obj1, obj2);
// console.log(test);

const str = 'bacd';
console.log(str[0] < str[1]);