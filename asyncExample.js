// code to study async feature of Javascript

console.log("Hello");
setTimeout(() => {
  console.log("Inside TimeoutFunction");
}, 0);

function timer1() {
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      console.log("Inside First Timer");
    }, 500);
  }
}

function timer2() {
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      console.log("Inside Second Timer");
    }, 500);
  }
}

timer1();
timer2();
console.log("Line written after settimeout function");
