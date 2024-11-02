// A simple example to explain generics in TypeScript

// A generic function that takes an argument of type T and returns the same type T
function identity<T>(arg: T): T {
	return arg;
}

// Using the generic function with different types
let numberIdentity = identity<number>(42); // T is number
let stringIdentity = identity<string>("Hello, Generics!"); // T is string

// A generic interface
interface GenericInterface<T> {
	value: T;
	getValue: () => T;
}

// Implementing the generic interface with a specific type
class GenericClass<T> implements GenericInterface<T> {
	value: T;

	constructor(value: T) {
		this.value = value;
	}

	getValue(): T {
		return this.value;
	}
}

// Using the generic class with different types
let numberInstance = new GenericClass<number>(100);
let stringInstance = new GenericClass<string>("TypeScript");

// Logging the values
console.log(numberInstance.getValue()); // Output: 100
console.log(stringInstance.getValue()); // Output: TypeScript
