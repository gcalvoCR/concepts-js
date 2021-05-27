const fruits = () => {
  if (true) {
    var fruits1 = "apple";
    var fruits2 = "banana";
    var fruits3 = "kiwi";
  }
  console.log(fruits1); //this is a problem
  console.log(fruits2);
  console.log(fruits3);
};

let x = 1; //global scope
{
  let x = 2; //block scope
  console.log(x);
}
console.log(x);

const anotherFunction = () => {
  for (var i = 0; i < 10; i++) {
    // setTimeout(() => {
    console.log(i);
    // }, 1000);
  }
};

anotherFunction();

/*
var 
could have a local assignation and 
the elements declared anywhere are gonna be 
accesible within the same function
no matter if they where assigned within a block.
*/

/*
scopes:
- block
- function
- class
- global
*/
