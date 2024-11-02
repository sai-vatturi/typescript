# Introduction to TypeScript

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers static typing, classes, and interfaces, which help developers build robust and maintainable code.

## Installation

Ensure Node.js and npm are installed. Then, install TypeScript globally:

```bash
npm install -g typescript
```

## Compilation

Compile `.ts` files to `.js` using:

```bash
tsc example.ts
```

To compile JavaScript code, simply run:

```bash
node example.js
```


## Table of Contents
- Type Annotations
- Variables

---

### 1. Type Annotations
Type Annotations are a way to describe data in our application. We can annotate almost anything in our code.

#### Types of Type Annotations

TypeScript provides several types of annotations to describe the types of data in your application:

- **Primitive Types**: `string`, `number`, `boolean`, `symbol`, `null`, `undefined`
- **Array Types**: `number[]`, `string[]`, etc.
- **Tuple Types**: `[string, number]`, etc.
- **Enum Types**: `enum Color { Red, Green, Blue }`
- **Any Type**: `any`
- **Void Type**: `void`
- **Object Types**: `{ name: string; age: number }`
- **Function Types**: `(param1: type1, param2: type2) => returnType`
- **Union Types**: `string | number`
- **Intersection Types**: `type1 & type2`
- **Literal Types**: `"literalValue"`
- **Type Aliases**: `type Name = string`
- **Interfaces**: `interface Person { name: string; age: number }`
- **Classes**: `class Person { name: string; age: number }`
- **Generics**: `Array<T>`, `Promise<T>`

These annotations help ensure that your code is robust and maintainable by catching type-related errors at compile time.

### Function Annotations
Used to annotate parameters of functions in our code.

```ts
function addShipping(price: number, shipping: number) : number {
	return price + shipping;
}

addShipping(10, 5); // Output: 15
```

### Variable Annotations
Variables can be annotated to specify the type of data they hold.

```ts
let myString: string = "Hello, TypeScript";
```

### Function Annotations
Functions can have their parameters and return types annotated.

```ts
function add(a: number, b: number): number {
	return a + b;
}
```

### Function with void return type
Functions can accept parameters that adhere to a specific interface.

```ts
function makeSound(animal: Animal): void {
	console.log(`${animal.name} says ${animal.sound}`);
}

makeSound(dog);
```

### Object Annotations
Objects can be annotated to specify the types of their properties.

```ts
let user: { name: string; age: number } = {
	name: "John",
	age: 30
};
```

### Array Annotations
Arrays can be annotated to specify the type of their elements.

```ts
let numbers: number[] = [1, 2, 3, 4, 5];
```

### Class Annotations
Classes can have their properties and methods annotated.

```ts
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
```

### Interface Annotations
Interfaces can be used to define the shape of an object.

```ts
interface Animal {
	name: string;
	sound: string;
}

let dog: Animal = {
	name: "Buddy",
	sound: "Woof"
};
```


---

### 2. Variables

In TypeScript, variables can be declared using `let`, `const`, and `var`. Each has its own scope and usage.

#### `let`
`let` is used to declare block-scoped variables. It is the preferred way to declare variables in TypeScript.

```ts
let count: number = 10;
```

#### `const`
`const` is used to declare block-scoped constants. The value of a `const` variable cannot be changed once it is assigned.

```ts
const name: string = "Alice";
```

#### `var`
`var` is used to declare function-scoped variables. It is generally not recommended to use `var` due to its function-scoping behavior.

```ts
var age: number = 25;
```

#### Variable Types
TypeScript supports various types for variables, including:

- `string`
- `number`
- `boolean`
- `array`
- `object`
- `any`
- `void`
- `null`
- `undefined`
- `tuple`
- `enum`
- `never`

Example of different variable types:

```ts
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
```
---
