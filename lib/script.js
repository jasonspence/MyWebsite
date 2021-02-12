"use strict"

let host = {
	firstName: "Jason",
	lastName: "Spence",
	sayHi() {
		console.log(`Hello, I'm ${this.firstName}!`)
	}
}

function sayHello(name) {
   console.log(`Hello, I'm ${name}!`);
}

