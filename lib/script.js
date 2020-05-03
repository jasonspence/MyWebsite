"use strict"


sayHello();

getAllPrimes(100);



function sayHello() {
   console.log("Hello, My dude!\n\n");
}

function checkPrime(value) {
    let prime = true;
    for (let j = 2; j <= (value ** 0.5); j++) {
        if (value % j == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

function getAllPrimes(upTo=10) {
    for (let i = 2; i <= upTo; i++) {
        if (checkPrime(i)) console.log(i);
    }
}
