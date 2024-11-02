// String - represents textual data
let myStr: string = "Hello, TypeScript";

// Number - represents both integer and floating-point numbers
let myNumber: number = 42;

// Boolean - represents true/false values
let myBoolean: boolean = true;

// Array - represents a list of numbers
let myArray: number[] = [1, 2, 3, 4, 5];

// Object - represents a structured data with name and age properties
let myObject: { name: string; age: number } = { name: "John", age: 30 };

// Any - represents any type (tries to avoid using this)
let myAny: any = "Could be anything";

// Void - represents absence of any type, commonly used for functions that don't return a value
function myVoidFunction(): void {
	console.log("This function returns nothing");
}

// Null - represents null value
let myNull: null = null;

// Undefined - represents undefined value
let myUndefined: undefined = undefined;

// Tuple - represents an array with fixed length and types
let myTuple: [string, number] = ["Hello", 42];

// Enum - represents a group of named constants
enum Color {
	Red,
	Green,
	Blue,
}
let myColor: Color = Color.Green;

// Never - represents values that never occur (like a function that always throws an error)
function error(message: string): never {
	throw new Error(message);
}
