window.onload = function(){
    // Додаткова робота 
    // Створіть функцію, яка приймає об'єкт і створює новий елемент з використанням document.createElement, встановлює текст елемента та повертає його в контейнер.
    // Пройдіть циклом по масив і для кожного обєкту застосуйте створену функцію


    //  Створіть HTML-сторінку з контейнером, в який будуть додаватися елементи за допомогою JavaScript елемент створюємо по значенню ключа tag .
    const elementsArray = [
        { tag: 'p', text: 'Елемент 1' },
        { tag: 'div', text: 'Елемент 2' },
        { tag: 'span', text: 'Елемент 3' }
    ];

    let newElement = document.getElementById('container');
    newElement.style.backgroundColor = 'red';
    newElement.style.padding = '50px';

    elementsArray.forEach(element=>{
        let item = document.createElement(element.tag);
        item.textContent = element.text;
        newElement.appendChild(item);
    })

    newElement.appendChild(item);

    // let newElement2 = document.getElementsByTagName('p');
    // newElement2.style.backgroundColor = 'blue';

    // вопрос, как 'р' задать стиль?


}

// Створіть блок контейнер в html та перебераючи масив за допомогою js створіть елемент Р в залежності від usePrepend розмість його перед контейнером або за контейнером 
// const elementsArray = [
//     { text: 'Елемент 1', usePrepend: true },
//     { text: 'Елемент 2', usePrepend: false },
//     { text: 'Елемент 3', usePrepend: true }
// ]

// спробуйте зробити  завдання 4 так щоб в кожного div елемента був унікальний бекграунд