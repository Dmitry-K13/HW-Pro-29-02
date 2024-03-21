window.onload = function(){
    // Знайдіть всі великі літери в тексті і збереження їх в масив

    let textStr = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";

    let searchRegExp = /[A-Z]/g;
    let upperCaseFromText = textStr.match(searchRegExp);

    console.log(upperCaseFromText)



    // Знаходження слів із певною кількістю символів:
    // Напишіть регулярний вираз для знаходження слів у тексті, що складаються рівно з 5 букв, можна взяти текст з textStr з першого завдання

    let regEx = /\b\w{5}\b/g;
    let fiveLet = textStr.match(regEx);
    console.log(fiveLet);

    // Створити регулярний вираз, який видаляє всі HTML теги з рядка. Наприклад, після обробки рядка <p>Це - простий <b>текст</b>.</p> має залишитися Це - простий текст.

    let text = '<p>Це - простий <b>текст</b>.</p>';
    let regExp = /<[a-z/]*>/g;
    let newText = text.replace(regExp, '');
    console.log(newText);


    // Розробити регулярний вираз для перевірки сили пароля. Пароль повинен містити принаймні одну велику літеру, одну маленьку літеру, одну цифру, один спеціальний символ (!@#$%^&*) і мати довжину від 4 до 8 символів.

    let btnEl = document.querySelector('.enter');

    function check(value){
        let testPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{4,8}$/;
        return testPassword.test(value);
    }
    btnEl.onclick = function(){
        let inputValue = document.querySelector('.enter').value;
        if(check(inputValue)){
            alert('Password valid')
        }
        else{
            alert('Password invalid')
        }
    }


    // Створіть групу радіокнопок для оцінки від 1 до 5.
    // Додайте обробник події onchange для виявлення вибору користувача, а потім виведіть відповідне повідомлення (наприклад, "Дякуємо за вашу оцінку!").

    let [...rating] = document.querySelector('.rating');
    for(let btn of rating){
        btn.addEventListener('change', function(){
            if(btn.checked){
                alert(`Thank you for: ${btn.value}!`)
            }
        })
    }
}
