//
//
// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
console.log('Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.');
console.log(' ');

//
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
console.log(' 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName : ');
console.log(' ');

// a. отримує текст з параграфа з id "content"
console.log(' a. отримує текст з параграфа з id "content"');
const content=document.getElementById('content');
console.log(content.innerText);
console.log(' ');

// b. отримує текст з блоку з id "rules"
console.log('b. отримує текст з блоку з id "rules" ');
const rules=document.getElementById('rules');
console.log(rules.innerText );
console.log(' ');

// c. замініть текст параграфа з id 'content' на будь-який інший
console.log('c. замініть текст параграфа з id "content" на будь-який інший ');
console.log(' ');
const content1=document.getElementById('content');
console.log(content1);
content1.innerText=rules.innerText;
console.log(content1.innerText);

console.log(' ');
// d. замініть текст параграфа з id 'rules' на будь-який інший
console.log('d. замініть текст параграфа з id "rules" на будь-який інший ');
console.log(' ');
const rules1=document.getElementById('rules');
console.log(rules1);
rules1.innerText='Вторая замена текста';
console.log(rules.innerText);

console.log(' ');
// e. змініть кожному елементу колір фону на червоний
console.log(' e. змініть кожному елементу колір фону на червоний');
console.log(' ');
const allEl=document.getElementsByTagName('p',);
console.log(allEl);
for (const allElement of allEl) {
    allElement.style.backgroundColor='red';
}
const allDiv=document.getElementsByTagName('div');
console.log(allDiv);
for (const divEl of allDiv) {
    divEl.style.backgroundColor='red';
}
let ulDiv=document.getElementsByTagName('ul');
console.log(ulDiv);
for (const ulEl of ulDiv) {
    ulEl.style.backgroundColor='red';
}
console.log(' ');

// f. змініть кожному елементу колір тексту на синій
console.log('f. змініть кожному елементу колір тексту на синій ');
console.log(' ');
let allP=document.getElementsByTagName('p','div');
console.log(allEl);
for (const allElement of allP) {
    allElement.style.backgroundColor='blue';
}
let allDiv2=document.getElementsByTagName('div');
console.log(allDiv2);
for (const divEl of allDiv2) {
    divEl.style.backgroundColor='blue';
}
let ulDiv2=document.getElementsByTagName('ul');
console.log(ulDiv2);
for (const ulEl of ulDiv2) {
    ulEl.style.backgroundColor='blue';
}
console.log(' ');

// g. отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log('g. отримати весь список класів елемента з id=rules і вивести їх в console.log ');
console.log(' ');

let allClassRules=document.getElementById('rules');
console.log(allClassRules.classList);
console.log(' ');

// h. отримати всі елементи з класом fc_rules
console.log('h. отримати всі елементи з класом fc_rules ');
console.log(' ');
const allFc_rules=document.getElementsByClassName('fc_rules');
console.log(allFc_rules);
for (const elemFc_rules of allFc_rules) {
    console.log(elemFc_rules);
}
console.log(' ');
// i. поміняти колір тексту у всіх елементів fc_rules на червоний
console.log('i. поміняти колір тексту у всіх елементів fc_rules на червоний ');
console.log(' ');

for (const elemFc_rules of allFc_rules) {
   elemFc_rules.style.color='red';
}
console.log(' ');
//
//
// 2) За допомогою циклу проітерувати  масив users, записати кожного юзера в свій блок за допомогою document.createElement.
//     Вставити цей блок на сторінку



console.log(' ');
// 3) За допомогою циклу проітерувати  масив users, записати кожного юзера в свій блок за допомогою document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];


for (const user of users) {
    console.log(user);
}


console.log('2.За допомогою циклу проітерувати  масив users, записати кожного юзера в свій блок за допомогою document.createElement. ');
console.log(' Вставити цей блок на сторінку ');

for (const user of users) {
    const userDiv=document.createElement('div');
    console.log(userDiv);

    userDiv.innerHTML=`name:${user.name},<br> age:${user.age},<br> status:${user.status} ,<br> address:{city: ${user.address.city},
    country:${user.address.country},street:${user.address.street},houseNumber:${user.address.houseNumber} }`;
    userDiv.style.border='2px solid blue';
    userDiv.style.margin='10px';
    userDiv.style.padding='10px';
    userDiv.style.backgroundColor='yellow';
    document.body.appendChild(userDiv);
}


