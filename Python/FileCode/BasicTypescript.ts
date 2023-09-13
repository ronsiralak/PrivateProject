// Variables and Data Types
let name: string = "John";
let age: number = 30;
const isAdult: boolean = true;

// Operators
let result: number = 10 + 5;
let isEqual: boolean = (age === 30);
let isTrue: boolean = (true && false);

// Control Flow
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

for (let i: number = 0; i < 5; i++) {
  console.log("Iteration #" + i);
}

// Functions
function greet(person: string): string {
  return "Hello, " + person + "!";
}

const message: string = greet(name);

// Arrays
let colors: string[] = ["red", "green", "blue"];
colors.push("yellow");
let firstColor: string = colors[0];

// Objects
let personInfo: { name: string; age: number } = {
  name: "Alice",
  age: 25
};
console.log(personInfo.name);

// Strings
let sentence: string = "This is a simple sentence.";
let sentenceLength: number = sentence.length;

// Error Handling
try {
  // Code that may throw an error
  throw new Error("This is an error.");
} catch (error) {
  console.error("An error occurred: " + error.message);
} finally {
  console.log("Execution completed.");
}

// Scope and Closures
function outerFunction() {
  let outerVar: string = "I'm in the outer function!";
  
  function innerFunction() {
    console.log(outerVar);
  }
  
  return innerFunction;
}

let closureExample = outerFunction();
closureExample();

// Events and Event Handling (browser-specific)
document.getElementById("myButton")!.addEventListener("click", function() {
  console.log("Button clicked!");
});

// Classes and Object-Oriented Programming
class Animal {
  constructor(private name: string) {}
  
  speak() {
    console.log(this.name + " makes a sound.");
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + " barks.");
  }
}

const dog = new Dog("Fido");
dog.speak();

// Modules and ES6 Import/Export
// Import and export statements go here

// Asynchronous JavaScript (Promises)
function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data: " + error.message);
  }
}

getData();

// DOM Manipulation (browser-specific)
document.getElementById("myElement")!.textContent = "Updated text.";

// JSON (JavaScript Object Notation)
const jsonData: string = '{"name": "Jane", "age": 35}';
const parsedData: { name: string; age: number } = JSON.parse(jsonData);
console.log(parsedData.name);

// Regular Expressions
const regex: RegExp = /hello/g;
const text: string = "Hello world, hello universe!";
const matches: RegExpMatchArray | null = text.match(regex);
console.log(matches);

// Type Conversion and Coercion
let num: string = "42";
let convertedNum: number = parseInt(num);

// Template Literals
const greeting: string = `Hello, ${name}!`;

// Spread and Rest Operators
const numbers: number[] = [1, 2, 3, 4, 5];
const sum = (...args: number[]): number => args.reduce((total, num) => total + num, 0);
console.log(sum(...numbers));

// Destructuring
const [first, second]: number[] = numbers;
console.log(first, second);
