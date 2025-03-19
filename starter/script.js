'use strict';

const Parent = class {
  #id;

  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.#id = id;
  }

  teach() {
    console.log('I am teaching the kids a lesson');
  }
};

class Child extends Parent {
  constructor(name, age, id, hobby) {
    super(name, age, id);
    this.hobby = hobby;
  }

  receiveLesson() {
    console.log('I am learning mathematics');
  }
}

Child('Ricky', 18, 3333, 'Soccer');

console.log(Child.__proto__ === Parent.prototype);
