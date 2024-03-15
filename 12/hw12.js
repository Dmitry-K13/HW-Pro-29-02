window.onload = function () {
    // Форма з вибором улюбленого кольору:
    // Створіть форму з декількома радіокнопками, кожна з яких представляє різний колір (наприклад, червоний, зелений, синій).
    // Використовуйте подію onchange для кожної радіокнопки, щоб змінювати колір фону сторінки відповідно до вибору користувача.

    let bgColor = document.querySelector('body');
    let [...allRadio] = document.querySelectorAll('input[type="radio"]');

    for (let radio of allRadio) {
        radio.addEventListener('change', function () {
            if (radio.checked) {
                bgColor.style.backgroundColor = radio.value;
            }
        })
    }

    // Форма для вибору хобі з чекбоксами:
    // Створіть чекбокси для різних хобі (наприклад, читання, спорт, музика).
    // Встановіть обробник події onchange для кожного чекбоксу, щоб відображати список вибраних хобі у текстовому елементі під формою.

    let selList = document.querySelector('.selectedHobby');
    let [...hobbyEls] = document.querySelectorAll('input[name="hobbyEl"');

    for (let hobbyEl of hobbyEls) {
        hobbyEl.addEventListener('change', function () {
            if (hobbyEl.checked) {
                let idInfo = hobbyEl.id;
                let listItem = document.createElement('li');
                listItem.innerText = idInfo;
                selList.appendChild(listItem);
            }
            else {
                let lItems = selList.querySelectorAll('li');
                lItems.forEach(item => {
                    if (item.textContent === hobbyEl.id) {
                        selList.removeChild(item);
                    }
                });
            }
        })
    }

    // Форма з вибором країни із випадаючого списку:
    // Створіть випадаючий список з назвами країн.
    // Використовуйте подію onchange для випадаючого списку, щоб виводити інформацію про вибрану країну, таку як столиця або населення, в іншому елементі на сторінці.

    let countries = ['UK', 'Italy', 'Spain'];

    let countryInfo = [
        { name: 'UK', capital: 'London', },
        { name: 'Italy', capital: 'Rome', },
        { name: 'Spain', capital: 'Madrid', },
    ];

    let selectEl = document.querySelector('#country');
    countries.forEach(country => {
        let option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        selectEl.appendChild(option);
    })

    selectEl.addEventListener('change', function(){
        let selectValue = this.value;
        let info = countryInfo.find(country=>country.name===selectValue);
        let containerEl = document.querySelector('.container');
        containerEl.innerHTML = `Capital ${info.capital}`
    })
}
