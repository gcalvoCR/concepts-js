/**
 Hoisting is JavaScript's default behavior of moving declarations to the top.

 */

a = 2;
var a;
console.log(a);

// it moves the variable declaration to the top
// it only happens with `var`

//Example 2, it works only with declaration, not assignation
console.log(a);
var a = 2;

//Example 3
nameOfDog("Elmo");

// the engine puts this first in memory before executing the function
function nameOfDog(name) {
  console.log(name);
}

/* structures that suffer hoisting
- var --> declaration
- function --> completely
- import --> completely
- class --> no hoisting
*/
