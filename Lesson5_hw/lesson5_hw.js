//1. Реалізовуємо свій компютерний магазин.
console.log('1.Реалізовуємо свій компютерний магазин. ');
console.log('Необхідно реалізувати базовий клас комп`ютера. Який має лише параметри: ');
console.log('Оперативна память. ');
console.log('Потужність процесора. (цифра від 0 до 1000)');
console.log('Назва. ');
console.log('   В кожного компютера має бути метод включання. ');
console.log(' ');
// ===
// Необхідно реалізувати базовий клас комп`ютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.
class Computer {
    constructor(ram, powerPC, model) {
        this.ram = ram;
        this.powerCPU = powerPC;
        this.model = model;
    }

    onPC(str) {
        if (str === 'on') {
            console.log('Комп`ютер включений');
            return true;
        }
        if (str === 'of') {
            console.log('Комп`ютер виключений');
            return false;
        }
    }

}

let computer = new Computer(8, 600, 'Lenovo');
console.log(computer);
computer.onPC('on');
computer.onPC('of');

console.log(' ');
// ===
// 1.1. Від базового компютера треба реалізувати ноутбук.
//     Він має нову властивість дюймах монітора.
console.log('1.1. Від базового компютера треба реалізувати ноутбук. ');
console.log(' Він має нову властивість дюймах монітора.');

//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
console.log(' У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку) ');

class Laptop extends Computer {
    constructor(ram, powerCPU, model, sizeLCD) {
        super(ram, powerCPU, model);
        this.sizeLCD = sizeLCD;
        this.powerBat = this.powerCPU / (this.sizeLCD * this.ram);
    }
}

let laptop1 = new Laptop(16, 600, 'Asus', 14);
console.log(laptop1);
laptop1.onPC('on');
console.log('Розмір дисплея:' + laptop1.sizeLCD + ' дюймів');
console.log('Розмір ОЗУ: ' + laptop1.ram + ' Gb');
console.log('Модель: ' + laptop1.model);
console.log('Потужність: ' + laptop1.powerCPU + ' W');
console.log('Час роботи батареї (powerBat) laptop1: ' + laptop1.powerBat);

let laptop2 = new Laptop(32, 800, 'Acer', 15.6);
console.log(laptop2);
laptop2.onPC('on');
console.log('Час роботи батареї (powerBat) laptop2: ' + laptop2.powerBat);
console.log(' ');

// ===
// 1.2. Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримає менше ніж 4 години.
console.log('1.2. Від ноутбука потрібно зробити ультрабук. ');
console.log(' Він має нову змінну ваги. ');
console.log('При включенні ультрабуку має видаватися помилка, якщо вага більша за 2кг та батарея тримаж менше ніж 4 години. ');
console.log(' ');

class Ultrabook extends Laptop {
    constructor(ram, powerCPU, model, sizeLCD, weight) {
        super(ram, powerCPU, model, sizeLCD);
        this.weight = weight;
    }
}

let ultrabook = new Ultrabook(16, 800, 'Dell', 14, 3);
console.log(ultrabook);
let on_of = ultrabook.onPC('on');
console.log('Вага: ' + ultrabook.weight);
console.log('Батарея тримає: ' + ultrabook.powerBat);
if (on_of) {
    if ((ultrabook.weight > 2) && (ultrabook.powerBat < 4))

        console.log("Warning! Error!")
} else {
    console.log("Ком`пютер виключений");
}
console.log(' ');

// ===
// 1.3. Від базого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / оперативку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//
console.log('1.3. Від базого класу потрібно створити базовий ПК. ');
console.log('В нього має бути новий метод запуску ігор. ');
console.log('Кількість FPS визначається як потужність / оперативку. ');
console.log(' Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP` ');
console.log(' ');

class BasicPC extends Computer {
    constructor(ram, powerCPU, model) {
        super(ram, powerCPU, model);

    }

    gameStart(game_name) {
        let fps = this.powerCPU / this.ram;
        console.log('You are playing' + ' ' + `${game_name}` + ' ' + 'with' + ' ' + `${fps}` + ' ' + 'fsp')
    }

