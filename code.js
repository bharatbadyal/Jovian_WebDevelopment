// let arr = [23, 45, 54, 55, 3];
// let sortedArray = arr.sort((a, b) => {
//   return a - b;
// });
// console.log(sortedArray);

const newArr = [9, 3, 44, 54, 23];
/*
  if the function that we are passing in "map" takes two agrument
  then the first argument will be accessing actually value
  second argumant will be accessing the index of that value
*/
function print(element, idx) {
  return `element at index ${idx} is ${element}`;
}

/*
  here map is looping over every element
  and then passing the element, index in the print function
*/
const result2 = newArr.map(print);
console.log(result2);
