// // -1. Створити довільний елемент с id = text. використовуючи JavaScript,
// //   -зробіть так, щоб при кліку на кнопку зникав елемент с id="text".
console.log('1. - Створити довільний елемент с id = text. використовуючи JavaScript, ');
console.log(' зробіть так, щоб при кліку на кнопку зникав елемент с id="text".');
document.write('Завдання №1');
document.write('<br>');

const p1Text = document.createElement('p');
p1Text.setAttribute('id', 'text');
p1Text.innerText = 'Створення тега <p> з id=text ';
document.body.appendChild(p1Text);
const text = document.getElementById('text');

const button = document.createElement('button');
button.setAttribute('id', 'butClear');
button.innerText = 'Clear text';
document.body.appendChild(button);

button.onclick = () => {
    text.style.display = 'none';
    // button.hidden = true;
};
console.log(p1Text);
console.log(button);
document.write('<br>');
document.write('<br>');
console.log('');
// //
// 2.  - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
console.log('2. - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.');
document.write('Завдання №2');
document.write('<br>');
document.write('<br>');

const button2 = document.createElement('button');
button2.innerText = 'Click to Hide button';
document.body.appendChild(button2);
button2.onclick = () => {
    // button2.style.display='none';
    button2.hidden = true;
}
console.log(button2);

console.log('');

document.write('<br>');
document.write('<br>');
//
// 3 - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//    При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
console.log('3. - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.');
console.log('  При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача');
console.log('');
document.write('Завдання №3');
document.write('<br>');
document.write('<br>');

const input = document.createElement('input');
input.setAttribute('type', 'number');
input.setAttribute('id', 'inputAge');
input.setAttribute('placeholder', 'Введіть вік');
console.log(input);
document.body.appendChild(input);

const butInput = document.createElement('button');
butInput.setAttribute('id', 'Ok_Age');
console.log(butInput);
butInput.innerText = 'Ok';
document.body.appendChild(butInput);
console.log('');
const inputAge = document.getElementById('inputAge');
const buttonAge = document.getElementById('Ok_Age');
buttonAge.onclick = (ev => {
    +inputAge.value < 18 ? console.log('Ваш вік менше 18 років') : console.log('Ваш вік більше або  дорівнює 18 років');
});
console.log('');
document.write('<br>--------------------');
document.write('<br>');
document.write('<br>');

// 4- Створіть меню, яке розгортається/згортається при клику
console.log('4. - Створіть меню, яке розгортається/згортається при клику');
console.log('');
document.write('Завдання №4');
document.write('<br>');
document.write('<br>');

const ul = document.createElement('ul');
const div = document.createElement('div');
console.log(div);
const button3 = document.createElement('button');
button3.innerText = 'Menu';
const li = document.createElement('li');
li.innerText = 'List';
const li1 = document.createElement('li');
li1.innerText = 'List 1';
const li2 = document.createElement('li');
li2.innerText = 'List 2';
const li3 = document.createElement('li');
li3.innerText = 'List 3';
const li4 = document.createElement('li');
li4.innerText = 'List 4';
div.appendChild(button3);
div.appendChild(ul);
ul.appendChild(li);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
document.body.appendChild(div);
let on = true;
const list = document.getElementById('list');
button3.onclick = (ev => {
    if (on === true) {
        ul.style.display = 'none'
    } else {
        ul.style.display = 'block'
    }
    on = !on;
})

console.log('');
document.write('<br>');
document.write('<br>');


// 5 Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
console.log('5.- Створіть список коментарів , приклад об"єкту коментаря - {title : "lorem", body:"lorem ipsum dolo sit ameti"}.');
console.log('');

const comments = [
    {
        "title": "laudantium ",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos"
    },

    {
        "title": "non",
        "body": "non et atque noccaecati deserunt quas accusantium unde odit nobis qui voluptatem"
    },
    {
        "title": "doloribus",
        "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium "
    },

    {
        "title": "ut voluptatem",
        "body": "ut voluptatem corrupti velit "
    },
    {
        "title": "voluptate",
        "body": "voluptate iusto quis nobis reprehenderit ipsum amet nulla "
    },
    {
        "title": "expedita",
        "body": "expedita maiores dignissimos facilis"
    },

    {
        "title": "nihil",
        "body": "nihil ut voluptates blanditiis autem odio dicta rerum"
    },
    {
        "title": "consequatur",
        "body": "consequatur necessitatibus totam sed sit dolorum"
    },
    {
        "title": "veritatis",
        "body": "veritatis voluptates necessitatibus maiores corrupti"
    }
];

