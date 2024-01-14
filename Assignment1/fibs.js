// Using iteration, write a function fibs which takes a number and returns an
// array containing that many numbers from the Fibonacci sequence.
function fibs(num) {
  const fib = [0, 1];
  if (num <= 2) {
    if (num < 0) {
      return "cant to this only positive integers";
    }
    switch (num) {
      case 2:
        return fib;
      case 1:
        return [fib[0]];
      case 0:
        return [];
    }
  }
  for (num; num >= 3; num--) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib;
}
console.log(fibs(2));
console.log(fibs(1));
console.log(fibs(0));
console.log(fibs(-1));
console.log(fibs(8));
console.time("fibs20");
console.log(fibs(20));
console.timeEnd("fibs20");
