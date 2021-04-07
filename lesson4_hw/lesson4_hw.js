// 1) створити функцію яка приймає масив та виводить його
console.log('1) створити функцію яка приймає масив та виводить його ');
console.log(' ');

function arrFunc(arr) {
    console.log('Масив: ' + '[' + arr + ']');
}

let arrNum = [1, 7, 9, 23, 678, -45, 234, 876,];
arrFunc(arrNum);
console.log(' ');


// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
console.log('2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію. ');
console.log(' ');

function arrFunc1() {
    let randomArrNum = [];
    for (let i = 0; i < 10; i++) {
        randomArrNum[i] = parseInt(Math.random() * 100);
    }
    return arrFunc(randomArrNum);
}

arrFunc1();
console.log(' ');

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
console.log('3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!) ');
console.log(' ');

function minNum(n1, n2, n3) {
    console.log('Функція приймає числа: ' + n1 + ',' + n2 + ',' + n3);
    let minNumber = n1;
    if (minNumber > n2) {
        minNumber = n2
    }
    if (minNumber > n3) {
        minNumber = n3
    }
    return minNumber;
}

console.log('Найменше число: ' + minNum(5, 12, 1));
console.log(' ');

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
console.log(' 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)');
console.log(' ');

function maxNum(n1, n2, n3) {
    console.log('Функція приймає числа: ' + n1 + ',' + n2 + ',' + n3);
    let maxNumber = n1;
    if (maxNumber < n2) {
        maxNumber = n2
    }
    if (maxNumber < n3) {
        maxNumber = n3
    }
    return maxNumber;
}

console.log('Найбільше число: ' + maxNum(9, 1, 17));
console.log(' ');
console.log(' ');

// 5) створити функцію яка повертає найбільше число з масиву
console.log('5) створити функцію яка повертає найбільше число з масиву ');
console.log(' ');

function maxNumArr() {
    //створив масив з 10 рандомних чисел
    let randomArrNum1 = [];
    for (let i = 0; i < 10; i++) {
        randomArrNum1[i] = parseInt(Math.random() * 100);
    }
    let maxNum1 = randomArrNum1[0];
    console.log('Дано масив: ' + '[' + randomArrNum1 + ']')
    for (let i = 0; i < randomArrNum1.length; i++) {
        if (randomArrNum1[i] > maxNum1) {
            maxNum1 = randomArrNum1[i];
        }
    }
    return maxNum1;
}

console.log('Найбільше  число  масиву: ' + maxNumArr());
console.log(' ');

// 6) створити функцію яка повертає найменьше число з масиву
console.log('6) створити функцію яка повертає найменьше число з масиву ');
console.log(' ');

function minNumArr() {
    //створив масив з 10 рандомних чисел
    let randomArrNum1 = [];
    for (let i = 0; i < 10; i++) {
        randomArrNum1[i] = parseInt(Math.random() * 100);
    }
    let minNum1 = randomArrNum1[0];
    console.log('Дано масив: ' + '[' + randomArrNum1 + ']')
    for (let i = 0; i < randomArrNum1.length; i++) {
        if (randomArrNum1[i] < minNum1) {
            minNum1 = randomArrNum1[i];
        }
    }
    return minNum1;
}

console.log('Найменше  число  масиву: ' + minNumArr());
console.log(' ');

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
console.log('  7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.');
console.log(' ');

function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

//створив масив з  рандомних чисел
let arrNum1 = [];
for (let i = 0; i < 5; i++) {
    arrNum1[i] = parseInt(Math.random() * 10);
}
console.log('Дано масив: ' + '[' + arrNum1 + ']')
console.log('Сумма значень елементів масиву: ' + sumArr(arrNum1));
console.log(' ');

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
console.log(' 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.');
console.log(' ');

function midSumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] / arr.length;
    }
    return sum;
}

//створив масив з  рандомних чисел
let arrNum2 = [];
for (let i = 0; i < 5; i++) {
    arrNum2[i] = parseInt(Math.random() * 10);
}
console.log('Дано масив: ' + '[' + arrNum2 + ']')
console.log('Середнє арифметичне  значень елементів масиву: ' + midSumArr(arrNum2));
console.log(' ');


// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
console.log('9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів ');
console.log(' ');

function arrKeysObj(arr) {
    let keys = [];
    for (let i = 0; i < arr.length; i++) {
        keys.push(Object.keys(arr[i]));
    }
    return keys;
}

let arrObj = [{name: 'Orest', age: 31, jobs: 'developer', company: 'Logitech'},
    {model: 'Lanos', color: 'silver'}, {bred: 'dog', name: 'Bob', color: 'black', age: 3.5}];

