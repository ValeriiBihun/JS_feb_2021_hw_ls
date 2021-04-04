// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стрічкових значень
// - з 5 значень стрічкового, числового та булевого типу
console.log(' створити масив та вивести його в консоль:');
console.log('з 5 числових значень ');
console.log('з 5 стрічкових значень ');
console.log('з 5 значень стрічкового, числового та булевого типу ');

let arr = [3, 7, 12, 789, 129];
console.log(arr);
let arr1 = ['hello', 'car', 'water', 'sun', 'java'];
console.log(arr1);
let arr1_2 = ['cloud', -457, true, 'table', false];
console.log(arr1_2);
console.log(' ');

// -- Створити пустий масив. Наповнити його будь-якими значеннями
// звертаючись до конкретного індексу.
// Вивести в консоль
console.log('Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу ');
console.log(' ');

let arr0 = [];
arr0[0] = 'wall';
arr0[1] = 'floor';
arr0[2] = false;
arr0[3] = 1234567;
arr0[4] = 'true';
arr0[5] = -1.23567;
console.log(arr0);
console.log(' ');

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div>Мова програмування є набором коротких інструкцій і команд. </div>');
}
document.write('<br\>');

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div>' + '<b>Індекс циклу i=</b>' + i + ' ' + 'Мова програмування є набором коротких інструкцій і команд.' + '</div>');
}
document.write('<br\>');


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    document.write('<h1>' + 'Що ми хочемо програмувати' + '</h1>');
    i++;
}
document.write('<br\>');

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let j = 0;
while (j < 20) {
    document.write('<h1>' + 'Індекс циклу i=' + j + '.' + '<br>' + 'Що ми хочемо програмувати' + '</h1>');
    j++;
}
document.write('<br\>');

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
console.log('Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі. ');
console.log('');

let numArr = [1, 4, 7, -9, 45, 0, 125, -1.24, 245.3, -478];
for (let i = 0; i < numArr.length; i++) {
    console.log(numArr[i]);
}
console.log(' ');

// - Створити масив з 10 строкових елементів.
// Вивести в консоль всі його елементи в циклі.
console.log('Створити масив з 10 строкових елементів. ');
console.log('Вивести в консоль всі його елементи в циклі. ');

let strArr = ['lesson', 'tea', 'chair', 'window', 'monitor', 'display', 'nano', 'smile', 'rainbow', 'rain'];
for (let i = 0; i < strArr.length; i++) {
    console.log('strArr[' + i + ']= ' + strArr[i]);
}
console.log(' ');

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log('Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі. ');
console.log(' ');

let mixArr = ['lesson', -9, 245.3, true, 'window', 'false', false, 0, 'smile', 'tea'];
for (let i = 0; i < mixArr.length; i++) {
    console.log('mixArr[' + i + ']= ' + mixArr[i]);
}
console.log(' ');

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
console.log(' Створити масив з 10 елементів числового, стрічкового і булевого типу. ');
console.log('За допомогою if та typeof вивести тільки булеві елементи ');

let mixArr1 = [45, 'tiger', true, 'monkey', false, -1.987, 'true', true, 'frog', 479];
for (let i = 0; i < mixArr1.length; i++) {
    if (typeof (mixArr1[i]) === 'boolean') {
        console.log('mixArr1 [' + i + ']=' + mixArr1[i]);
    }
}
console.log(' ');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
console.log(' Створити масив з 10 елементів числового, стірчкового і булевого типу.');
console.log('За допомогою if та typeof вивести тільки числові елементи ');

let mixArr2 = [478, 'sun', true, false, 'cloud', 'rain', -3.4578, 'rainbow', 789.01, 78.12];
for (let i = 0; i < mixArr2.length; i++) {
    if (typeof (mixArr2[i]) === 'number') {
        console.log('mixArr2[' + i + ']=' + mixArr2[i]);
    }
}
console.log(' ');

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
console.log('Створити масив з 10 елементів числового, стрічкового і булевого типу. ');
console.log(' За допомогою if та typeof вивести тільки рядкові елементи');

let mixArr3 = ['table', true, 'desk', 145, -457, false, 'false', 'window', 'chair'];
for (let i = 0; i < mixArr3.length; i++) {
    if (typeof (mixArr3[i]) === 'string') {
        console.log('mixArr3[' + i + ']=' + mixArr3[i]);
    }
}
console.log(' ');

