// 1)пройдіть по масиву і зробіть заповнення таблиці даними з масива
window.onload = function () {
    const booksArray = [
        {
            title: 'Пригоди Аліси в Країні Див',
            year: 1865,
            rating: 4.5
        },
        {
            title: '1984',
            year: 1949,
            rating: 4.8
        },
        {
            title: 'Гаррі Поттер і філософський камінь',
            year: 1997,
            rating: 4.7
        }
    ]

    const table = document.querySelector('table');
    table.style.marginBottom = '30px';

    let thead = document.querySelector('thead');
    thead.style.backgroundColor = 'blue';
    thead.style.color = 'white';


    booksArray.forEach(book => {
        const row = document.createElement('tr');
        row.style.textAlign = 'center';
        row.style.backgroundColor = 'aqua';
        
        const titleBook = document.createElement('td');
        titleBook.textContent = book.title;
        row.appendChild(titleBook);
    
        const yearBook = document.createElement('td');
        yearBook.textContent = book.year;
        row.appendChild(yearBook);
    
        const ratingBook = document.createElement('td');
        ratingBook.textContent = book.rating;
        row.appendChild(ratingBook);
    
        table.appendChild(row);
    });


    // 2)За допомогою js  створіть на сторінці елемент header  та задайте padding 50px та background-color жовтого кольору і властивість text-align center

    let header = document.createElement('header');
    header.style.padding = '50px';
    header.style.backgroundColor = 'yellow';
    header.style.textAlign = 'center';
    document.body.before(header);

    // 3)Створіть в хедері з попереднього завдання А теги з значенням з обєкта name  встановленим значенням в href з url.

    const menuData = [
        { name: 'Головна', url: '/' },
        { name: 'Про нас', url: '/about' },
        { name: 'Послуги', url: '/services' },
        { name: 'Shop', url: '/shop' },
        // Додайте ще пункти меню за потреби
    ];

    menuData.forEach(item => {
        let menuItem = document.createElement('a');
        menuItem.innerText = item.name;
        menuItem.href = item.url;
        header.appendChild(menuItem);
        menuItem.style.marginRight = '50px';
    })

    // 4)Створіть блок за допомогою js задайте блоку стиль display flex та в середині цього блоку створіть 50 div блоків з правилом border-radius, width 50px height 50px та background-color

    let divContainer = document.createElement('div');
    divContainer.className = 'container';
    divContainer.style.display = 'flex';
    document.body.appendChild(divContainer);

    for(let i = 1; i<50; i++){
        let newDiv = document.createElement('div');
        newDiv.style.borderRadius = '10px';
        newDiv.style.height = '50px';
        newDiv.style.width = '50px';
        newDiv.style.backgroundColor = 'green';

        divContainer.appendChild(newDiv);
    }

}





