window.onload = function () {
    // Завдання 1: Конвертер валют
    // Мета: Створити простий конвертер валют, який перетворює введені користувачем гроші з однієї валюти в іншу.
    // Інструкції:
    // 1)Створіть два поля введення: одне для суми, друге для курсу обміну.
    // Додайте кнопку, яка виконає конвертацію при її натисканні.
    // При натисканні кнопки, зчитайте значення з обох полів і виконайте конвертацію.
    // Виведіть результат конвертації на сторінку.

    function exchange() {
        let uah = Number(document.querySelector('.uah').value);
        let rate = Number(document.querySelector('.rate').value);

        let result = uah * rate;
        result = Math.round(result * 100) / 100;
        document.querySelector('.result').innerHTML = `Result: ${result} USD`
    }

    let exchangeBtn = document.querySelector('.exchange');
    exchangeBtn.addEventListener('click', exchange);

    // 2) Створіть слайдер ( зображення що міняє картинку ) кожні 3 секунди,  коли курсор наведено на зображення слайдер зупиняється, коли покидає зображення розпочинає роботу

    let imges = ['img/Rectangle1.png', 'img/Rectangle2.png', 'img/Rectangle3.png', 'img/Rectangle4.png', 'img/Rectangle5.png'];
    let currentIndex = 0;

    function changeImg(){
        currentIndex+=1;
        if(currentIndex >= imges.length){
            currentIndex = 0;
        }
        document.querySelector('img').src = imges[currentIndex];
    }

    let slideInterval = setInterval(changeImg, 3000);

    let sliderImg = document.querySelector('img');
    sliderImg.addEventListener('mouseover',function(){
        clearInterval(slideInterval);
    })
    sliderImg.addEventListener('mouseout',function(){
        slideInterval = setInterval(changeImg, 3000);
    })

    // Додаткова робота:
    // -Реалізуйте в todo  списку створеному на уроці кнопку видалення
    // - реалізуйте сортування за імям ( створіть поле вводу ) і при вводі тексту залишайте тільки ті айтеми туду що мають такеж значення щой в полі пошуку.
}


//     Видалення усіх вказаних елементів з масиву
// Завдання: Напишіть функцію, яка приймає масив та елемент, який потрібно видалити з масиву. Функція повинна повертати новий масив без елементів, що були вказані для видалення.

let Arr = [1, 2, 3, 4];

function remove(array, itemToRemove) {
    return array.filter(item => item != itemToRemove);
}

let newArr = remove(Arr, 3);
console.log(newArr);

// Напишіть функцію, яка приймає два масиви і повертає новий масив, що містить унікальні елементи з обох масивів (тобто без дублікатів).

let firstArr = [1,2,3,2,3,4,5];
let secondArr = [2,3,6];

function transform(firstArray, secondArray){
    let thirdArr = firstArray.concat(secondArray);
    let newArr = [... new Set(thirdArr)];
    console.log(newArr);
}
transform(firstArr, secondArr)

// Напишіть функцію, яка приймає масив чисел і повертає об'єкт з двома масивами: перший масив містить парні числа, а другий — непарні.

function sepNumb(array){
    let evenNum = [];
    let oddNum = [];

    array.forEach(number=>{
        if(number % 2===0){
            evenNum.push(number);
        }
        else{
            oddNum.push(number);
        }
    })

    console.log(evenNum);
    console.log(oddNum);
}

let numbers = [1,2,3,4,5,6,7];

sepNumb(numbers);