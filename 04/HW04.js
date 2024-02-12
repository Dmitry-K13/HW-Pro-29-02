//push 
// task 1
let newArr = [];

newArr.push(2);
newArr.push('hello');

console.log(newArr)

// task 2
function addElement(arr, element) {
    arr.push(element);
    console.log(adding);
}

let adding = [];

addElement(adding, 20);
addElement(adding, 'hi');

// pop
// task 1
let popArr = [1, 2, 3, 'hello'];

popArr.pop()

console.log(popArr)

// task 2
function delElement(arr) {
    arr.pop();
    console.log(del);
}

let del = [10, 20, 30, 40];

delElement(del);

// unshift
// task 1
let unshiftArr = [1, 2, 3];

unshiftArr.unshift('hello');

console.log(unshiftArr);

// task 2
function addFirstEl(arr, element) {
    arr.unshift(element);
    console.log(unshift)
}

let unshift = [1, 2, 3];

addFirstEl(unshift, 'aloha')

// shift
// task 1
let shiftArr = [1, 2, 3];

shiftArr.shift();

console.log(shiftArr)

// task 2
function delFirstEl(arr) {
    arr.shift();
    console.log(shift);
}

let shift = ['sun', 1, 2, 3];

delFirstEl(shift);

// -----

let existArr = ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"];
let changedArr = [];

for(let i=0; i<existArr.length; i++){
    if(existArr[i] !== "Remove"){
        changedArr.push(existArr[i])
    }
}

console.log(changedArr);





