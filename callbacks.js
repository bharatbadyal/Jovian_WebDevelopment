/*
 * function fun -> HOF because fn is function (which it takes as argument)
 */

function fun(a, fn) {
  for (let i = 0; i < a; i++) {
    console.log(i);
  }
  fn();
}

fun(15, () => {
  console.log("I'm also executed");
});

setTimeout(() => console.log("Testing setTimeout"), 5000); // this waits for 5 sec before printing the output