//3) За допомогою циклу проітерувати  масив users, записати кожного юзера в свій блок за допомогою document.createElement.
// //     Блок з адресою зробити окремим блоком, з блоками для кожної властивості
console.log('3.За допомогою циклу проітерувати  масив users, записати кожного юзера в свій блок за допомогою document.createElement. ');
console.log('  Блок з адресою зробити окремим блоком, з блоками для кожної властивості');
console.log('');
console.log('_____________________________________________________');
console.log('');

for (const user2 of users) {
    const userDiv2=document.createElement('div');
    const userDiv3=document.createElement('div');
    console.log(userDiv2);
    console.log(userDiv3);

    userDiv2.innerHTML=`name:${user2.name},<br> age:${user2.age},<br> status:${user2.status}`;
    userDiv2.style.border='2px solid red';
    userDiv2.style.margin='10px';
    userDiv2.style.padding='10px';
    userDiv2.style.backgroundColor='yellow';

    userDiv3.innerHTML=`address:<br>
    <div style="border:1px solid green;background:lavenderblush;">city: ${user2.address.city}</div> <br>
    <div style="border:1px solid green;background:lavenderblush;">country:${user2.address.country}</div> <br>
    <div style="border:1px solid green;background:lavenderblush;">street:${user2.address.street}</div> <br>
    <div style="border:1px solid green;background:lavenderblush;">houseNumber:${user2.address.houseNumber}</div> `;
    userDiv3.style.border='2px solid blue';
    userDiv3.style.margin='10px';
    userDiv3.style.padding='10px';
    userDiv3.style.backgroundColor='silver';
    document.body.appendChild(userDiv2);
    document.body.appendChild(userDiv3);
}

// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
console.log('');
console.log('_______________________________________________');
console.log('РОБОТА В АУДИТОРІЇ');
console.log('________________________________________________');

// Взяти файл template_2.html та працювати в ньому
console.log('Взяти файл template_2.html та працювати в ньому');
console.log('');
// 1. Напишіть код, який :
console.log('1. Напишіть код, який :');
console.log('');
console.log('');

// a. змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
console.log('');
console.log('a. змінює колір тексту елемнту з ід main_header на назву групи (mon-year)');
console.log('');
// b. робить ширину елементу ul 400px
console.log('');
console.log('b. робить ширину елементу ul 400px');
console.log('');
// c. робить ширину всіх елементів з класом linkList шириною 50%
console.log('');
console.log('c. робить ширину всіх елементів з класом linkList шириною 50%');
console.log('');
// d. отримує текст який зберігається в елементі з класом listElement2
console.log('');
console.log('d. отримує текст який зберігається в елементі з класом listElement2');
console.log('');
// e. отримує всі елементи li та змінює ім колір фону на сірий
console.log('');
console.log('e. отримує всі елементи li та змінює ім колір фону на сірий');
console.log('');
// f. отримує всі елементи 'a' та додає їм клас anchor
console.log('');
console.log('f. отримує всі елементи "a" та додає їм клас anchor');
console.log('');
// g. отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
console.log('');
console.log('g. отримує всі елементи "a" та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів');
console.log('');
// h. отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
console.log('');
console.log('h. отримує всі елементи "a" та додає їм клас element_XXX. Де XXX - текстовий контент елементу a');
console.log('');
// i. отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
console.log('');
console.log('i. отримує всі елементи "sub-header" та змінює колір фону. Фон отримати з prompt()');
console.log('');
// j. отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
console.log('');
console.log('j. отримує всі елементи "sub-header" та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()');
console.log('');
// k. отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
console.log('');
console.log('k. отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()');
console.log('');
// l. отримати елементи p та змінити їм padding на 20px
console.log('');
console.log('l. отримати елементи p та змінити їм padding на 20px');
console.log('');
// m. отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
console.log('');
console.log(' m. отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)');
console.log('');
console.log('');
//
// 2) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     }
// ];
//
// ===========================================================================
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
    // TO BE CONTINUED .....
// ];
