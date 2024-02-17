// Переишіть цей код використовуючи let const~
// Замість var
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let message = 'test';
function example() {
    if (true) {
        let message = 'Hello, world!';
        console.log(message);
    }
    console.log(message); // Виведе 'Hello, world!'
}
example();

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
    console.log(students);
    for(let key in student){
        console.log(`value ${student[key]}`)
    }
}

// mЗавдання на map
// Завдання 1: Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа.
const numberArr = [10,20,30];

let squearArr = numberArr.map(number=>number*number);
console.log(squearArr)

// Завдання 2: Напишіть функцію, яка приймає масив і функцію-перетворювач, і використовує map для створення нового масиву, в якому кожен елемент отримує  стрінг до значення 'new value'
// ???
function mapWithTransform(array, callback){
    let newArr = array.map(item=>callback(item));
    return newArr;
}

let newValueArr = mapWithTransform(numberArr, item=>`new value: ${item}`);
console.log(newValueArr);

// Напишіть функцію, яка використовує forEach для обчислення суми всіх елементів у масиві чисел. Масив наприклад const numberArr = [10,20,30]
// ???
numbersArr = [1,20,30];
let summ = 0;
numbersArr.forEach(number=> summ=summ+number);
console.log(summ);
