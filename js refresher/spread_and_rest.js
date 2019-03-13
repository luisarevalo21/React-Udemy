// spread and rest operators
// uses "..."

// spread is used to split up array elements or object properties
// example
// const newArray = [...oldArray, 1,2]
//oldArray elements is copied into the new one and 1,2 are added to the end

// oldObject properties are copied and newProp is added to the new object
// if oldObject had a property called newProp it will be overriden
// const newObject = {...oldObject, newProp:5}

//rest
//merge a list of function arguments into an array
//args can take 1 2 or 3 arguments and combines them into an array.
//recieves an unlimited amount of arguments
//array methods can be applied
// function sortArgs(...args) {
//   return args.sort();
// }

//examples

const numbers = [1, 2, 3, 4];

const newNumbers = [...numbers, 9];
console.log(newNumbers);
//if no dots are used numbers will be added as an array into the first element
// const newNumbers = [numbers, 9];
// console.log(newNumbers);
// prints [ [1,2,3,4] , 9]
const person = {
  name: "max"
};
const newPerson = {
  ...person,
  age: 28
};
console.log(newPerson);
//prints max and age 28

// either arrow or regular function can be used
////using args.filter() gives access to arrays filter method
//checks if the element is equal to 1
//=== checks for tpye and value equality
const filter = (...args) => {
  return args.filter(el => el === 1);
};
console.log(filter(1, 2, 3));
// [1] is printed
//it is an array becaues args combines them into an arary
