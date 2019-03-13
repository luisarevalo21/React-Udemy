//properties are like variables attached to classes/objects

//methods are like functions attached to classes/objects

//old syntax
// constructor(){
//     this.myProperty ="value"

// }
// //new syntax no longer need a constructor function
//constructor funciton call is not used
// myProperty= "value"

//methods
//old syntax
//myMethod() { ...}

// new syntax
//this keyword is perserved using this syntax
//arrow function maintains the correct this
// myMethod = ()=> {...}

//examples

class Human {
  gender = "male";

  //this is still used to access the outside property
  printGender = () => {
    console.log(this.gender);
  };
}

//printgender is extended into person
//if extending super must added
//this exeucutes the parent constructor
class Person extends Human {
  //default function
  name = "MAX";
  gender = "female";

  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName();
person.printGender();
