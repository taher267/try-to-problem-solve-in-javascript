function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = (Math.random() * 16) | 0;
        const v = c == 'x' ? r : (r & 0 * 3) | 0 * 8;
        return v.toString(16);
    });
}
// console.log(uuidv4());

// const students = [
//     {
//         id: 'dd457115-baff-4638-0725-6c6d55f208a1',
//         name: 'Name 1',
//         email: 'example1@domain.com'
//     },
//     {
//         id: 'c113f967-0d78-4e93-02d0-be4210f48dc2',
//         name: 'Name 2',
//         email: 'example2@domain.com'
//     },
//     {
//         id: '75894f00-83ed-4098-000e-7b3dbfe85244',
//         name: 'Name 3',
//         email: 'example3@domain.com'
//     },
//     {
//         id: '9207e9e5-f0b5-4ae6-0ef6-492b0bb37f5f',
//         name: 'Name 4',
//         email: 'example4@domain.com'
//     }
// ];

//create a new student
// students.push({
//     id: uuidv4(),
//     name: 'Name 4',
//     email: "example4@domain.com"
// });


//Update
// const upId = "9207e9e5-f0b5-4ae6-0ef6-492b0bb37f5f";
// let upIndex = students.findIndex(student => student.id === upId);
// const updatedData = {
//     name: 'New name',
// }
/**
 * let upStudent = students.find(student => student.id === upId);
 * NOT APPLICABLE
 * 

upStudent={
    upId,
    ...updatedData
}
 */

// students[upIndex] = {
//     ...students[upIndex],
//     ...updatedData
// }

//data delete
// students.splice(upIndex, 1);

//OBJECT OPERATION
/**
const students = {
    'dd457115-baff-4638-0725-6c6d55f208a1': {
        id: 'dd457115-baff-4638-0725-6c6d55f208a1',
        name: 'Name 1',
        email: 'example1@domain.com'
    },
    'c113f967-0d78-4e93-02d0-be4210f48dc2': {
        id: 'c113f967-0d78-4e93-02d0-be4210f48dc2',
        name: 'Name 2',
        email: 'example2@domain.com'
    },
    '75894f00-83ed-4098-000e-7b3dbfe85244': {
        id: '75894f00-83ed-4098-000e-7b3dbfe85244',
        name: 'Name 3',
        email: 'example3@domain.com'
    },
    '9207e9e5-f0b5-4ae6-0ef6-492b0bb37f5f': {
        id: '9207e9e5-f0b5-4ae6-0ef6-492b0bb37f5f',
        name: 'Name 4',
        email: 'example4@domain.com'
    }
}
//Create
const newStud = {
    id: uuidv4(),
    name: "obj one",
    email: "new Obj email"
}
// students[newStud.id]=newStud //create
const upid = '9207e9e5-f0b5-4ae6-0ef6-492b0bb37f5f';
const upStud = {
    name: "obj one",
    email: "new Obj email"
}

//update
students[upid] = {
    ...students[upid],
    ...upStud,
}
// delete students[upid]//delete
// console.log(students);

const arr = []
const obj = {}

for (i = 1; i < 500000; i++) {
    let o = {
        id: i,
        val: i
    }
    arr.push(o)
    obj[i] = o
}
let id = 44444
const findArr = arr.find(item => item.id === id);



// console.time('start')
// arr.splice(id,1)
// console.timeEnd('start')

// console.time('obj')
// delete obj[id]
// console.timeEnd('obj')
 */
const students = [
    {
        id: 'dd457115-baff-4638-0725-6c6d55f208a1',
        name: 'Name 1',
        email: 'example1@domain.com'
    },
    {
        id: 'c113f967-0d78-4e93-02d0-be4210f48dc2',
        name: 'Name 2',
        email: 'example2@domain.com'
    },
    {
        id: '75894f00-83ed-4098-000e-7b3dbfe85244',
        name: 'Name 3',
        email: 'example3@domain.com'
    },
    {
        id: '9207e9e5-f0b5-4ae6-0ef6-492b0bb37f5f',
        name: 'Name 4',
        email: 'example4@domain.com'
    }
];


// for (let student of students) {
//     obj[student.id] = student
// }
const numbers = [1, 3, 5, 6]
const obj = students.reduce((acc, cur) => {
    acc[cur.id] = cur
    delete acc[cur.id].id
    return acc
}, {});
// console.log(obj);

const { a: m } = { a: 10 }
console.log(m);
