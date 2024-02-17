// 1 Створення класу та об'єкта:
// Створіть клас Person з властивостями name та age.
// Створіть об'єкт з цього класу з ім'ям "John" та віком 30.

// 2 Методи класу:
// Розширте клас Person, додайте метод sayHello, який виводить повідомлення з привітанням та ім'ям особи в console.log

class Person{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
    sayHello(){
        console.log(`Hello, my name is ${this._name}`);
    }
}

let obj = new Person('John', 30);
console.log(obj);
obj.sayHello();

// 3 Наслідування:
// Створіть клас Student, який наслідує від класу Person.
// Додайте властивість studentId до класу Student.
// Додайте метод study, який виводить повідомлення про студента

class Student extends Person{
    constructor(name, age, studentId){
        super(name, age)
        this._studentId = studentId;
    }
    study(){
        console.log(`Name: ${this._name}, Age: ${this._age}, StudentID: ${this._studentId}`)
    }
}

let newStudent = new Student('Ben', 30, 'a123');
newStudent.study();

// 4 Задачі для практики forEach, reverse  Виведіть значення з масиву в зворотньому порядку
// const numbers = [1, 2, 3, 4, 5];

const numbers = [1, 2, 3, 4, 5, 6];
for(let i = numbers.length; i>=0; i--){
    console.log(numbers[i]);
}



numbers.reverse().forEach(number => {
  console.log(number);
});

// 5  Задачі для практики map та Math.round
//  Маєте масив чисел з плаваючою комою. Використовуйте map разом з Math.round, щоб створити новий масив, в якому кожне число буде округлене до найближчого цілого.

const numbers2 = [1.2, 2.4, 3.5];
let newNumbers2 = numbers2.map(number=>Math.round(number));
console.log(newNumbers2)





