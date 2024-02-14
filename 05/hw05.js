// Переишіть цей код використовуючи let const~
// Замість var
for (let i = 0; i < 5; i++) {
    console.log(i);
}

const message = 'test';
function example() {
    if (true) {
        const message = 'Hello, world!';
        console.log(message);
    }
    console.log(message); // Виведе 'Hello, world!'
}


// Використовуючи for in  виведіть значення з обєктку в console.log
const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};
for(let key in person){
    console.log(`key: ${key}, value ${person[key]}`)
}


// Використовуючи for of  та for in  виведіть занчення з обєктів які знаходяться в масиві
const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];
for(let student of students){
    for(let key in student){
        console.log(`key: ${key}, value ${student[key]}`)
    }
}

// mЗавдання на map
// Завдання 1: Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа.
const numberArr = [10,20,30];

let doubleValue = (a)=>a*2;
let squearArr = numberArr.map(doubleValue);
console.log(squearArr)

// Завдання 2: Напишіть функцію, яка приймає масив і функцію-перетворювач, і використовує map для створення нового масиву, в якому кожен елемент отримує  стрінг до значення 'new value'
// ???




// Напишіть функцію, яка використовує forEach для обчислення суми всіх елементів у масиві чисел. Масив наприклад const numberArr = [10,20,30]
// ???
