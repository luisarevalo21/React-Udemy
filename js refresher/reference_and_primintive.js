//priminitve type
const number = 1;

//setting num2 to number creates a copy of number
const num2 = number;
//1 will be copied
console.log(num2);

//objects and arrays are refernces
const person = {
  name: "max"
};
const secondPerson = person;
//prints max but will not copy the person
//person the object is stored in memory.
//const person a pointer is stored
//the pointer is copied into second person
console.log(secondPerson);

person.name = "man";
console.log(secondPerson);
//prints man
//second person changed.
//the pointer is copied and points to the same
//object in memory that person points to

//fixing this
const secondPerson = {
  ...person
};
console.log(secondPerson);

//objects and arrays are reference types.
//reassinging them copies the pointer not the value
// copying correct must use an entirely new object
