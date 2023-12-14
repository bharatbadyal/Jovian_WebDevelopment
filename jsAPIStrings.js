// use of length function
let name = "Bharat";
console.log(name.length); // length function use

function getlength(str) {
  console.log("String: ", str);
  console.log("Length of given string is: ", str.length);
}

getlength("My name is Bharat"); // space will also count in total length

// indexOf function

function findTheIndex(str, target) {
  console.log("String: ", str);
  console.log("Index of given string is: ", str.indexOf(target)); // if having word conflict so to get the last indexof string use function "lastIndexOf" so then it will give the index of last usage of same word
}

findTheIndex("The of Amazing part of World", "of");

// getSlice
function getSliceOf(str, start, end) {
  console.log("Orignal String: ", str);
  console.log("Slice of string You want: ", str.slice(start, end)); // there is another function available to same find of work substr(start,length) but this is old , so it is recomended to use slice in case you need this fucntionality
}

let str = "This is just testing string";
getSliceOf(str, 1, 4);

/*
*** This is demonstration of working of slice function inside
function cutIt(str, startIndex, endIndex) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i >= startIndex && i < endIndex) {
      newStr += str[i];
    }
  }
  return newStr;
}


const value = "Bharat Sharma";

console.log(cutIt(value, 2, 4));
*/

// replace function

function replaceStr(str, target, replacement) {
  console.log("The orignal string:", str);
  console.log(
    "String with replaced word is:",
    str.replace(target, replacement)
  );
}

let str1 = "Hello World";
replaceStr(str1, "World", "JavaScript");

// split function : it split the given string into indivual strings
let str2 = "My name is Bharat Sharma";
console.log(str2.split(" ")); // in split function we have to give an argument/delimiter which should be present in string so that it will divide on the basis of it for example in this given function str2 is divided on basis of space " ", is space would have not present in string this function will give unchaged string

// trim,trimStart,trimEnd,toUpperCase,toLowerCase
let str3 = "    Bharat Sharma      ";
console.log(str3.trim());
console.log(str3.trimStart());
console.log(str3.trimEnd());

console.log(str3.toUpperCase());
console.log(str3.toLowerCase());
