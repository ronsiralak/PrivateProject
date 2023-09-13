// Variables and Data Types
var name = "John";
let age = 30;
const isAdult = true;

// Operators
var result = 10 + 5;
var isEqual = (age === 30);
var isTrue = (true && false);

// Control Flow
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

for (var i = 0; i < 5; i++) {
  console.log("Iteration #" + i);
}

// Functions
function greet(person) {
  return "Hello, " + person + "!";
}

const message = greet(name);

// Arrays
var colors = ["red", "green", "blue"];
colors.push("yellow");
var firstColor = colors[0];

// Objects
var personInfo = {
  name: "Alice",
  age: 25
};
console.log(personInfo.name);

// Strings
var sentence = "This is a simple sentence.";
var sentenceLength = sentence.length;

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
  var outerVar = "I'm in the outer function!";
  
  function innerFunction() {
    console.log(outerVar);
  }
  
  return innerFunction;
}

var closureExample = outerFunction();
closureExample();

// Events and Event Handling (browser-specific)
document.getElementById("myButton").addEventListener("click", function() {
  console.log("Button clicked!");
});

// Classes and Object-Oriented Programming
class Animal {
  constructor(name) {
    this.name = name;
  }
  
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
function fetchData() {
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
document.getElementById("myElement").textContent = "Updated text.";

// JSON (JavaScript Object Notation)
const jsonData = '{"name": "Jane", "age": 35}';
const parsedData = JSON.parse(jsonData);
console.log(parsedData.name);

// Regular Expressions
const regex = /hello/g;
const text = "Hello world, hello universe!";
const matches = text.match(regex);
console.log(matches);

// Type Conversion and Coercion
var num = "42";
var convertedNum = parseInt(num);

// Template Literals
const greeting = `Hello, ${name}!`;

// Spread and Rest Operators
const numbers = [1, 2, 3, 4, 5];
const sum = (...args) => args.reduce((total, num) => total + num, 0);
console.log(sum(...numbers));

// Destructuring
const [first, second] = numbers;
console.log(first, second);
