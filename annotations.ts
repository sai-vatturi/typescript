// Variable annotation
let myString: string = "Hello, TypeScript";

// Function annotation
function add(a: number, b: number): number {
	return a + b;
}

// Object annotation
let user: { name: string; age: number } = {
	name: "John",
	age: 30
};

// Array annotation
let numbers: number[] = [1, 2, 3, 4, 5];

// Class annotation
class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	greet(): string {
		return `Hello, my name is ${this.name}`;
	}
}

// Interface annotation
interface Animal {
	name: string;
	sound: string;
}

let dog: Animal = {
	name: "Buddy",
	sound: "Woof"
};

// Function with interface parameter
function makeSound(animal: Animal): void {
	console.log(`${animal.name} says ${animal.sound}`);
}

makeSound(dog);
