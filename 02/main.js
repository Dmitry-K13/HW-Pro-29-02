// Задание 1
let firstValue = Number(prompt('Первое число'));
let secondValue = Number(prompt('Второе число'));

if(firstValue>secondValue){
    console.log('Первое число больше чем второе');
}
else if(firstValue<secondValue){
    console.log('Второе число больше чем первое');
}
else{
    console.log('Числа равны')
}

// Задание 2
let value = Number(prompt('Введите число'));

if(value % 2 == 0){
    console.log('Число четное')
}
else{
    console.log('Число нечетное')
}

// Задание 3
let userAge = Number(prompt('Сколько вам лет?'));

let currentYear = 2024;
let birthYear = `Вы родились в: ${currentYear - userAge}`;
console.log(birthYear);

// Задание 4
let myNumber = Number(prompt('Введите число'));

let currentNumber = 10;
if(myNumber > currentNumber){
    console.log('Слишком большое.')
}
else if(value < currentNumber){
    console.log('Слишком маленькое.')
}
else{
    console.log('Congratulations, you win!')
}

// // Задание 5
let grade = Number(prompt('Оцените от 1 до 10'));

if(grade > 0){
    if(grade == 10 || grade == 9 || grade == 8){
        console.log('Отлично')
    }
    else if(grade == 7 || grade == 6 || grade == 5){
        console.log('Хорошо')
    }
    else if(grade == 4 || grade == 3){
        console.log('Удовлетворительно')
    }
    else if(grade < 3){
        console.log('Неудовлетворительно')
    }
    else{
        console.log('Некоректный ввод')
    }
}

// // Задание 6
let my_number = Number(prompt('Введите число'));

if(my_number>= 1 && my_number<= 100){
    console.log('Число находится в диапазоне')
}
else{
    console.log('Число не входит в диапазон')
}

// Задание 7
let score = Number(prompt('Введите количество баллов'));

let result = (score > 50 ? 'Прошел' : 'Не прошел');
console.log(result);


let temperature = Number(prompt('Введите количество баллов'));

let tempResult = (temperature > 25 ? 'Жарко' : 'Холодно');
console.log(tempResult);


// Доп. Задание
let country = prompt('Укажите страну');
let age = Number(prompt('Укажите возраст'));

if(country == 'Украина' && age >= 18){
    console.log('Поздравляем, вы имеете право голосовать')
}
else if(country == 'Украина' && age < 18){
    console.log('Вы слишком молоды для голосования')
}