// - Створити порожній масив.
// Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
console.log('Створити порожній масив. ');
console.log('  Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.');
console.log('Вивести в консоль всі його елементи в циклі. ');

let arrMix4 = [];
arrMix4[0] = 'green';
arrMix4[1] = 'blue';
arrMix4[2] = 3.14;
arrMix4[3] = -124;
arrMix4[4] = true;
arrMix4[5] = 'red';
arrMix4[6] = 1.98;
arrMix4[7] = 'false';
arrMix4[8] = true;
arrMix4[9] = 'brown';
for (let i = 0; i < arrMix4.length; i++) {
    console.log('arrMix4[' + i + ']=' + arrMix4[i]);
}
console.log(' ');

// - Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
console.log('Створити цикл for на 10  ітерацій з кроком 1. ');
console.log('Вивести поточний номер кроку через console.log та document.write ');
for (let i = 0; i < 10; i++) {
    console.log('i=' + i);
    document.write('i=' + i + '<br\>');
}
document.write('<br\>');
console.log(' ');

// - Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
console.log('Створити цикл for на 100 ітерацій з кроком 1. ');
console.log('  Вивести поточний номер кроку через console.log та document.write');

for (let i = 0; i < 100; i++) {
    console.log('i=' + i);
    document.write('i=' + i + '<br\>');
}
document.write('<br\>');
console.log(' ');

// - Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write
console.log('Створити цикл for на 100 ітерацій з кроком 2. ');
console.log('Вивести поточний номер кроку через console.log та document.write ');

for (let i = 0; i < 10; i = i + 2) {
    console.log('i=' + i);
    document.write('i=' + i + '<br\>');
}

document.write('<br\>');
console.log(' ');

// - Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write

console.log('Створити цикл for на 100 ітерацій з кроком 2. ');
console.log('Вивести поточний номер кроку через console.log та document.write');
for (let i = 0; i < 100; i = i + 2) {
    console.log('i=' + i);
    document.write('i=' + i + '<br\>');
}

document.write('<br\>');
console.log(' ');

// - Створити цикл for на 10 ітерацій.
// Вивести тільки парні кроки. через console.log + document.write
console.log('Створити цикл for на 10 ітерацій. ');
console.log(' Вивести тільки парні кроки. через console.log + document.write');

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log('i=' + i);
        document.write('i=' + i + '<br\>');
    }
}
document.write('<br\>');
console.log(' ');

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

console.log('- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write ');
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log('i=' + i);
        document.write('i=' + i + '<br\>');
    }
}
document.write('<br\>');
console.log(' ');

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

console.log('Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write ');
console.log(' ');
for (let i = 0; i < 100; i++) {
    if (!(i % 2 === 0)) {
        console.log('i=' + i);
        document.write('i=' + i + '<br\>');
    }
}
document.write('<br\>');
console.log(' ');

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
console.log('Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди) ');
console.log(' ');

let minute = 0;
let second = 0;
for (let i = 0; i < 60; i++) {
    minute = i;
    for (let j = 0; j < 60; j++) {
        second = j;
        console.log(minute + ' хв. ' + ': ' + second + ' сек.');
        if ((minute === 2) && (second === 00)) {
            break;
        }
    }
    if ((minute === 2) && (second === 00)) {
        break;
    }
}
console.log(' ');

// - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
console.log('Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)');
console.log(' ');
let hour = 0;
let minutes = 0;
let seconds = 0;
for (let i = 0; i < 60; i++) {
    hour = i;
    for (let j = 0; j < 60; j++) {
        minutes = 0;
        for (let k1 = 0; k1 < 60; k1++) {
            seconds = 0;
            console.log(hour + ' год .' + ' : ' + minutes + ' хв. ' + ': ' + seconds + ' сек.');
            if ((hour === 2) && (minutes === 0) && (seconds === 0)) {
                break;
            }
        }
        if ((hour === 2) && (minutes === 0) && (seconds === 0)) {
            break;
        }
    }
    if ((hour === 2) && (minutes === 0) && (seconds === 0)) {
        break;
    }
}


console.log(' ');

// Додатково
console.log(' Додатково');
console.log('-------------------------------- ');


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
console.log(' Дано масив: [ \'a\', \'b\', \'c\'] . За допомогою циклу for зібрати всі букви в слово.');
console.log(' ');