    upgradeRam() {
        this.ram = this.ram * 2;
    }

    upgradePowerPC() {
        this.powerCPU = this.powerCPU * 1.1;
    }
}

let basicPC = new BasicPC(8, 200
    , 'IBM');
console.log(basicPC);
basicPC.onPC('on');
basicPC.gameStart('Minecraft');

console.log(' ');

//1.4 Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характериcтик мають бути свої методи. Міняти змінну "в лоб" заборонено.
console.log('1.4 Компютер можна апгрейдити. ');
console.log('Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна. ');
console.log('Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна. ');
console.log('Для зміни характериcтик мають бути свої методи. Міняти змінну "в лоб" заборонено.');
console.log(' ');

basicPC.upgradeRam();
basicPC.upgradePowerPC();
basicPC.upgradePowerPC();
basicPC.upgradePowerPC();
basicPC.upgradePowerPC();
basicPC.upgradePowerPC();
basicPC.upgradePowerPC();
basicPC.upgradePowerPC();
basicPC.upgradePowerPC();
basicPC.upgradePowerPC();

console.log(basicPC);
basicPC.gameStart('Control');

console.log(' ');
// ===
// 1.5.Від базового ПК необхідно зробити ігровий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.
console.log('1.5.Від базового ПК необхідно зробити ігровий ПК. ');
console.log('Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК. ');
console.log('При запуску однієї гри потужніть процесора має падати на 0.1%. ');
console.log('Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль) ');
console.log('що на цьому відрі ігри не запускаються. ');

class GamePC extends BasicPC {
    constructor(ram, powerCPU, model) {
        super(ram, powerCPU, model);
        this.powerCPU = powerCPU * 2;
    }

    gameStart(game_name) {
        let fps = this.powerCPU / this.ram;
        console.log('You are playing' + ' ' + `${game_name}` + ' ' + 'with' + ' ' + `${fps}` + ' ' + 'fsp')
        this.powerCPU = this.powerCPU * 0.9;
        console.log('Потужність процесора після запуску гри = ' + this.powerCPU);
    }
}

