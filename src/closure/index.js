/*
closure is the combination of a function and the lexical scope

A lexical scope in JavaScript means that a variable defined outside 
a function can be accessible inside another function defined after 
the variable declaration. But the opposite is not true; 
the variables defined inside a function will not be accessible outside that function.


A closure is the combination of a function bundled together (enclosed) with references 
to its surrounding state (the lexical environment). ... I
n JavaScript, closures are created every time a function is created, at function creation time.

El closure recuerda en el ambito en que la funcion fue creado.

*/

const moneyBox = () => {
  var saveCoins = 0;
  saveCoins += saveCoins;
  console.log(`MoneyBox: ${saveCoins}`);
};

moneyBox(5);

const moneyBox2 = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins}`);
  };
  return countCoins;
};

let myMoneyBox = moneyBox2();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

// example2
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