console.log('Масив ключів масиву всіх об`єктів: ' + '[' + arrKeysObj(arrObj) + ']');
console.log('');

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

console.log('10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів ');
console.log(' ');

function arrValuesObj(arr) {
    let values = [];
    for (let i = 0; i < arr.length; i++) {
        values.push(Object.values(arr[i]));
    }
    return values;
}

let arrObj2 = [{name: 'Orest', age: 31, jobs: 'developer', company: 'Logitech'},
    {model: 'Lanos', color: 'silver'}, {bred: 'dog', name: 'Bob', color: 'black', age: 3.5}];

console.log('Масив значень масиву всіх  об`єктів: ' + '[' + arrValuesObj(arrObj2) + ']');
console.log(' ');


// 11) створити функцію  яка складає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

console.log('11) створити функцію  яка складає значення елементів з однаковими індексами  та повертає новий результуючий масив. ');

function sumItemIndex(arr1, arr2) {
    let arrResult = [];
    for (let i = 0; i < arr1.length; i++) {
        arrResult.push(arr1[i] + arr2[i]);
    }
    return arrResult;
}

arrNum3 = [2, 4, 7, 8, 9];
arrNum4 = [5, 7, 12, 7, 12];
console.log('Дано масив 1: ' + '[' + arrNum3 + ']')
console.log('Дано масив 2: ' + '[' + arrNum4 + ']')
console.log('Масив сумм значень елементів масивів  з однаковими  індексами: ' + '[' + sumItemIndex(arrNum3, arrNum4) + ']');
console.log(' ');

//
//
// ============================================================================================
console.log('============================================================================================');
//
// 12 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
console.log('12- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);');
console.log(' ');

function minNumMaxCons(arr3) {
    let minNum2 = arr3[0];
    let maxNum2 = arr3[0];
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] < minNum2) {
            minNum2 = arr3[i];
        }
        if (arr3[i] > maxNum2) {
            maxNum2 = arr3[i];
        }
    }
    console.log('Найбільше число (вивела функція) : ' + maxNum2);
    return minNum2;
}

arrNum5 = [62, 7, 121, 779, 34, 542, 5, 876];
console.log('Дано масив: [' + arrNum5 + ']');
console.log('Найменше  число  масиву (повернула функція): ' + minNumMaxCons(arrNum5));
console.log(' ');

// 13- Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
console.log('13- Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію. ');
console.log('  Що б я міг сам вибрати повернути мені масив ключів чи масив значень. ');
console.log(' ');
let input = prompt('Введіть ,що виводити масив ключів або масив значень (введіть keys або values)');
switch (input) {
    case 'keys': {
        console.log('Ви вибрали вивід масиву ключів.');
        console.log();

        function arrKeysObj(arr) {
            let keys = [];
            for (let i = 0; i < arr.length; i++) {
                keys.push(Object.keys(arr[i]));
            }
            return keys;
        }

        let arrObj = [{name: 'Orest', age: 31, jobs: 'developer', company: 'Logitech'},
            {model: 'Lanos', color: 'silver'}, {bred: 'dog', name: 'Bob', color: 'black', age: 3.5}];

        console.log('Масив ключів масиву всіх об`єктів: ' + '[' + arrKeysObj(arrObj) + ']');
        console.log('');
    }
        break;
    case 'values': {
        console.log('Ви вибрали вивід масиву значень.');
        console.log();

        function arrValuesObj(arr) {
            let values = [];
            for (let i = 0; i < arr.length; i++) {
                values.push(Object.values(arr[i]));
            }
            return values;
        }

        let arrObj2 = [{name: 'Orest', age: 31, jobs: 'developer', company: 'Logitech'},
            {model: 'Lanos', color: 'silver'}, {bred: 'dog', name: 'Bob', color: 'black', age: 3.5}];

        console.log('Масив значень масиву всіх  об`єктів: ' + '[' + arrValuesObj(arrObj2) + ']');
        console.log(' ');
    }
        break;
    default: {
        console.log("Помилка вводу!")
    }

}


console.log('');

// 14- Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// 	  EXAMPLE:
// 	  foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
// 	  foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
// 	  foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
console.log(' 14- Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"');
console.log(' EXAMPLE: ');
console.log('foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ] ');
console.log('foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ] ');
console.log('foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ] ');
console.log('');

function changeArrAndNum(arr5, i) {
    let tmp = 0;
    for (let j = 0; j < arr5.length; j++) {
        if (j === i) {
            tmp = arr5[i];
            arr5[i] = arr5[i + 1];
            arr5[i + 1] = tmp;
        }
    }
    return arr5;
}

