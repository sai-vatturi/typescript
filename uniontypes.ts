// uniontypes.ts

// Function that accepts a parameter which can be either a string or a number
function printId(id: string | number) {
	if (typeof id === "string") {
		console.log(`ID is a string: ${id.toUpperCase()}`);
	} else {
		console.log(`ID is a number: ${id}`);
	}
}

// Examples of calling the function with different types
printId("abc123");
printId(123456);
