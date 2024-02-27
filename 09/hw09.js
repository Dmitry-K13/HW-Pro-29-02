window.onload = function(){
    // Домашня робота:
    // 1. onclick
    // Задача: Створіть кнопку та елемент Р з текстом,при кліку на кнопку текст змінює колір. Можете використати функцію яка генерує різний колір

    function randomColor(){
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        return `rgb(${r}, ${g}, ${b})`
    }
    
    let randomBtn = document.querySelector('.random');
    randomBtn.style.marginBottom = '50px';
    let text = document.querySelector('p');
    text.style.fontSize = '40px';
    randomBtn.addEventListener('click',function(){
        text.style.color = randomColor();

    })

    // 2. ondblclick
    // Задача: Створіть елемент, який при подвійному кліку збільшує свій розмір в 2 рази ( змінюємо width i height).
    // ondblclick

        let task2 = document.querySelector('.task2');
        let baseHeight = 100;
        let baseWidth = 100;
        task2.style.marginBottom = '50px';
        
        task2.ondblclick = function(){
        baseHeight*=2;
        baseWidth*=2;
        this.style.height = `${baseHeight}px`;
        this.style.width = `${baseWidth}px`;
    }


    // 3. addEventListener і removeEventListener

    // Створити кнопку і текстовий елемент в якому розмість лічільник: 0,при кліку на кнопку в текстовому значенні повино збільшуватись значення на 1. Коли значення лічильника перевищує 10, кнопка перестає реагувати на кліки.

    let counterBtn = document.querySelector('.press');
    let count = 0;
    let pEl = document.querySelector('.number');
    function clicker() {
        if(count<10){
            count+=1;
            pEl.innerHTML = `Number of clicks: ${count}`;
        }
        // else{
        //     counterBtn.removeEventListener('click', clicker );
        // }
    }
    counterBtn.addEventListener('click', clicker);

    // НЕ МОГУ ПОНЯТЬ КАК ИСПОЛЬЗОВАТЬ removeEventListener.


    // 4. Створіть веб-сторінку з кнопкою та 10 елементами (наприклад, div). Підключіть обробник події onclick до кожного елементу. Коли користувач натисне на елемент,цей елемент має бути видалений зі сторінки

    for(let i = 0; i<10; i++){
        divEl = document.createElement('div');
        divEl.innerText = i+1;
        divEl.onclick= function(){
            divEl.remove();
    
        }
        document.body.appendChild(divEl);
    }
}
// НЕ РАБОТАЕТ.УДАЛЯЕТСЯ ТОЛЬКО ПОСЛЕДНИЙ ДИВ. ПОДСКАЖИТЕ КАК РЕШИТЬ ПРАВИЛЬНО.