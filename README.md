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
- Union Types
- Interfaces
- Classes
- Generics

---

## 1. Type Annotations
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

## 2. Variables

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
## 3. Union Types
Union types allow you to specify that a variable can hold more than one type of value. This is useful when a value can be of different types at different times.

### Syntax
To define a union type, use the pipe (`|`) symbol between the types.

```ts
let value: string | number;
```

### Example
Here is an example of a variable that can hold either a string or a number:

```ts
let value: string | number;

value = "Hello"; // valid
value = 42;      // valid
value = true;    // invalid, will cause a compile-time error
```

### Function with Union Types
You can also use union types in function parameters and return types.

```ts
function format(value: string | number): string {
	if (typeof value === "string") {
		return value.toUpperCase();
	} else {
		return value.toFixed(2);
	}
}

console.log(format("hello")); // Output: HELLO
console.log(format(123.456)); // Output: 123.46
```

Union types help make your code more flexible while still providing type safety.

---
## 4. Interfaces

Interfaces in TypeScript are used to define the structure of an object. They can be used to ensure that an object adheres to a specific shape by specifying the types of its properties.

### Defining an Interface
To define an interface, use the `interface` keyword followed by the name of the interface and the properties it should have.

```ts
interface Person {
	name: string;
	age: number;
}
```

### Using an Interface
You can use an interface to type-check objects.

```ts
let user: Person = {
	name: "Alice",
	age: 25
};
```

### Optional Properties
Interfaces can have optional properties, which are denoted by a question mark (`?`).

```ts
interface Person {
	name: string;
	age?: number; // age is optional
}

let user: Person = {
	name: "Bob"
};
```

### Readonly Properties
Properties can be marked as `readonly` to prevent them from being modified after the object is created.

```ts
interface Person {
	readonly id: number;
	name: string;
}

let user: Person = {
	id: 1,
	name: "Charlie"
};

// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
```

### Function Types
Interfaces can also describe function types.

```ts
interface SearchFunc {
	(source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
	return source.search(subString) !== -1;
};
```

### Indexable Types
Interfaces can describe types that can be indexed.

```ts
interface StringArray {
	[index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
```

### Extending Interfaces
Interfaces can extend other interfaces, allowing you to combine multiple interfaces into one.

```ts
interface Shape {
	color: string;
}

interface Square extends Shape {
	sideLength: number;
}

let square: Square = {
	color: "blue",
	sideLength: 10
};
```

### Implementing Interfaces
Classes can implement interfaces to ensure they adhere to a specific structure.

```ts
interface Animal {
	name: string;
	makeSound(): void;
}

class Dog implements Animal {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	makeSound(): void {
		console.log("Woof! Woof!");
	}
}

let myDog: Dog = new Dog("Buddy");
myDog.makeSound(); // Output: Woof! Woof!
```

Interfaces in TypeScript provide a powerful way to define and enforce the structure of objects, making your code more robust and maintainable.

---

## 5. Classes

Classes in TypeScript are a blueprint for creating objects with specific properties and methods. They provide a way to define the structure and behavior of objects in a more organized and reusable manner.

### Defining a Class
To define a class, use the `class` keyword followed by the name of the class and its properties and methods.

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

### Creating an Instance
You can create an instance of a class using the `new` keyword.

```ts
let user = new Person("Alice", 25);
console.log(user.greet()); // Output: Hello, my name is Alice
```

### Inheritance
Classes can inherit from other classes using the `extends` keyword. This allows you to create a new class that reuses the properties and methods of an existing class.

```ts
class Employee extends Person {
	employeeId: number;

	constructor(name: string, age: number, employeeId: number) {
		super(name, age);
		this.employeeId = employeeId;
	}

	getEmployeeId(): number {
		return this.employeeId;
	}
}

let employee = new Employee("Bob", 30, 12345);
console.log(employee.greet()); // Output: Hello, my name is Bob
console.log(employee.getEmployeeId()); // Output: 12345
```

### Access Modifiers
TypeScript provides access modifiers to control the visibility of class members. The three access modifiers are `public`, `private`, and `protected`.

- `public`: Members are accessible from anywhere.
- `private`: Members are accessible only within the class.
- `protected`: Members are accessible within the class and its subclasses.

```ts
class Car {
	public make: string;
	private model: string;
	protected year: number;

	constructor(make: string, model: string, year: number) {
		this.make = make;
		this.model = model;
		this.year = year;
	}

	getModel(): string {
		return this.model;
	}
}

class ElectricCar extends Car {
	private batteryCapacity: number;

	constructor(make: string, model: string, year: number, batteryCapacity: number) {
		super(make, model, year);
		this.batteryCapacity = batteryCapacity;
	}

	getBatteryCapacity(): number {
		return this.batteryCapacity;
	}
}

let myCar = new ElectricCar("Tesla", "Model S", 2020, 100);
console.log(myCar.make); // Output: Tesla
console.log(myCar.getModel()); // Output: Model S
console.log(myCar.getBatteryCapacity()); // Output: 100
```

### Static Members
Static members are shared among all instances of a class. They are accessed using the class name rather than an instance of the class.

```ts
class MathUtil {
	static PI: number = 3.14;

	static calculateCircumference(radius: number): number {
		return 2 * MathUtil.PI * radius;
	}
}

console.log(MathUtil.PI); // Output: 3.14
console.log(MathUtil.calculateCircumference(10)); // Output: 62.8
```

### Abstract Classes
Abstract classes are base classes that cannot be instantiated directly. They are meant to be extended by other classes. Abstract classes can contain abstract methods, which must be implemented by subclasses.

```ts
abstract class Animal {
	abstract makeSound(): void;

	move(): void {
		console.log("Moving...");
	}
}

class Dog extends Animal {
	makeSound(): void {
		console.log("Woof! Woof!");
	}
}

let myDog = new Dog();
myDog.makeSound(); // Output: Woof! Woof!
myDog.move(); // Output: Moving...
```

Classes in TypeScript provide a powerful way to define and organize the structure and behavior of objects, making your code more modular and maintainable.

---

## 6. Generics

Generics in TypeScript allow you to create reusable components that can work with a variety of types. They provide a way to create functions, classes, and interfaces that can operate on different types without sacrificing type safety.

### Generic Functions
You can create a generic function by using a type parameter, which acts as a placeholder for the actual type.

```ts
function identity<T>(arg: T): T {
	return arg;
}

let output1 = identity<string>("Hello");
let output2 = identity<number>(42);
```

### Generic Classes
Classes can also be made generic by using type parameters.

```ts
class GenericNumber<T> {
	zeroValue: T;
	add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
	return x + y;
};
```

### Generic Interfaces
Interfaces can use generics to define the shape of a variety of types.

```ts
interface GenericIdentityFn<T> {
	(arg: T): T;
}

function identity<T>(arg: T): T {
	return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

### Generic Constraints
You can constrain the types that a generic type parameter can accept by using the `extends` keyword.

```ts
interface Lengthwise {
	length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
	console.log(arg.length);
	return arg;
}

loggingIdentity({ length: 10, value: "Hello" });
```

Generics in TypeScript provide a powerful way to create flexible and reusable components while maintaining strong type safety.
