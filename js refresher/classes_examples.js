class Human {
  constructor() {
    this.gender = "male";
  }
  printGender() {
    console.log(this.gender);
  }
}

//printgender is extended into person
//if extending super must added
//this exeucutes the parent constructor
class Person extends Human {
  //default function
  constructor() {
    super();
    this.name = "MAX";
    this.gender = "female";
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();
