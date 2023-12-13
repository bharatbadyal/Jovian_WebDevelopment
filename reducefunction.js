/*
 * Reduce is also a higher order function available for arrays
 * reduce also takes function f as an argument
 * reduce workes like, it goes one by one to every element of array,
 * say the current element is arr[i]
 * reduce will pass this element to the function f, and acumilate the result of further function calls
 * with the particular result
 */

let arr = [3, 45, 34, 54, 45];
function sum(previousResult, currentValue) {
  console.log(previousResult, currentValue);
  return previousResult + currentValue;
}

const result = arr.reduce(sum);
console.log(result);

function addPrices(prevResult, currValue) {
  console.log(prevResult, currValue);
  let newPrice = prevResult.price + currValue.price;
  return { price: newPrice };
}
let cart = [
  { price: 10000, name: "Iphone" },
  { price: 500, name: "backcover" },
  { price: 250, name: "glass" },
];
const totalPrice = cart.reduce(addPrices);
console.log(totalPrice.price);
