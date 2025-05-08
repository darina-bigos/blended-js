//  Mодуль 4. Об'єкти

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

// const planetsJoin = planets.join('-');
// console.log(planetsJoin);
// console.log(planets.slice(0, 2));

// // const lastElementIndex = planets.length - 1;
// // console.log(planets[lastElementIndex]);

// // if (planets.length >= 3) {
// //   console.log('3 or more');
// // } else {
// //   console.log('3 or less');
// // }

// // planets[0] = 'jupiter';

// // console.log(planets.length);
// // console.log(planets);

// const name = 'Mango';
// const letters = name.split('');
// console.log(letters);

// const firstArray = ['Mercury', 'Venus'];
// const secondArray = ['Mars', 'Jupiter'];
// const result = firstArray.concat(secondArray);
// console.log(result);

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi', 'Poly'];
// console.log(clients.indexOf('Ajax'));

// const tags = [];
// for (let i = 0; i < 10; i++) {
//   tags.push(`tag-${i}`);
// }

// console.log(tags);

// const planets = ['Earth', 'Mars', 'Venus'];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i], i);
// }

// for (planet of planets) {
//   console.log(planet);
// }

// function fill(min, max) {
//   let arr = [];
//   for (let i = min; i <= max; i += 2) {
//     return arr.push(i);
//   }
// }
// console.log(fill(2, 10));

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[numberOfTags - 1];
// console.log(lastTag);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
// ];
// for (const book of books) {
//   console.log(book); // Об'єкт книги
//   console.log(book.title); // Назва
//   console.log(book.author); // Автор
//   console.log(book.rating); // Рейтинг
// }
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propA: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// const temps = [8, 24, 25, 85, 3, 79, 1100];
// console.log(Math.max(...temps));
// console.log(Math.min(...temps));

// const a = [{ x: 1 }, { y: 2 }, { q: 3 }];
// const b = [...a];

// a[0].x = 100;
// console.log(a === b);

// console.log('a', a);
// console.log('b', b);

// const objA = { x: 1, y: 2 };
// const objB = { x: 0, q: 3 };
// const objC = {
//   x: 10,
//   ...objA,
//   x: 10,
// };
// console.log(objC);

const Transaction1 = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account1 = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    const obj = { id: amount, amount, type };
    return obj;
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    const transactions = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transactions);
  },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      return 'недостатньо коштів';
    }

    this.balance -= amount;
    const transactions = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transactions);
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const item of this.transactions) {
      if (item.id === id) {
        return item;
      }
    }
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let sum = 0;
    for (const item of this.transactions) {
      if (item.type === type) {
        sum += item.amount;
      }
    }
    return sum;
  },
};

console.log(account1.deposit(300));

console.log(account1.deposit(100));

account1.withdraw(200);

console.log(account.getBalance());
console.log(account.getTransactionDetails(300));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));

console.log(account);