let letter = ['a', 'b', 'c'];
let word = '';
for (let i = 0; i < letter.length; i++) {
    word = word + letter[i];
}
console.log('word: ' + word);
console.log(' ');

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
console.log('Дано масив: [ \'a\', \'b\', \'c\'] . За допомогою циклу while зібрати всі букви в слово. ');
console.log(' ');

let letter2 = ['a', 'b', 'c'];
let word2 = '';
let k = 0;
while (k < letter2.length) {
    word2 += letter2[k];
    k++;
}
console.log('word2: ' + word2);
console.log(' ');

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
console.log('Дано масив: [ \'a\', \'b\', \'c\'] . За допомогою циклу for of зібрати всі букви в слово. ');
console.log(' ');

let letterArr = ['a', 'b', 'c'];
let word3 = '';
for (let letter of letterArr) {
    word3 += letter;
}
console.log('word3: ' + word3);
console.log(' ');


// РОБОТА В АУДИТОРІЇ
console.log('РОБОТА В АУДИТОРІЇ ');
console.log('---------------------------------------- ');
// ____________________________________________________________________________________________________________________________________________________
//
console.log('Дано масив [\'a\', \'b\', \'c\']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.');
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
console.log(' ');

let letterArr2 = ['a', 'b', 'c'];
console.log('letterArr2: ' + letterArr2);
for (let i = 1; i <= 3; i++) {
    letterArr2.push(i);
}
console.log('letterArr2: ' + letterArr2);
console.log(' ');

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
console.log('- Дано масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1]. ');
console.log(' ');

let arr2 = [1, 2, 3];
console.log('arr2: ' + arr2);

console.log('arr2: ' + arr2);
console.log(' ');


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
console.log('Дано масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.');
console.log(' ');

let arr3 = [1, 2, 3];
console.log('arr3: ' + arr3);
for (let i = 0; i < 3; i++) {
    arr3.push(i + 4);
}
console.log('arr3: ' + arr3);
console.log(' ');

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
console.log(' - Дано масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.');
console.log(' ');

let arr4 = [1, 2, 3];
console.log('arr4: ' + arr4);
for (let i = 6; i > 3; i = i - 1) {
    arr4.unshift(i);
}
console.log('arr4: ' + arr4);
console.log(' ');

// - Дан масив ['js', 'css', 'jq'].
// Виведіть на екран перший елемент за допомогою shift()
console.log('// - Дано масив [\'js\', \'css\', \'jq\'].\n' +
    '// Виведіть на екран перший елемент за допомогою shift() ');
console.log(' ');

let arr5 = ['js', 'css', 'jq'];
console.log('arr5: ' + arr5);
console.log('перший елемент масиву: ' + arr5.shift());
console.log(' ');

// - Дан масив ['js', 'css', 'jq'].Виведіть на екран останній елемент за допомогою pop()
console.log('- Дано масив [\'js\', \'css\', \'jq\'].Виведіть на екран останній елемент за допомогою pop() ');
console.log(' ');

let arr6 = ['js', 'css', 'jq'];
console.log('arr6: ' + arr6);
console.log('останній  елемент масиву: ' + arr6.pop());
console.log(' ');

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
console.log('- Дано масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5]. ');
console.log(' ');

let arr7 = [1, 2, 3, 4, 5];
console.log('arr7: ' + arr7);
for (let i = 0; i < 3; i++) {
    arr7.shift();
}
console.log('arr7: ' + arr7);
console.log(' ');

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
console.log('- Дано масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2]. ');
console.log(' ');

let arr8 = [1, 2, 3, 4, 5];
console.log('arr8: ' + arr8);
for (let i = arr8.length - 1; i > 1; i = i - 1) {
    arr8.pop();
}
console.log('arr8: ' + arr8);
console.log(' ');

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
console.log('- Дано масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, \'a\', \'b\', \'c\', 4, 5]. ');
console.log(' ');
//     Підказка. Необхідно стерти елементи, зберегти їх кудись.
//     Дописати букви і після букв повернути стерті цифри
let arr9 = [1, 2, 3, 4, 5];
console.log('arr9: ' + arr9);
let arr10 = [];
let arr11 = ['a', 'b', 'c'];
for (let i = arr9.length - 1; i > 2; i = i - 1) {
    let letter3 = arr9.pop();
    arr10.unshift(letter3);
}
arr9.push(arr11);
arr9.push(arr10);
console.log('arr9: ' + arr9);
console.log(' ');

