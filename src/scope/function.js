const fruits = () => {
  var fruit = "apple";
  console.log(fruit);
};

const fruits2 = () => {
  var x = 1;
  var x = 2; //overriding the declaration, this is a problem
  let y = 1;
  //   let y = 2; // we can't redeclare using the let keyword, good practice
  console.log(x);
  console.log(y);
};
