// 1) Створити масив з 20 чисел та:
console.log('1.Створити масив з 20 чисел та:');
console.log(' ');

let number = [99, 1, 45, 123, 5, 4, 89, 47, 784, 12, 14, 18, 78, 20, 19, 31, 57, 3, 751, 21];
console.log('number= ' + '[' + number + ']');
console.log(' ');

//     a) відсортувати його від меншого до більшого.
console.log('a. відсортувати його від меншого до більшого. ');
let num = number.sort((a, b) => {
    return a - b;
});
console.log('num= ' + '[' + num + ']');
console.log(' ');

//     b) відсортувати його від більшого до меншого.
console.log(' b) відсортувати його від більшого до меншого. ');
let num2 = number.sort((a, b) => {
    return b - a;
});
console.log('num2= ' + '[' + num2 + '] ');
console.log(' ');

//     c.Відфільтрувати числа які є кратними 3.
console.log('c.Відфільтрувати числа які є кратними 3. ');
let num3 = number.filter(value => {
    if (value % 3 === 0) {
        return true
    }
});
console.log('num3= ' + '[' + num3 + '] ');
console.log(' ');

// d. Відфільтрувати числа які є більшими за 10.
console.log('d. Відфільтрувати числа які є більшими за 10. ');
let num4 = number.filter(value => {
    if (value > 10) {
        return true;
    }
});
console.log('num4= ' + '[' + num4 + ']');
console.log(' ');

// e. Проітерувати його forEach та вивести кожен елмент за допомогою document.write
console.log('e. Проітерувати його forEach та вивести кожен елмент за допомогою document.write ');
number.forEach(value => {
    document.write(value + ' ');
});
console.log(' ');

// f. За допомогою map збільшити кожен елемент в масиві в три рази.
console.log('f. За допомогою map збільшити кожен елемент в масиві в три рази. ');

let numMap = number.map(value => value * 3);
console.log('numMap= ' + '[' + numMap + ']');
console.log(' ');

//     g. Порахувати загальну суму всіх елементів у масиві (reduce)
console.log('  g. Порахувати загальну суму всіх елементів у масиві (reduce)');
let numSum = number.reduce((acc, currentValue) => acc + currentValue);
console.log('numSum= ' + '[' + numSum + '] ');
console.log(' ');

// 2. Створити масив з 20 стрічок та:
console.log('2. Створити масив з 20 стрічок та: ');
let str = ['Dima', 'Tania', 'Andrey', 'Stepan', 'Ivan', 'Igor', 'Kolya', 'Nika', 'Lina', 'Orest', 'Polina', 'Kostya', 'Rita', 'Valerii', 'Archi', 'Anton', 'Olga', 'Feliks', 'Iya', 'Margarita']
console.log('str= ' + '[' + str + ']');
console.log(' ');

//     a. Відсортувати його в алфавітному порядку
console.log(' a. Відсортувати його в алфавітному порядку ');
let str1 = str.sort((a, b) => {
    if (a > b) {
        return 1;
    } else {
        return -1;
    }
})
console.log('str1= ' + '[' + str1 + ']');
console.log(' ');

// b. Відсортувати в зворотньому порядку
console.log('b. Відсортувати в зворотньому порядку ');
let str2 = str.sort((a, b) => {
    if (a < b) {
        return 1;
    } else {
        return -1;
    }
})
console.log('str2= ' + '[' + str2 + ']');
console.log(' ');

// c. Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
console.log('c. Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter) ');
let str3 = str.filter(value => {
    return value.length > 4
})
console.log('str3= ' + '[' + str3 + ']');
console.log(' ');

// d. Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
console.log('  d. Змінити кожне слово в масиві додавши на початок "Sam says *ваше слово*" ');
console.log('Дано масив : ');
console.log('str= ' + '[' + str + ']');
str.forEach((value, index) => {
    str[index] = 'Same says ' + value;
})
console.log(' Результат:');
console.log('str= ' + '[' + str + ']');
console.log(' ');

