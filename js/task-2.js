'use strict';

const allUsers = [
  {
    name: 'Moore Hensley',
    friends: ['Sharron Pace'],
  },
  {
    name: 'Sharlene Bush',
    friends: ['Briana Decker', 'Sharron Pace'],
  },
  {
    name: 'Ross Vazquez',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
  },
  {
    name: 'Elma Head',
    friends: ['Goldie Gentry', 'Aisha Tran'],
  },
  {
    name: 'Carey Barr',
    friends: ['Jordan Sampson', 'Eddie Strong'],
  },
  {
    name: 'Blackburn Dotson',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
  },
  {
    name: 'Sheree Anthony',
    friends: ['Goldie Gentry', 'Briana Decker'],
  },
];
const getUsersWithFriend = (users, friendName) =>
  users.filter((user) => user.friends.includes(friendName));

console.log(getUsersWithFriend(allUsers, 'Briana Decker'));
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, 'Goldie Gentry'));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, 'Adrian Cross')); // []

/*Залиш цей код для перевірки ментором.



Вимоги

Оголошено змінну getUsersWithFriend.
Змінній getUsersWithFriend присвоєно стрілочну функцію з параметрами (users, friendName).
Для перебирання параметра users використано метод filter().
Якщо значення параметра friendName — рядок "Briana Decker", функція повертає масив об'єктів користувачів з іменами Sharlene Bush і Sheree Anthony.
Якщо значення параметра friendName — рядок "Goldie Gentry", функція повертає масив об'єктів користувачів з іменами Elma Head і Sheree Anthony.
Якщо значення параметра friendName — рядок "Adrian Cross", функція повертає порожній масив.
Виклик з будь-якими валідними аргументами повертає правильне значення.
Результати всіх викликів виведено в консоль.*/
