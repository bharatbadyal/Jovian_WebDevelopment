// use of parseInt
function convertToInteger(value) {
  return parseInt(value);
}

console.log(convertToInteger("32"));
console.log(convertToInteger(46.9));

// use of parseFloat
function convertToFloat(value) {
  return parseFloat(value);
}

console.log(convertToFloat(23.3));

// array functions : push,pop,shift,unshift,concat

// forEach

const initailArray = [1, 2, 3];

function logThing(str) {
  console.log(str);
}

initailArray.forEach(logThing);

// map, filter, find , sort will be covered in full details in next lecture