// 3. Все робити тільки за допомогою методів масивів!
console.log('3. Все робити тільки за допомогою методів масивів! ');
console.log('Дано масив : ');
console.log(' ');

//     Дано масив :
const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];

for (const usersElement of users) {
    console.log(usersElement);

}
console.log(' ');

// a. відсортувати його за  віком (зростання , а потім окремо спадання)
console.log(' a. відсортувати його за  віком (зростання , а потім окремо спадання)');
console.log('Дано масив : ');
console.log(' ');
let users1 = users.sort((a, b) => {
    if (a.age > b.age) {
        return 1;
    } else {
        return -1;
    }
});
console.log('Результат сортування масива за зростанням віку :')
for (const user1Element of users1) {
    console.log(user1Element);
}

console.log(' ');
let users2 = users.sort((a, b) => {
    if (a.age < b.age) {
        return 1;
    } else {
        return -1;
    }
});
console.log('Результат сортування масива за спаданням віку :')
for (const user2Element of users2) {
    console.log(user2Element);
}
console.log(' ');

// b. відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
console.log(' b. відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання) ');
console.log(' ');

let users3 = users.sort((a, b) => {
    if (a.name.length > b.name.length) {
        return 1;
    } else {
        return -1;
    }
});
console.log('Результат сортування масива за кількістю знаків в імені  (зростання) :')
for (const user3Element of users3) {
    console.log(user3Element);
}
console.log(' ');

let users4 = users.sort((a, b) => {
    if (a.name.length < b.name.length) {
        return 1;
    } else {
        return -1;
    }
});
console.log('Результат сортування масива за кількістю знаків в імені  (спадання) :')
for (const user4Element of users4) {
    console.log(user4Element);
}
console.log(' ');

// c. пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
console.log('c. пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), ');
console.log(' ');

console.log('users')
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}
console.log(' ');

console.log('Результат: ')
console.log(' usersNew1 :');
let usersNew = [];
for (let i = 0; i < users.length; i++) {
    usersNew[i] = users[i];
    usersNew[i].id = parseInt(Math.random() * 100);
}
for (let i = 0; i < usersNew.length; i++) {
    console.log(usersNew[i]);
}

// та зберегти це в новий масив (первинний масив залишиться без змін)
//d. відсортувати його за індентифікатором
console.log(' ');
console.log(' та зберегти це в новий масив (первинний масив залишиться без змін)');
console.log('d. відсортувати його за індентифікатором ');
console.log(' ');


let usersNew2 = usersNew.slice();
usersNew2.sort((a, b) => {
    if (a.id > b.id) {
        return 1;
    } else {
        return -1;
    }
});
console.log('usersNew2: ');
for (const userNew2Item of usersNew2) {
    console.log(userNew2Item);

}
console.log(' ');


// e. Всі хто одружений мають попасти у новий масив та отримати квартиру (reduce)

console.log('  e. Всі хто одружений мають попасти у новий масив та отримати квартиру (reduce)');
console.log(' ');


let usersNew3 = usersNew2.reduce((acc, value) => {
    if (value.isMarried === true) {
        value.flat = true;
        acc.push(value);
    }
    return acc;
}, [])
console.log('usersNew3: ');
for (const userNew3Item of usersNew3) {
    console.log(userNew3Item);

}

console.log(' ');




//
// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// const cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];
//
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв
//
//
// - взяти наступний массив
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
//
// -- Відсортувати їх по ID
// -- Відсортувати їх по ID в зворотньому порядку
// -- Відсортувати по віку
// -- Відсортувати по віку в зворотньому порядку
// -- Відсорутвати по імені
// -- Відсорутвати по назві вулиці
// -- Відсорутвати по номеру будинку
// -- Залигити тільки тих, хто молодший ніж 30 (filter)
// -- Залишити тільки одружених
// -- Залишити тільки одружених, які молодні за 30
// -- Залишити лише тих, в кого парні номери будинків.
// -- Порахувати загальний вік всіх людей. (reduce)
// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
//
//
// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//
// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.