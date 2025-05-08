// const customer = {
//   username: 'Jacob',
//   sayHello() {
//     console.log(`Hello, ${this.username}!`);
//   },
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello.bind(customer);

// greet(); // "Hello, Jacob!"

// 'use strict';

// const library = {
//   books: 1923,
//   logBookCount() {
//     console.log(this.books);
//   },
// };

// function showBooks(callback) {
//   callback();
// }

// showBooks(library.logBookCount.bind(library));

// Під час виклику методу hotel.showThis() стрілочна функція foo() викликається в глобальному контексті без об'єкта, але значення this усередині неї посилається на контекст методу showThis, тобто об'єкт hotel. Це тому, що вона була оголошена всередині методу showThis, і в момент її оголошення this запам'ятовує посилання на батьківський контекст. Інакше кажучи, стрілки запам'ятовують контекст під час оголошення з батьківської області видимості.

// Можливо, це не часто використовується на практиці. Але такі кейси досить типові для співбесіди.
// const hotel = {
//   username: 'Resort hotel',
//   showThis() {
//     const foo = () => {
//       console.log('this in foo: ', this);
//     };

//     foo();
//     console.log('this in showThis: ', this);
//   },
// };

// hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}

// Крок 1

// Це стрілочна функція?

// Якщо відповідь Так, значення this те саме, що у this у зовнішній області видимості
// Якщо відповідь Ні, переходь на Крок 2

// Крок 2

// Чи використовуються методи call, apply або bind?

// Якщо відповідь Так, значення this — це той самий об’єкт, що передали при їх виклику
// Якщо відповідь Ні, переходь на Крок 3

// Крок 3

// Функція викликається як метод об’єкта object.method?

// Якщо відповідь Так, значення this — це об’єкт ліворуч від крапки
// Якщо відповідь Ні, переходь на Крок 4

// Крок 4

// Скрипт виконується в суворому режимі?

// Якщо відповідь Так, значення this — undefined
// Якщо відповідь Ні, значення this — window

// Збережи собі цю схему, щоб швидко згадати алгоритм визначення this

// const objB = {
//   b: 'objB prop',
// };

// const objA = Object.create(objB);
// objA.a = 'objA prop';

// console.log(objA);
// const object = {
//   message: 'Hello, World',
//   getMessage() {
//     const message = 'Hello, Earth';
//     return this.message;
//   },
// };
// console.log(object.getMessage());

// class User {
//   constructor(name, email) {
//     console.log(name, email);
//   }
// }

// const mango = new User('Mango', 'mango@mail.com'); // "Mango mango@mail.com"
// console.log(mango); // {}

//
// const user = { name: 'Darina', secondName: 'Bigos' };

// function foo(city) {
//   return `${this.name} is from ${city}`;
// }

// console.log(foo.call(user, 'Kharkiv'));
// console.log(foo.bind(user, 'Kharkiv'));
