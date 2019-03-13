//easily extract array elemetns or obejct properties and store them in variables
//extracts elemnts or properties from objects and arrays
//pulls single elements and objects
//in arrays the order determines which property is pulled
// [a, b] = ["hello", "max"]
//console.log(a)  prints hello
//console.log(b) prints max

//in object destructuring the properties name is pulled
//{name } = {name: "max", age:28}
//console.log(name) // prints max
//console.log(age) //prints undefined

const numbers = [1, 2, 3];
[a, b] = numbers;
console.log(a, b);
//1 and 2 is logged
//geting 3  can be done
// [a, , c] = numbers;
// console.log(c) prints out 3
