"use strict"


document.body.style.background = "aqua";
//document.body.innerHTML.fontcolor("brown");

let host = {
	firstName: "Jason",
	lastName: "Spence",
	sayHi() {
		console.log(`Hello, I'm ${this.firstName}!`)
	}
}

sayHello(host.firstName);

host.sayHi()

let calculator = {
	read(x1, x2) {
		this.x1 = x1;
		this.x2 = x2;
	},
	sum() {return this.x1 + this.x2},
	mul() {return this.x1 * this.x2},
}

calculator.read(3, 4);
console.log(calculator.sum());
console.log(calculator.mul());

getAllPrimes(50);

for (let prop in host) {
	console.log(host[prop])
}


function sayHello(name) {
   console.log(`Hello, I'm ${name}!`);
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