console.log('');
document.write('<br>');
document.write('<br>');


//6.Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.
console.log('6. Додайте кожному коментарю по кнопці для згортання його body.');
console.log('Вивести список коментарів в документ, кожний в своєму блоці.');
console.log('');
document.write('Завдання №6');
document.write('<br>');

for (const comment of comments) {
    console.log(comment);

    const commentDiv = document.createElement('div');
    commentDiv.style.border = '2px solid blue';
    commentDiv.style.margin = '10px';
    commentDiv.style.backgroundColor = 'yellow';
    document.body.appendChild(commentDiv);
    const title = document.createElement('h1');
    title.innerText = comment.title
    const body = document.createElement('p');
    body.innerText = comment.body;
    commentDiv.appendChild(title);
    commentDiv.appendChild(body);
    const button4 = document.createElement('button');
    button4.innerText = 'Hide';
    commentDiv.appendChild(button4);

    button4.onclick = (ev => {
        if (on === true) {
            body.style.display = 'none'
        } else {
            body.style.display = 'block'
        }
        on = !on;
    });
}
console.log('');
document.write('<br>');
document.write('<br>');

// 7.- Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
console.log('7.- Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.');
console.log(' Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)');
console.log(' Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.');
console.log('');
document.write('Завдання №7');
document.write('<br>');
document.write('<br>');

const forma1 = document.createElement('form');
console.log(forma1);
forma1.setAttribute('id', 'form1');
const input1 = document.createElement('input');
input1.setAttribute('type', 'text');
input1.setAttribute('placeholder', 'Введіть текст');
input1.setAttribute('name', 'input1');
const input2 = document.createElement('input');
input2.setAttribute('type', 'text');
input2.setAttribute('placeholder', 'Введіть текст');
input2.setAttribute('name', 'input2');
forma1.appendChild(input1);
forma1.appendChild(input2);
document.body.appendChild(forma1);

const forma2 = document.createElement('form');
console.log(forma2);
forma2.setAttribute('id', 'form2');
const input3 = document.createElement('input');
input3.setAttribute('type', 'text');
input3.setAttribute('placeholder', 'Введіть текст');
input3.setAttribute('name', 'input3');
const input4 = document.createElement('input');
input4.setAttribute('type', 'text');
input4.setAttribute('placeholder', 'Введіть текст');
input4.setAttribute('name', 'input4');
forma2.appendChild(input3);
forma2.appendChild(input4);
document.body.appendChild(forma2);

const button5 = document.createElement('button');
button5.setAttribute('id', 'but5');
button5.innerText = 'ok';
document.body.appendChild(button5);

button5.onclick = (ev => {
    for (const element of document.forms) {
        for (const text_input of element) {
            console.log(text_input.value);
        }
    }
});

console.log(document.forms);

console.log('');
document.write('<br>');
document.write('<br>');
document.write('<br>');

// 8.- Створити функцію, яка генерує таблицю.
//   Перший аргумент визначає кількість строк.
//   Другий параметр визначає кількість ячейок в кожній строці.
//   Третій параметр визначає елемент в який потрібно таблицю додати.
console.log('8. - Створити функцію, яка генерує таблицю.');
console.log('Перший аргумент визначає кількість строк.');
console.log('Другий параметр визначає кількість ячейок в кожній строці.');
console.log('Третій параметр визначає елемент в який потрібно таблицю додати.');
console.log('');
document.write('Завдання №8');
document.write('<br>');
document.write('<br>');

const divTable = document.createElement('div');
divTable.setAttribute('id', 'tableId');
document.body.appendChild(divTable);
console.log(tableId);