// - Дан масив [1, 2, 3, 4, 5].Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
console.log('- Дано масив [1, 2, 3, 4, 5].Зробіть з нього масив [1, \'a\', \'b\', 2, 3, 4, \'c\', 5, \'e\']. ');
console.log(' ');
//  Підказка. Працюйте по принципу задачі вище.
let arr12 = [1, 2, 3, 4, 5];
console.log('arr12: ' + arr12);
let arr13 = [];
let arr14 = ['a', 'b', 'c', 'e'];
for (let i = arr12.length - 1; i > 0; i = i - 1) {
    let letter4 = arr12.pop();
    arr13.unshift(letter4);
}
arr12.push(arr14.shift());
arr12.push(arr14.shift());
arr12.push(arr13.shift());
arr12.push(arr13.shift());
arr12.push(arr13.shift());
arr12.push(arr14.shift());
arr12.push(arr13.shift());
arr12.push(arr14.shift());
console.log('arr12: ' + arr12);
console.log(' ');

// - Взяти масив з 10 чисел або створити його.Вивести в консоль тільки ті елементи, значення яких є парними.
console.log(' - Взяти масив з 10 чисел або створити його.Вивести в консоль тільки ті елементи, значення яких є парними. ');
console.log(' ');

let arr15 = [];
for (let i = 0; i < 10; i++) {
    arr15[i] = i * 3;
    if ((arr15[i] % 2) === 0) {
        console.log(arr15[i]);
    }
}
console.log('arr15: ' + arr15);
console.log(' ');

// - Взяти масив з 10 чисел або створити його.Створити 2й порожній масив.
// За допомогою будь-якого циклута push () скопіювати значення одного масиву в інший
console.log('Взяти масив з 10 чисел або створити його.Створити 2й порожній масив. ');
console.log('За допомогою будь-якого циклута push () скопіювати значення одного масиву в інший ');
console.log(' ');

let arr16 = [];
for (let i = 0; i < 10; i++) {
    arr16[i] = i * 9;
}
let arr17 = [];
for (let i = 0; i < arr16.length; i++) {
    arr17.push(arr16[i]);
}
console.log('arr16: ' + arr16);
console.log('arr17: ' + arr17);
console.log(' ');

// - Взяти масив з 10 чисел або створити його.Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масивув інший.
console.log('  Взяти масив з 10 чисел або створити його.Створити 2й порожній масив.');
console.log('За допомогою будь-якого циклу скопіювати значення одного масивув інший. ');
console.log(' ');

let arr18 = [];
for (let i = 0; i < 10; i++) {
    arr18[i] = i * 7;
}
let arr19 = [];
for (let i = 0; i < arr18.length; i++) {
    arr19[i] = arr18[i];
}
console.log('arr18: ' + arr18);
console.log('arr19: ' + arr19);
console.log(' ');
//
// ============
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]
console.log('зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18] ');
console.log(' ');
let arr20 = ['2', '17', '13', '6', '22', '31', '45', '66', '10', '-18'];
console.log('arr20: [' + arr20 + ']');
console.log(' ');

// та:
// 1. перебрати його циклом while
console.log('1. перебрати його циклом while ');
console.log(' ');
let l = 0;
while (l < arr20.length) {
    console.log('arr20[' + l + ']=' + arr20[l]);
    l++;
}
console.log(' ');
// 2. перебрати його циклом for
console.log('2. перебрати його циклом for ');
console.log(' ');
for (let i = 0; i < arr20.length; i++) {
    console.log('arr20[' + i + ']=' + arr20[i]);
}
console.log(' ');

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log(' 3. перебрати циклом while та вивести  числа тільки з непарним індексом');
console.log(' ');
let l1 = 0;
while (l1 < arr20.length) {
    if (!(l1 % 2 === 0)) {
        console.log('arr20[' + l1 + ']=' + arr20[l1]);
    }
    l1++;
}
console.log(' ');


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('4. перебрати циклом for та вивести  числа тільки з непарним індексом ');
console.log(' ');
for (let i = 0; i < arr20.length; i++) {
    if (!(i % 2 === 0)) {
        console.log('arr20[' + i + ']=' + arr20[i]);
    }
}
console.log(' ');

// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('5. перебрати циклом while та вивести  числа тільки парні  значення ');
console.log(' ');
let l2 = 0;
while (l2 < arr20.length) {
    if ((arr20[l2] % 2) === 0) {
        console.log('arr20[' + l2 + ']=' + arr20[l2]);
    }
    l2++;
}
console.log(' ');
// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log('6. перебрати циклом for та вивести  числа тільки парні  значення ');
console.log(' ');
for (let i = 0; i < arr20.length; i++) {
    if (arr20[i] % 2 === 0) {
        console.log('arr20[' + i + ']=' + arr20[i]);
    }
}
console.log(' ');

// 7. замінити кожне число кратне 3 на слово okten
console.log('7. замінити кожне число кратне 3 на слово okten ');
console.log(' ');
console.log('arr20: [' + arr20 + ']');
for (let i = 0; i < arr20.length; i++) {
    if (arr20[i] % 3 === 0) {
        arr20[i] = 'okten';
    }
}
console.log('arr20: [' + arr20 + ']');
console.log(' ');

// 8. вивести масив в зворотньому порядку.
console.log('8. вивести масив в зворотньому порядку. ');
console.log(' ');
let arr21 = ['2', '17', '13', '6', '22', '31', '45', '66', '10', '-18'];
console.log('arr21: [' + arr21 + ']');

for (let i = arr21.length - 1; i >= 0; i--) {
    console.log('arr21[' + i + ']=' + arr21[i]);
}
console.log(' ');


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
console.log('9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед) ');
console.log(' ');
//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]
console.log('зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18] ');
console.log(' ');
let arr20_1 = ['2', '17', '13', '6', '22', '31', '45', '66', '10', '-18'];
console.log('arr20_1: [' + arr20_1 + ']');
console.log(' ');

// 9.1. перебрати його циклом while  в зворотньому циклі
console.log('9.1. перебрати його циклом while в зворотньому циклі');
console.log(' ');
let l91 = arr20_1.length - 1;
while (l91 >= 0) {
    console.log('arr20_1[' + l91 + ']=' + arr20_1[l91]);
    l91--;
}
console.log(' ');

// 9.2. перебрати масив  циклом for в зворотньому циклі
console.log('9.2. перебрати його циклом for в зворотньому циклі');
console.log(' ');
for (let i = arr20_1.length - 1; i >= 0; i--) {
    console.log('arr20_1[' + i + ']=' + arr20_1[i]);
}
console.log(' ');

// 9.3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log('9.3. перебрати масив зворотньому циклі циклом while та вивести  числа тільки з непарним індексом');
console.log(' ');
let l93 = arr20_1.length - 1;
while (l93 >= 0) {
    if (!(l93 % 2 === 0)) {
        console.log('arr20_1[' + l93 + ']=' + arr20_1[l93]);
    }
    l93--;
}
console.log(' ');

// 9.4. перебрати циклом for та вивести  числа тільки з непарним індексом в зворотньому циклі
console.log('9.4. перебрати масив зворотньому циклі c for та вивести  числа тільки з непарним індексом ');
console.log(' ');
for (let i = arr20_1.length - 1; i >= 0; i--) {
    if (!(i % 2 === 0)) {
        console.log('arr20_1[' + i + ']=' + arr20_1[i]);
    }
}
console.log(' ');

// 9.5. перебрати циклом while та вивести  числа тільки парні  значення в зворотньому циклі
console.log('9.5. перебрати  масив зворотньому циклі  while та вивести  числа тільки парні  значення ');
console.log(' ');
let l95 = arr20_1.length - 1;
while (l95 >= 0) {
    if ((arr20_1[l95] % 2) === 0) {
        console.log('arr20_1[' + l95 + ']=' + arr20_1[l95]);
    }
    l95--;
}
console.log(' ');

//9.6. перебрати циклом for та вивести  числа тільки парні  значення в зворотньому циклі
console.log('9.6. перебрати масив зворотньому циклі for та вивести  числа тільки парні  значення ');
console.log(' ');
for (let i = arr20_1.length - 1; i >= 0; i--) {
    if (arr20_1[i] % 2 === 0) {
        console.log('arr20_1[' + i + ']=' + arr20_1[i]);
    }
}
console.log(' ');

// 9.7. замінити кожне число кратне 3 на слово okten
console.log('9.7. замінити кожне число кратне 3 на слово okten ');
console.log(' ');
console.log('arr20_1: [' + arr20_1 + ']');
for (let i = arr20_1.length - 1; i >= 0; i--) {
    if (arr20_1[i] % 3 === 0) {
        arr20_1[i] = 'okten';
    }
}
console.log('arr20: [' + arr20 + ']');
console.log(' ');


