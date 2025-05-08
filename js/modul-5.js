// Перебираючі методи масивів

// const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// ункція filterArray(numbers, value) приймає першим параметром масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення другого параметра числа value. Якщо таких значень не буде знайдено, функція повертає порожній масив.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function filterArray(numbers, value) {
//   const count = [];
//   numbers.forEach(function (number) {
//     if (number > value) {
//       count.push(number);
//     }
//   });
//   return count;
// }

// Звичайне оголошення функції
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// Те саме стрілочною функцією
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

// Якщо параметр один, його можна оголошувати без круглих дужок.

// const add = a => {
//   return a + 5;
// };

// Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки.

// const greet = () => {
//   console.log('Hello!');
// };

const add = (a, b, c) => a + b + c;
// console.log(add(3, 1, 1));

// Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };

// const arr = [2, 4, 6];
// const result = arr.filter(el => el * 2);
// console.log(result);

const numbers = [0, 5, 10, 15, 20];

let total = 0;

numbers.forEach(item => (total += item));
console.log(total);
