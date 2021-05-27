mipio = "miau"; //bad practice
var hello = "helloy";
var hello = "hello +"; // bad practice
let world = "world";
const helloWorld = "Hello World";

const myFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
};

myFunction();

const myFunction2 = () => {
  globalVar = "hello world"; //assigning a global var inside a function
  // bad practice!!
};

myFunction2();
console.log(globalVar);