let gamePC = new GamePC(64, 500, 'noName');
console.log(gamePC);
gamePC.onPC('on');
gamePC.gameStart('Striker');
if (gamePC.powerCPU < 500 && gamePC.ram < 8) {
    console.log('Компютер не придатний для гри ');
} else {
    console.log('Good luck');
}
console.log(' ');
console.log('_____________________________________________ ');
//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
console.log('РОБОТА В АУДИТОРІЇ ');
console.log('_____________________________________________ ');
console.log('2.2. Створити функцію конструктор яка дозволяє створювати об"єкти car, з властивостями модель, виробник, рік випуску, ');
console.log(' максимальна швидкість, об\"єм двигуна. додати в об"єкт функції:');
// -2. Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// console.log('2. Створити функцію конструктор яка дозволяє створювати об\'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об"єм двигуна. додати в об"єкт функції: ');
// console.log(' ');
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
function Car(production, model, year, maxSpeed, capacity) {
    this.production = production;
    this.model = model;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.capacity = capacity;

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} за годину`)
    }
    this.info = function () {

        console.log(`
    production:${this.production}
    model:${this.model},
    year:${this.year},
    maxSpeed:${this.maxSpeed},
    capacity:${this.capacity}`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;

    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }

}

let car = new Car('Sckoda', 'Fabia', 2012, 120, 1.4);
car.drive();
car.info();
car.increaseMaxSpeed(30);
car.info();
car.changeYear('2021');
car.info();
car.addDriver({name: 'Vovik', age: 43});
console.log(car.driver);
console.log(' ');

//
// - 3.Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
console.log('3.Створити клас який дозволяє створювати об"єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об"єм двигуна. додати в об"єкт функції: ');
console.log(' ');
console.log(' ');
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
class Car2 {
    constructor(production, model, year, maxSpeed, capacity,) {
        this.production = production;
        this.model = model;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.capacity = capacity;
    }

    drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} за годину`)
    }

    info() {

        console.log(`
    production:${this.production}
    model:${this.model},
    year:${this.year},
    maxSpeed:${this.maxSpeed},
    capacity:${this.capacity}`)
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;

    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let car2 = new Car('Daewoo', 'Lanos', 2012, 130, 1.5);
car2.drive();
car2.info();
car2.increaseMaxSpeed(30);
car2.info();
car2.changeYear('2018');
car2.info();
car2.addDriver({name: 'Dovik', age: 48});
console.log(car2.driver);
console.log(' ');

//
// -4.створити класс попелюшка з полями ім'я, вік, розмір ноги
console.log('4.створити класс попелюшка з полями ім"я, вік, розмір ноги ');
console.log(' ');

class Cinderella {
    constructor(name, age, sizeFoot) {
        this.name = name;
        this.age = age;
        this.sizeFoot = sizeFoot;
    }
}

console.log(' ');
console.log(' - Створити 10 попелюшок , покласти їх в масив');
// --Створити 10 попелюшок , покласти їх в масив
let cinderellas = [
    new Cinderella('Lora', 19, 19),
    new Cinderella('Lera', 20, 25),
    new Cinderella('Liza', 21, 26),
    new Cinderella('Luiza', 22, 15),
    new Cinderella('Luna', 45, 27),
    new Cinderella('Lina', 84, 17),
    new Cinderella('Lida', 13, 22),
    new Cinderella('Lusya', 28, 21),
    new Cinderella('Lesya', 31, 19),
    new Cinderella('Lama', 25, 29),
];
console.log(cinderellas);

//
// // --Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
 console.log('- Створити об"єкт класу "принц" за допомоги класу який має поля ім"я, вік, туфелька яку він знайшов. ');

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let prince = new Prince('Ivan', 31, 15);
console.log(prince);


// -- за допомогою циклу знайти, яка попелюшка повинна бути з принцом
console.log('- за допомогою циклу знайти, яка попелюшка повинна бути з принцом ');
console.log(' ');


for (let i = 0; i < cinderellas.length; i++) {
    if (prince.shoe === cinderellas[i].sizeFoot) {
        console.log(`Принц ${prince.name} знайшов свою Попелюшку. Імя принцеси:  ${cinderellas[i].name} `);
    }
}
console.log(' ');


// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
console.log('- Cтворити функцію конструктор попелюшка з полями ім"я, вік, розмір ноги');
console.log(' ');

function Cinderella2(name, age, sizeFoot) {
    this.name = name;
    this.age = age;
    this.sizeFoot = sizeFoot;
}

let cinderellas2 = [
    new Cinderella('Lora', 19, 19),
    new Cinderella('Lera', 20, 25),
    new Cinderella('Liza', 21, 26),
    new Cinderella('Luiza', 22, 15),
    new Cinderella('Luna', 45, 27),
    new Cinderella('Lina', 84, 17),
    new Cinderella('Lida', 13, 22),
    new Cinderella('Lusya', 28, 21),
    new Cinderella('Lesya', 31, 19),
    new Cinderella('Lama', 25, 29),
];
console.log(cinderellas2);

function Prince2 (name, age, shoe) {
    this.name = name;
    this.age = age;
    this.shoe = shoe;

    this.seachCinderella = function(array){
        for (let i = 0; i < array.length; i++) {
            if (prince2.shoe === array[i].sizeFoot) {
                console.log(`Принц ${prince2.name} знайшов свою Попелюшку. Імя принцеси:  ${array[i].name} `);
            }
        }
    }
}

let prince2 = new Prince2('Igor', 35, 27);
console.log(prince2);
prince2.seachCinderella(cinderellas2);

//
// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
// console.log('Додатково ');
// console.log(' ');

// -  Створити функцію конструктор для об'єкту який описує теги
// console.log('5.Створити функцію конструктор для об"єкту який описує теги ');
// console.log(' ');
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
// -  Створити класс  для об'єкту який описує теги
// console.log('6.Створити класс  для об"єкту який описує теги ');
// console.log(' ');
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//
// console.log('7.Створити об"єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об"єм двигуна. додати в об\'єкт функції: ');
// console.log(' ');
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car