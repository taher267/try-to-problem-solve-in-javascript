// let quote = 'To be or not to be';
// // quote = quote.replaceAll('be','code');

// // console.log(quote);  // "To code or not to code"

// let newStr = '';
// const arr = quote.split('be')
// for (item in arr) {
//     newStr += arr[item].trim() + (arr[item].trim().length>0? " code " : "");
//     // console.log();
// }
// console.log(newStr);

// const str = "65265899898";
// const arr = str.split(/[+\-/*//]/)
// console.log(arr[arr.length-1].indexOf('.'));

// const cat = {
//     name : 'Bertie',
//     breed : 'Cymric',
//     color : 'white',
//     greeting: function() {
//       console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
//     }
//   }
  
//   const cat2 = {
//     name : 'Elfie',
//     breed : 'Aphrodite Giant',
//     color : 'ginger',
//     greeting: function() {
//       console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
//     }
//   }
  
//   cat.greeting();
//   cat2.greeting();
const myObject = {
    city: 'Madrid',
    greet() {
      console.log(`Greetings from ${this.city}`);
    }
  }
 
console.log(Object.getPrototypeOf(myObject));