foo = [9, 8, 0, 4];
let i = 2;
console.log('Дано масив: [' + foo + ']');
console.log('Число i= ' + i);
console.log('Результат: [' + changeArrAndNum(foo, i) + ']');
console.log('');
//
// 	15- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// 	Двожина масиву від 2 до 100
// 	EXAMPLE:
// 	[1,0,6,0,3] => [1,6,3,0,0]
// 	[0,1,2,3,4] => [1,2,3,4,0]
// 	[0,0,1,0]   => [1,0,0,0]

console.log('15- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень. ');
console.log('Двожина масиву від 2 до 100 ');
console.log('EXAMPLE:');
console.log('[1,0,6,0,3] => [1,6,3,0,0]');
console.log('[0,1,2,3,4] => [1,2,3,4,0]');
console.log('[0,0,1,0]   => [1,0,0,0]');
console.log('');

function carryZero(arr6) {
    let arr7 = [];
    let arr8 = [];
    for (let i = 0; i < arr6.length; i++) {
        if (arr6[i] === 0) {
            arr7.push(arr6[i]);

        } else {
            arr8.push(arr6[i]);

        }

    }
    console.log('arr7:' + arr7);
    console.log('arr8:' + arr8);
    let arr9 = [];
    arr9.concat(arr8, arr7);

    return (arr9.concat(arr8, arr7));
}

arrInput = [];
for (let i = 0; i < 20; i++) {
    arrInput[i] = parseInt(Math.random() * 5);
}
console.log('Дано масив: [' + arrInput + ']');
console.log('Результат- масив: [' + carryZero(arrInput) + ']');

console.log('');

//
// 	16- Дано список імен.
// 	let n1 = '    Harry       Potter      '
// 	let n2 = '    Ron       Whisley      '
// 	let n3 = '    Hermione       Granger      '
// 	Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// 	let n1 = 'Harry Potter'
// 	let n2 = 'Ron Whisley'
// 	let n3 = 'Hermione Granger'

console.log(' 16- Дано список імен.');
console.log('let n1 = "    Harry       Potter      " ');
console.log('let n2 = "    Ron       Whisley      " ');
console.log('let n3 = "    Hermione       Granger      " ');
console.log('let n4=  "    Harry       Potter     the     best     " ');
console.log(' ');

console.log('Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд:');
console.log('let n1 = "Harry Potter" ');
console.log('let n2 = "Ron Whisley" ');
console.log('let n3 = "Hermione Granger" ');
console.log('');

let n1 = "    Harry       Potter         ";
let n2 = "    Ron       Whisley      ";
let n3 = "    Hermione       Granger      ";
let n4 = "    Harry       Potter     the     best     ";

function normStr(str) {
    let string = str.split(' ');
    let arrStr = [];
    for (let i = 0; i < string.length; i++) {
        if (!(string[i] === '')) {
            arrStr.push(string[i]);
        }
    }
    return arrStr.join(' ');
}

console.log('Результат: ');
console.log('n1=' + '"' + normStr(n1) + '"');
console.log('n2=' + '"' + normStr(n2) + '"');
console.log('n3=' + '"' + normStr(n3) + '"');
console.log('n4=' + '"' + normStr(n4) + '"');
console.log(' ');

//
// 	============================================================================================
// console.log('============================================================================================ ');
// //
// //
// // 	// ******************* НАЗАД В МИНУЛЕ *********************** //
// console.log('// ******************* НАЗАД В МИНУЛЕ *********************** ');
// console.log(' ');
// console.log(' ');
// console.log(' ');
// // 	Створити функцію яка :
// console.log(' Створити функцію яка :');
// console.log(' ');
//
// // 	17- Додає в боді блок з текстом "Hello owu"
// console.log('17- Додає в боді блок з текстом "Hello owu" ');
// console.log(' ');
// console.log(' ');
//
// // 	18- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// console.log(' 18- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи');
// console.log(' ');
// console.log(' ');
//
// // 	19- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// console.log('19- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів. ');
// console.log(' ');
// console.log(' ');
//
// // 20	Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// // 	- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// console.log('20\tДля кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці ');
// console.log('- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів. ');
// console.log(' ');
//
// // 	21 Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// console.log('21 Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. ');
// console.log(' ');
// console.log(' ');
//
// // 22	Для кожної властивості створити всередені блока автомоблія свій блок
// console.log('22 Для кожної властивості створити всередені блока автомоблія свій блок ');
// console.log(' ');
// console.log(' ');

// 	// ******************* НАЗАД В МИНУЛЕ *********************** //
//
