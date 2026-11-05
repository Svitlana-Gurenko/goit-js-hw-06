'use strict';

class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    return this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    return (this.#items = this.#items.filter((item) => item !== itemToRemove));
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

/*Залиш цей код для перевірки ментором.



Вимоги

Оголошено клас Storage.
У класі Storage оголошено методи getItems, addItem і removeItem.
Властивість items у класі Storage оголошена приватною.
Метод getItems повертає значення приватної властивості items екземпляра класу, який його викликає.
Метод addItem змінює значення приватної властивості items екземпляра класу, який його викликає.
Метод removeItem змінює значення приватної властивості items екземпляра класу, який його викликає.
У результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення змінної storage — об'єкт.
В об'єкта storage немає публічної властивості items.
Перший виклик storage.getItems() одразу після ініціалізації екземпляра повертає масив ["Nanitoids", "Prolonger", "Antigravitator"].
Другий виклик storage.getItems() після виклику storage.addItem("Droid") повертає масив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"].
Третій виклик storage.getItems() після виклику storage.removeItem("Prolonger") повертає масив ["Nanitoids", "Antigravitator", "Droid"].
Результати всіх викликів виведено в консоль.*/