function createTable(str, column, elem) {
    let k = 1;
    const target = document.getElementById(elem);
    const table = document.createElement('table');
    for (let i = 0; i < str; i++) {
        const tr = document.createElement('tr');
        tr.style.backgroundColor = 'silver';
        for (let j = 0; j < column; j++) {
            const td = document.createElement('td');
            td.innerText = `${k++}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    target.appendChild(table);
    console.log(table);
}

createTable(5, 6, 'tableId');
console.log('');
document.write('<br>');
document.write('<br>');

// 9.- Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
console.log('9.- Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.');
console.log('');
document.write('Завдання №9');
document.write('<br>');
document.write('<br>');

const carsArray = [
    {
        alt: 'car1',
        url: 'img/car1.jpg'
    },
    {
        alt: 'car2',
        url: 'img/car2.jpg'

    },
    {
        alt: 'car3',
        url: 'img/car3.jpg'
    },
]
//     <div>
//     <img id="imgCont" src="img/car1.jpg" alt="">
// <button id="butLeft">Left</button>
//<button id="butRigth">Rigth</button>
// </div>

const divCars = document.createElement('div');
const img = document.createElement('img');
img.setAttribute('id', 'imgCont');
img.setAttribute('src', 'img/car1.jpg');
img.setAttribute('alt', ' ');
img.style.margin = '10px';
img.style.width = '200px';
const buttonleft = document.createElement('buttton');
buttonleft.setAttribute('id', 'buttonLeft');
buttonleft.innerText = 'Left';
buttonleft.style.margin = '10px';
buttonleft.style.border = '1px solid black';
buttonleft.style.backgroundColor = 'silver';
const buttonrigth = document.createElement('buttton');
buttonrigth.setAttribute('id', 'buttonRigth');
buttonrigth.innerText = 'Rigth';
buttonrigth.style.margin = '10px';
buttonrigth.style.border = '1px solid black';
buttonrigth.style.backgroundColor = 'silver';
document.body.appendChild(divCars);
divCars.appendChild(img);
divCars.appendChild(buttonleft);
divCars.appendChild(buttonrigth);


let indexCars = 0;
buttonLeft.onclick = (ev => {
    if (indexCars - 1 < 0) {
        indexCars = carsArray.length - 1;
    } else {
        indexCars = indexCars - 1;
    }
    imgCont.src = carsArray[indexCars].url;
    imgCont.alt = carsArray[indexCars].alt;
    imgCont.setAttribute('src', carsArray[indexCars].url)
})

buttonRigth.onclick = () => {
    if (indexCars + 1 > carsArray.length - 1) {
        indexCars = 0;
    } else {
        indexCars = indexCars + 1

    }
    imgCont.src = carsArray[indexCars].url;
    imgCont.alt = carsArray[indexCars].alt;
    imgCont.setAttribute('src', carsArray[indexCars].url)
}
document.write('<br>');
document.write('<br>');
console.log('');
console.log('');

//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
console.log('--------------------');
console.log('РОБОТА В АУДИТОРІЇ');
console.log('--------------------');
//
// 10.- Сворити масив нецензурних слів.
//     Створити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
console.log('10.- Сворити масив нецензурних слів.');
console.log('Створити інпут текстового типу.');
console.log('Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.');
console.log('Перевірку робити при натисканні на кнопку');
console.log('');
document.write('Завдання №10');
document.write('<br>');
document.write('<br>');
const words = ['путя', 'терор', 'кокс'];
document.write('Масив нецензурних слів: ' + JSON.stringify(words));
console.log('Масив нецензурних слів: ' + JSON.stringify(words));
document.write('<br>');
document.write('<br>');

const input5 = document.createElement('input');
input5.setAttribute('type', 'text');
input5.setAttribute('id', 'inputText');
input5.setAttribute('placeholder', 'Введіть слово');
console.log(input5);
document.body.appendChild(input5);

const butInput5 = document.createElement('button');
butInput5.setAttribute('id', 'Test');
butInput5.innerText = 'Перевірка';
document.body.appendChild(butInput5);


butInput5.onclick = (ev => {
    const word = input5.value;
    console.log(word);
    if (words.includes(word)) {
        alert('Слово нецензурне! Заборонене для використання!')

    }
})


console.log('');
console.log('');
document.write('<br>');
document.write('<br>');
document.write('<br>');

// 11.- Створити масив нецензурних слів.
//     Створити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
console.log('11.- Сворити масив нецензурних слів.');
console.log('Сворити інпут текстового типу.');
console.log('Потрібно перевіряти чи не містить ціле речення в собі погані слова.');
console.log('Кинути алерт з попередженням у випадку якщо містить.');
console.log('Перевірку робити при натисканні на кнопку');
console.log('');
document.write('Завдання №11');
document.write('<br>');
document.write('<br>');

const input6 = document.createElement('input');
input6.setAttribute('type', 'text');
input6.setAttribute('id', 'Sentence');
input6.setAttribute('placeholder', 'Введіть речення');
console.log(input6);
document.body.appendChild(input6);

const butInput6 = document.createElement('button');
butInput6.setAttribute('id', 'Test');
butInput6.innerText = 'Перевірка';
document.body.appendChild(butInput6);

const words2 = ['путя', 'терор', 'кокс'];

butInput6.onclick = (ev => {
    const sentence = input6.value;
    word2 = sentence.split(' ');
    for (let elem of word2) {
        console.log(elem);
        if (words2.includes(elem)) {
            alert('Слово нецензурне! Заборонене для використання!')
        }
    }

})


console.log('');
document.write('<br>');
document.write('<br>');
document.write('<br>');

// 12. Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
console.log('12.- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.');
console.log('При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті');
console.log('');
document.write('Завдання №12');
document.write('<br>');


console.log('');
document.write('<br>');
document.write('<br>');

// 13.-- Взяти масив юзерів

const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
// console.log(JSON.stringify(usersWithAddress));

//13.-- Взяти масив юзерів
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ
console.log('13. - Взяти масив юзерів');
console.log('Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.');
console.log('1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)');
console.log('2й - залишає старших 29 років включно');
console.log('3й - залишає тих в кого місто Київ');
console.log('Дані виводить в документ');
console.log('');
document.write('Завдання №13');
document.write('<br>');
document.write('<br>');

const divInput7 = document.createElement('div');
divInput7.setAttribute('id', 'checkbox1');
document.body.appendChild(divInput7);
const checkbox1 = document.createElement('input');
checkbox1.setAttribute('type', 'checkbox');
checkbox1.setAttribute('id', 'one');
divInput7.appendChild(checkbox1);
const label1 = document.createElement('label');
label1.setAttribute('for', 'one');
label1.innerText = 'isMarried = false';
label1.style.margin = '10px';
divInput7.appendChild(label1);

const divInput8 = document.createElement('div');
divInput8.setAttribute('id', 'checkbox2');
document.body.appendChild(divInput8);
const checkbox2 = document.createElement('input');
checkbox2.setAttribute('type', 'checkbox');
checkbox2.setAttribute('id', 'two');
divInput8.appendChild(checkbox2);
const label2 = document.createElement('label');
label2.setAttribute('for', 'two');
label2.innerText = 'старші 29 років включно';
label2.style.margin = '10px';
divInput8.appendChild(label2);

const divInput9 = document.createElement('div');
divInput9.setAttribute('id', 'checkbox3');
document.body.appendChild(divInput9);
const checkbox3 = document.createElement('input');
checkbox3.setAttribute('type', 'checkbox');
checkbox3.setAttribute('id', 'three');
divInput9.appendChild(checkbox3);
const label3 = document.createElement('label');
label3.setAttribute('for', 'three');
label3.innerText = 'місто Київ';
label3.style.margin = '10px';
divInput9.appendChild(label3);

const buttonCheck = document.createElement('button');
buttonCheck.innerText = 'Підтвердити';
document.body.appendChild(buttonCheck);


buttonCheck.onclick = () => {
    if (checkbox1.checked) {
        let userMarried = usersWithAddress.filter((value) => {
            return !value.isMarried;
        });
        console.log('Зі статусом false')
        for (const user of userMarried) {
            console.log(JSON.stringify(user));
        }
        console.log(' ');
    }
    if (checkbox2.checked) {
        let userMore29 = usersWithAddress.filter((value) => {
            return value.age >= 29;
        });
        console.log('Старші 29 років включно')
        for (const user of userMore29) {
            console.log(JSON.stringify(user));
        }
        console.log(' ');
    }

    if (checkbox3.checked) {
        let userCity = usersWithAddress.filter((value) => {
            return (value.address.city === 'Kyiv');
        });
        console.log('Місто Київ')
        for (const user of userCity) {
            console.log(JSON.stringify(user));
        }
        console.log(' ');
    }

}