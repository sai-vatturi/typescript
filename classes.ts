// Define a class named 'Person'
class Person {
	// Properties of the class
	name: string;
	age: number;

	// Constructor to initialize the properties
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	// Method to display person's details
	displayDetails(): void {
		console.log(`Name: ${this.name}, Age: ${this.age}`);
	}
}

// Create an instance of the 'Person' class
const person1 = new Person('John Doe', 30);

// Call the method to display details of the person
person1.displayDetails();
