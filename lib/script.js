"use strict"

function sayHello() {
   document.write("Hello, My dude!\n\n");
}


sayHello();

/*
let age = prompt("What's ur ege??", 69);
if (age != null && age >= 0) {
  document.write(`dud, ur eg is ${age}`);
  if (age == 69) {
    document.write(" Nice!");
  }
}
*/

function isPrime(value) {
    let prime = true;
    for (let j = 2; j <= (value ** 0.5); j++) {
        if (value % j == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

function allPrimes(upTo=10) {
    for (let i = 2; i <= upTo; i++) {
        if (isPrime(i)) document.write(` ${i},`);
    }
}

allPrimes(100);

for (let i = 2; i <= 100; i++) {
  let prime = true;
  for (let j = 2; j <= (i ** 0.5); j++) {
    if (i % j == 0) {
      prime = false;
      break;
    }
  }
  if (prime) document.write(` ${i},`);
}

document.write(!!(0 && 0<1));