// 10
// створити пустий масив та :
console.log('10 ');
console.log(' створити пустий масив та : ');

// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

console.log('а - заповнити масив 50 парними числами за допомогою циклу.');
console.log(' ');
let arr22 = [];
for (let i = 1; i < 101; i++) {
    if ((i % 2 === 0)) {
        arr22.push(i);
    }
}
console.log('arr22: [' + arr22 + ']');
console.log('');


//     b. заповнити його 50 непарними числами за допомоги циклу.

console.log('b-заповнити масив  50 непарними числами за допомогою циклу.');
console.log(' ');

let arr23 = [];
for (let i = 1; i < 101; i++) {
    if (!(i % 2 === 0)) {
        arr23.push(i);
    }
}
console.log('arr23: [' + arr23 + ']');
console.log('');

//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
console.log('c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)');
console.log(' ');

let arr24 = [];
for (let i = 0; i < 20; i++) {
    arr24.push(parseInt(Math.random() * 100));
}

console.log('arr24: [' + arr24 + ']');
console.log('');

// d. Заповнити масив 20-ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
console.log(' d. Заповнити масив 20-ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)');
console.log(' ');

let arr25 = [];
for (let i = 0; i < 20; i++) {
    let a = (Math.random() * (732 - 8) + 8);
    arr25.push(parseInt(a));
}
console.log('arr25: [' + arr25 + ']');
console.log('');
// 2. Вивести за допомогою console.log кожний третій елемент

console.log('2. Вивести за допомогою console.log кожний третій елемент');
console.log('');
for (let i = 2; i < arr25.length; i = i + 3) {
    console.log('arr25[' + i + ']=' + arr25[i]);
}
console.log('');

// 3. Вивести за допомогою console.log кожний третій елемен тільки якщо цей елемент є парним.
console.log('3. Вивести за допомогою console.log кожний третій елемент тільки якщо цей елемент є парним.');
console.log('');
for (let i = 2; i < arr25.length; i = i + 3) {
    if (arr25[i] % 2 === 0) {
        console.log('arr25[' + i + ']=' + arr25[i]);
    }
}
console.log('');

// 4. Вивести за допомогою console.log кожний третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
console.log('4. Вивести за допомогою console.log кожний третій елемент тільки якщо цей елемент є парним та записати їх в новий масив');
console.log('');
let arr25New = [];
for (let i = 2; i < arr25.length; i = i + 3) {
    if (arr25[i] % 2 === 0) {
        arr25New.push(arr25[i]);
    }
}
console.log('arr25: ' + arr25);
console.log('arr25New: ' + arr25New);
console.log('');

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
console.log('5. Вивести кожен елемент масиву, сусід справа якого є парним');
console.log('EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56');
console.log('');
let arr26 = [];
for (let i = 0; i < arr25.length - 1; i++) {
    if (arr25[i + 1] % 2 === 0) {
        arr26.push(arr25[i + 1]);
    }
}
console.log('arr25: ' + arr25);
console.log('arr26: ' + arr26);
console.log('');

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
console.log('6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. ' +
    'Обрахувати середній чек.');
let arr27 = [100, 250, 50, 168, 120, 345, 188];
let sumAllCheck = 0;
for (let m = 0; m < arr27.length; m++) {
    sumAllCheck = sumAllCheck + arr27[m];
}
console.log('Середня вартість одної покупки: ' + sumAllCheck / arr27.length);
console.log('');

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
console.log('7. Створити масив з рандомними значеннями, ' +
    'помножити всі його елементи на 5 та перемістити їх в інший масив.');
console.log('');
let arr28 = [];
for (let i = 0; i < 7; i++) {
    // let a = Math.random()*5 ;
    // arr28.push(a);
    arr28[i] = Math.random() * 5;
}
console.log('arr28:' + arr28);
console.log('');
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
console.log('8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,' +
    ' і якщо елемент є числом - додати його в інший масив.');
console.log('');
let arr29 = [45, 'tiger', 789, true, 'monkey', false, -1.987, 'true', true, 'frog', 479];
let arr30 = [];
console.log('');
for (let element of arr29) {
    if (typeof (element) === 'number') {
        arr30.push(element);
    }
}
console.log('arr29: ' + arr29);
console.log('arr30: ' + arr30);
console.log('');



