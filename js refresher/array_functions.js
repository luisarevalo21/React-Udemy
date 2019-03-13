const numbers = [1, 2, 3];

//map takes a function an applies the function to each element in the array
//return the new value
//returns a new array
// are normal js array methods
const doubleNumArray = numbers.map(num => {
  return num * 2;
});

console.log(numbers);
console.log(doubleNumArray);
