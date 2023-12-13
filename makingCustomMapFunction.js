let newArr = [12, 3434, 5, 443, 3];
function print(element, idx) {
  return `the element at index ${idx} is ${element}`;
}
function customMapper(arr, func) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i], i));
  }
  return result;
}
const value = customMapper(newArr, print);
console.log(value);
