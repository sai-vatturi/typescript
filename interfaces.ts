// Define an interface for a person
interface Person {
	firstName: string;
	lastName: string;
	age: number;
	greet(): string; // Method that returns a string
}

// Implement the interface in a class
class Student implements Person {
	firstName: string;
	lastName: string;
	age: number;

	constructor(firstName: string, lastName: string, age: number) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	// Implement the greet method
	greet(): string {
		return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
	}
}

// Create an instance of the Student class
const student = new Student("John", "Doe", 20);

// Call the greet method
console.log(student.greet());
