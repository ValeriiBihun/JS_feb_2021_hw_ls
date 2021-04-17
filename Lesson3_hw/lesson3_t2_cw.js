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

// a. змінює колір тексту елементу з ід main_header на назву групи (mon-year)
console.log('');
console.log('a. змінює колір тексту елементу з ід main_header на назву групи (mon-year)');
const id_mainHeader = document.getElementById('main_header');
id_mainHeader.style.color = 'red';
id_mainHeader.innerText = 'FEB-2021';
console.log(id_mainHeader);

console.log('');
// b. робить ширину елементу ul 400px
console.log('');
console.log('b. робить ширину елементу ul 400px');
const ulTag = document.getElementsByTagName('ul');
for (const ulTagElement of ulTag) {
    console.log(ulTagElement);
    ulTagElement.style.width = '400px';
}
console.log(ulTag);
console.log('');

// c. робить ширину всіх елементів з класом linkList шириною 50%
console.log('');

console.log('c. робить ширину всіх елементів з класом linkList шириною 50%');
const linkList = document.getElementsByClassName('linkList');
for (const linkListElement of linkList) {
    console.log(linkListElement);
    linkListElement.style.width = '50%';
}
console.log(linkList);

// d. отримує текст який зберігається в елементі з класом listElement2
console.log('');

console.log('d. отримує текст який зберігається в елементі з класом listElement2');
const listElement2 = document.getElementsByClassName('listElement2');
for (const linkListElement of listElement2) {
    console.log(linkListElement);
    let name = linkListElement.innerText;
    console.log('listElement2 = ' + name);
}
console.log('');

// e. отримує всі елементи li та змінює ім колір фону на сірий
console.log('e. отримує всі елементи li та змінює ім колір фону на сірий');
const liTag = document.getElementsByTagName('li');
for (const liTagElement of liTag) {
    liTagElement.style.backgroundColor = 'silver';
    console.log(liTagElement);
}
console.log('');
// f. отримує всі елементи 'a' та додає їм клас anchor

console.log('f. отримує всі елементи "a" та додає їм клас anchor');
const aElem = document.getElementsByTagName('a');
for (const aElement of aElem) {
    aElement.classList.add('anchor');
    console.log(aElement);
}
console.log('');

// g. отримує всі елементи 'a' та у випадку, якщо текстовий контент елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
console.log('g. отримує всі елементи "a" та у випадку, якщо текстовий контент елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів');
const aElem2 = document.getElementsByTagName('a');
for (const aElement of aElem2) {
    if (aElement.innerText === 'link3') {
        aElement.style.fontSize = '40px';
    }
    console.log(aElement);
}
console.log('');

// h. отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
console.log('h. отримує всі елементи "a" та додає їм клас element_XXX. Де XXX - текстовий контент елементу a');
const aElem3 = document.getElementsByTagName('a');
for (const aElement of aElem3) {
    aElement.classList.add(`element_${aElement.innerText}`);
    console.log(aElement);
}
console.log('');

// i. отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// console.log('');

console.log('i. отримує всі елементи "sub-header" та змінює колір фону. Фон отримати з prompt()');
const subHeader=document.getElementsByClassName('sub-header');
for (const subHeaderElement of subHeader) {
    subHeaderElement.style.background=prompt(`Введіть колір фону: ${subHeaderElement.innerText}`);
    console.log(subHeaderElement);
}
console.log('');

// j. отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елементу = content 2 segment . Колір отримати з prompt()
console.log('');
console.log('j. - отримує всі елементи "sub-header" та змінює колір тексту у випадку якщо текст елементу = content 2 segment . Колір отримати з prompt()');

console.log('');

// k. отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
console.log('');
console.log('k. отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()');
// const content1 = document.getElementsByClassName('content_1');
// for (const content1Elem of content1) {
//     console.log(content1Elem.classList);
//     for (const content1Elem of content1) {
//         content1Elem.innerText = prompt('Введіть довільний  текст:');
//     }
//     console.log(content1Elem);
// }
console.log('');
// l. отримати елементи p та змінити їм padding на 20px
console.log('');
console.log('l. отримати елементи p та змінити їм padding на 20px');
const pElem1 = document.getElementsByTagName('p');
for (const pElement of pElem1) {
    pElement.style.padding = '20px';
    console.log(pElement);
}
console.log('');

// m. отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
console.log('');
console.log(' m. отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)');
const text2 = document.getElementsByClassName('text2');
for (const text2El of text2) {
    text2El.innerText='mon-2021';
    console.log(text2);
}
console.log('');