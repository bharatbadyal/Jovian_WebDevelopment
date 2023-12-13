/*
  Filter function:
  -filter is also a higher order function
    filter also loop over arrarry elements
    there is one special thing about filter, i.e the argument function which we have to pass should pass
    inside the filter should always pass boolean, other wise output will be converted to boolean

  - filter loops over every element, passes that element to argument function and then if the output of the function call
    is true, then it store the new element in the new array otherwise doesnot add this add element to array.
  */

function oddOrEven(x) {
  return x % 2 != 0;
}
let arr = [2, 3, 4, 5, 7, 34, 5, 23];
const result = arr.filter(oddOrEven);
console.log(result);
