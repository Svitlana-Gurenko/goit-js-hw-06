'use strict';
class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    return (this.#value = this.#value + str);
  }
  padStart(str) {
    return (this.#value = str + this.#value);
  }
  padBoth(str) {
    return (this.#value = str + this.#value + str);
  }
}
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."

builder.padStart('^');
console.log(builder.getValue()); // "^."

builder.padEnd('^');
console.log(builder.getValue()); // "^.^"

builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="

/*Залиш цей код для перевірки ментором.



Вимоги

Оголошено клас StringBuilder.
Властивість value у класі StringBuilder оголошена приватною.
У класі StringBuilder оголошено методи getValue, padEnd, padStart і padBoth.
Метод getValue повертає значення приватної властивості value екземпляра класу, який його викликає.
Методи padEnd, padStart і padBoth змінюють значення приватної властивості value екземпляра класу, який його викликає.
У результаті виклику new StringBuilder(".") значення змінної builder — об'єкт.
Об'єкт builder не містить публічної властивості value.
Перший виклик builder.getValue() одразу після ініціалізації екземпляра повертає рядок ..
Другий виклик builder.getValue() після виклику builder.padStart("^") повертає рядок ^..
Третій виклик builder.getValue() після виклику builder.padEnd("^") повертає рядок ^.^.
Четвертий виклик builder.getValue() після виклику builder.padBoth("=") повертає рядок =^.^=.
Результати всіх викликів виведено в консоль.
Завдання очікує виконання

Дедлайн
23:45, 22 листоп.


Здай домашнє */
