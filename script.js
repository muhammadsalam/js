function log(){
    for(let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}

// const arr = [1, 2, 3, 4, 5]

// arr.push('new') // добавление в конец массива

// arr.pop('new2') // удаление последнего элемента в массиве

// arr.shift('new3') // удаление первого элемента

// arr.unshift('new4') // добавление в начало массива

// arr.reverse() // перевернуть массив

// const arr2 = arr.concat(['new5', 'new6', 'new7']) // объединение массивов

// console.log(arr2, arr)



const fruits = ['banana', 'orange', 'apple', 'kiwi', 'cherry'];

// const result = fruits.slice(3); // вырезает элементы начиная с числа

// const result2 = fruits.slice(2, 5) // вырезает элементы начиная с 1 числа до 2 ( apple kiwi cherry )

// const result3 = fruits.splice(2, 1) // удаляет элементы начиная с первого числа ( второе num - количество после первого )

// console.log(fruits, result3)


// fruits.indexOf('apple') // выводит индекс элемента 



// задача

// const str = 'Меня зовут Иоган Моцарт';

// str = str.split(' ');

// console.log(str);



// const obj = {
//   a: 12,
//   b: 13,
//   c: 14
// }

// const array = ['banana', 'orange', 'apple'];

// for(let key in obj){ // цикл чтобы перебрать свойства объекта
//   console.log(key, obj[key])
// }

// for(let key of array){ // цикл чтобы перебрать массив элементов
//   console.log(key, array[key])
// }

// array.forEach((item, i, array) => { // цикл чтобы перебирать массив
//   console.log(item, i, array)
// });



// задача2

// const arr = [true, false, false, false, true, true], res = arr;

// arr.forEach((item, i) => {
//   if(!item) res.splice(i, 1)
//   console.log(res, i)
// })



// const newFruits = fruits.map(item => { // перебирает массив и меняет его
//   return 'this fruit is ' + item
// });

// console.log(newFruits, fruits)



// Задача 3

// const arr1 = [1,2,3,4,5],
//       arr2 = arr1.map(e => {return +e * 2})

// console.log(arr2)



// const arr = [1,2,3,4,5]

// const filterArr = arr.filter(item => {
//   return item % 2 != 0
// });

// console.log(filterArr)



// Задача 4 решил

// const lp = prompt('Введите языки программирования через запятую'),
// noPiton = lp.split(',').filter(item => {
//   return item != 'питон'
// }).reverse();

// console.log(noPiton)



// Задача 5
// let arr = [], str;

// function that(key, prop) {
//   arr[--key] = 0;
//   for(let item of arr){
//     console.log(arr.indexOf(item))
//   }
//   console.log(arr)
// }

// that(5, 'свойство')

// let date = new Date();
// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDay())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())

// el = document.querySelector('.block-1');
// console.log(el)
// window.addEventListener('mousemove', function(e) {
//     el.style.top = e.pageY + 'px'
//     el.style.left = e.pageX + 'px'
// });


// ********КЛАССЫ***********

// const animal = {
//     name: 'animal',
//     age: 5,
//     hasTail: true
// }

// console.log(animal)


// - классы должны начинаться с заглавной буквы

// class Animal {

//     // можно также реализовывать статические методы или переменные ( то есть те, которые доступны у самого класса, а не объектам с этим классом )

//     static type = 'animal';

//     // инициализация данных, которые отправляем с помощью метода

//     constructor(options) { // options - все принимающиеся данные

//         // this. - указывается, потому что выдаётся как конструктору внутри чего-либо

//         this.name = options.name;
//         this.age = options.age;
//         this.hasTail = options.hasTail;

//     }
    
//     // в классах также можно передавать для каждого нового объекта метод    
//     // в каждом объекте будет доступен этот метод

//     voice() {
//         console.log('i am animal')
//     }

// }

// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// })

// console.log(animal);

// // в классах также можно делать наследование

// class Cat extends Animal { // extends означает, что Cat наследуется от класса Animal

//     // в этом классе мы также можем создать статические переменные и методы
//     // с этим методом можно взаимодействовать только через Cat.all()

//     static all() {
//         for(let key of document.querySelectorAll('.block')){
//             console.log(key)
//         }
//     }

//     // допустим если цвет мы хотим присваивать только для кошек

//     constructor(options){
//         super(options) // метод, который нужно вызывать, чтобы у наследника были те же ключи
//         this.color = options.color
//     }

//     voice() { // мы также можем переписать методы.

//         // бывают случаи, что нам нужно где-то вызывать что-то от родительского класса,
//         // для этого мы просто обращаемся так:

//         super.voice()

//         // теперь cat.voice() вызывает и код родительского метода и код ниже

//         console.log('i\`m ' + this.name)
//     }

//     // геттеры и сеттеры
    
//     // геттер ( получить ) выполняет функцию получения какой-либо информации
    
//     get ageInfo() { 
//         return this.age * 4
//     }

//     // сеттер ( установить ) выполняет функцию записи информации

//     set ageInfo(newAge) {
//         this.age = newAge;
//     }

//     // setter используется с помощью =
//     // например, при обращении к ageInfo: cat.ageInfo = 9, age изменится на 9.
//     // а getter вызывается как обычный метод cat.ageInfo
//     // им обеим можно прописывать одинаковые названия
// }

// const cat = new Cat({
//     name: 'гав',
//     age: 3,
//     hasTail: true,
// })

// console.log(cat)



// ******** regex (регулярные выражения) **********

// регулярные выражения - это способ поиска шаблона в тексте.

// let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem id impedit eaque perspiciatis dolore eum assumenda neque aliquid? Repellendus, tenetur!'

// console.log(/Lorem (ips(um) dolor (sit))/gm)

// для создания регулярного выражения существует 2 способа -
// 1. regexp = new RegExp("шаблон", "флаги");

// 2. regexp = /шаблон/; - без флагов
// 2. regexp = /шаблон/gmi; - с флагами gmi

// Флаги.

// регулярные выражения могут иметь флаги, которые влияют на поиск. 
// в js их всего 6:

// 1. i
// С этим флагом поиск не зависит от регистра: нет разницы между А и а

// 2. g
// С этим флагом поиск ищет все совпадения, без него - только первое

// 3. m
// Многострочный режим (пройдём чуть позже)

// 4. s
// Включает режим <<dotall>>, при котором точка "." может соответствовать символу перевода строки \n

// 5. u
// Включает полную поддержку юникода. Флаг разрешает корректную обработку суррогатных пар

// 6. y
// Режим поиска на конкретной позиции в тексте 


// Использование регулярных выражения интегрировано в методы строк.


// Метод str.match(regexp) для строки str возвращает совпадения с регулярным выражением regexp

// let str = "Любо, братцы, любо!";

// console.table(str.match(/любо/gi));

// console.log("Текст".match(/лол/gi) || [])
//возвращает массив если не будет совпадений (bool null is false)


// Замена str.replace

// метод str.replace(regexp, replacement) заменяет совпадения с regexp в строке str на replacement

// let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex porro et asperiores placeat labore odio nesciunt ut quasi, rerum suscipit?"

// console.log(text.replace(/o/ig, '21'))


// в строке замены replacement мы можем использовать специальные символы для вставки фрагментов совпадения:

// console.log(text.replace(/e/g, '_$&_'))
// // $& - вставляет всё найденное совпадение

// console.log(text.replace(/e/g, '_$`_'))
// // &` вставляет часть строки до совпадения

// console.log(text.replace(/e/g, '_$\'_'))
// // $' вставляет часть строки после совпадения
// // слеш до кавычки $\' используется потому что кавычка посчитается как закрывающая

// 4. $n

// 5. $<name>

// 6. $$ вставляет символ $

// console.log("Люблю HTML".replace(/./gi, "_$&_"))


// Проверка: regexp.test

// Метод RegExp.test(str) проверяет есть ли хоть одно совпадение. Если да - возвращает true, иначе false

// console.log(/lorem/i.test(text))



// Символьные классы

// Символьный класс - это специальное обозначение, которое соответствует любому символу из определённого набора.

// --- класс <<цифра>> - \d

// let number = "+7 (989)-872-03-07"

// console.log(number.match(/\d/g))

// цифра - \d
// пробел - \s
// табуляция - \t
// перевод строки \n
// другие редкие пробельные символы, обозначаемые как \v, \f, \r
// слово \w - буквы латинского алфавита, цифра или подчёркивание _. Нелатинские цифры не являются частью \w

// точка - любой символ "."

// \p{} - искать символ с заданным свойством
// у каждого символа есть свои свойства

// \p{Letter} OR \p{L} - искать символ какого-то алфавита.

// Для таких регулярных выражений обязательно использовать флаг u

// let str = "A ბ ㄱ";

// log(str.match(/\p{L}/gu))

// Буквы L:
//     - в нижнем регистре Ll
//     - модификаторы Lm
//     - заглавные буквы Lt
//     - в верхнем регистре Lu
//     - прочие Lo

// Числа N:
//     - десятичная цифра Nd
//     - цифры обозначаемые буквам (римские) Nl
//     - прочие No

// Знаки пунктуации P:
//     - соединители Pc
//     - тире Pd
//     - открывающие кавычки Pi
//     - закрывающие кавычки Pf
//     - открывающие скобки Ps
//     - закрывающие скобки Pe
//     - прочее Po

// Отметки M (например, акценты)
//     - двоеточия Mc
//     - вложения Me
//     - апострофы Mn

// Символы S
//     - валюты Sc
//     - модификаторы Sk
//     - математические Sm
//     - прочее So

// Разделители Z
//     - линия Zl
//     - параграф Zp
//     - пробле Zs

// Прочие C
//     - контрольные Cc
//     - форматирование Cf
//     - не назначенные Cn
//     - для приватного использования Co
//     - суррогаты Cs


// начало строки - ^
// конец стркои - $

// let str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente \n delectus repellendus in sequi sint asperiores dicta expedita ratione doloribus quaerat.';

// log(/^ipsum/.test(str)); //false потому что текст начинается с Lorem

// log(/Lorem$/.test(str)); //false потому что текст заканчивается на quaerat.

// log(/^Lorem/.test(str)) // true потому что текст начинается на Lorem

// Задача
// let str = 'Завтрак в 09:00 в комнате 123:456.';

// let regexp = /\b\d\d:\d\d\b/gi;

// console.log(str.match(regexp))


// Другие специальныек символы:
//     [ ]
//     \
//     ^
//     $
//     .
//     |
//     ?
//     *
//     +
//     ( )

// let text = 'Lorem ipsum 2.1 2a2 dolor sit amet consectetur adipisicing elit. Possimus, velit sint temporibus ab rerum minima.'

// [] - любой из них
// [0-9] - любой символ от 0 до 9
// [a-yA-Y] - любой символ от a до y и от A до Y
// ^[a-o] - символ от a до o в начале строки
// ^[^a-o] - все символы кроме а-о в начале строки

// log(text.match(/[0-9].[0-9]/gmi))

// \w{3} - искать символ \w 3 раза
// log(text.match(/\w{3}/gmi))

// \d{4, 7} - искать символ \d от 4х до 7
// log(text.match(/\w{3,6}/gmi))

// \s* - искать символ \s от 0 и выше
// log(text.match(/\w*/gmi))

// \w+ - искать символ \w от 1 и выше
// log(text.match(/\w+/gmi))

// let nums = "hgasd@maw.s dawjdk2@fda.addw dla2d1.fd12@adk.da"

// console.log(nums.match(/\w+@\w+\.\w+/gi))

// **** ПРОМИСЫ ****
const myPromise = new Promise((resolve, reject) => {
    // Выполнение асинхронных действий

    // Внутри этой функции нужно в результате вызвать одну из функций resolve или reject
})