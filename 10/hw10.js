window.onload = function () {
    // Домашня робота:
    // Завдання 'onContextMenu': 
    // Створіть елемент текстовий блок, на який при правому кліку миші замість звичайного контекстного меню браузера з'являється власне створене контекстне меню. Це меню може містити опції, як-от "вирівняти по центру", "вирівняти по правому центру", "вирівняти по лівому краю", "Приховати елемент".

    let textEl = document.querySelector('p');
    let contextMenu = document.querySelector('.contextMenu');

    textEl.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        contextMenu.style.display = 'block';
        contextMenu.style.left = e.pageX + 'px';
        contextMenu.style.top = e.pageY + 'px';
        contextMenu.addEventListener('click', function () {
            contextMenu.style.display = 'none';
        })
    })

    document.querySelector('.positionRight').addEventListener('click', function () {
        textEl.style.marginRight = 0;
    });
    document.querySelector('.positionLeft').addEventListener('click', function () {
        textEl.style.marginLeft = 0;
    });
    document.querySelector('.positionHide').addEventListener('click', function () {
        textEl.style.display = 'none';
    });

    // Завдання 'onMouseOver' і 'onMouseOut': 
    // Розмістіть зображення на сторінці,та додайте події де при наведенні курсору на зображення воно збільшується або підсвічується. Коли курсор миші покидає зображення, воно повертається до свого початкового розміру або стилю.

    let imgTask2 = document.querySelector('img');
    imgTask2.addEventListener('mouseover', function () {
        this.style.transform = 'scale(2)';
    })
    imgTask2.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
    })
    // Завдання 'keyup': Створіть ігрове поле, де користувач може переміщати об'єкт (наприклад, квадрат або коло) за допомогою клавіш стрілок. Рух об'єкта повинен зупинятися, коли клавіша відпущена

    let posY = 0;
    let posX = 0;
    let moveStep = 10;

    function moveEl(el) {
        el.style.top = `${posY}px`;
        el.style.left = `${posX}px`;
    }

    let objectEl = document.querySelector('.object');

    document.addEventListener('keydown', function (event) {
        event.preventDefault();
        switch (event.key) {
            case 'ArrowUp':
                if (posY - moveStep >= 0){
                    posY -= moveStep;
                }
                break;
            case 'ArrowDown':
                if (posY + moveStep <= 150){
                    posY += moveStep;
                }
                break;
            case 'ArrowLeft':
                if (posX - moveStep >= 0){
                    posX -= moveStep;
                }
                break;
            case 'ArrowRight':
                if (posX + moveStep <= 150){
                    posX += moveStep;
                }
                break;

        }
        moveEl(objectEl);
    })


    // v1
    // Комбіноване завдання 'keydown' і 'keyup' для створення інтерактивного меню: Коли користувач натискає певну клавішу М and ctrl, з'являється  меню ul елемент в якому 3 li, При натиску клавіші ctrl K меню зникає.
    let task3 = document.querySelector('.task3');
    document.addEventListener('keydown', function(event){
        if (event.key == 'm' && event.ctrlKey){
            task3.style.display = 'block';
        }
        if(event.key == 'k' && event.ctrlKey){
            task3.style.display ='none';
        }
    })

    // v2
    // Комбіноване завдання 'keydown' і 'keyup' для створення інтерактивного меню: Коли користувач натискає певну клавішу М, з'являється  меню ul елемент в якому 3 li, і зробити можливість  переміщатися по пунктах меню, використовуючи клавіші вгору/вниз змінюючи бекграунд. При натиску клавіші С меню зникає.

    // Додаткова робота:
    // event.target   
    // Створіть блок з классом blockContainer з 3 кнопками,  в кожної з яких унікальний клас button.first, button.second, button.third.
    // Додайте обробник кліка на blockContainer і при кліку на кнопку виводьте alert в якому повідомляйте яка кнопка отримала клік

    // 'onMouseDown' і 'onMouseUp': Реалізуйте просту гру "Перетягування": створіть об'єкт, який можна перетягувати в межах певної області, використовуючи події натискання та відпускання кнопки миші.


}
