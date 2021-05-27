/*
 *Lexical Scope / Ámbito Léxico: El intérprete de JavaScript funciona 
 desde el ámbito de ejecución actual y funciona hasta encontrar la 
 variable en cuestión. Si la variable no se encuentra en ningún ámbito, 
 se genera una excepción.

Este tipo de búsqueda se llama ámbito léxico. 
El alcance de una variable se define por su ubicación dentro del código 
fuente, y las funciones anidadas tienen acceso a las variables declaradas 
en su alcance externo. No importa de dónde se llame una función, 
o incluso cómo se llama, su alcance léxico depende solo de dónde 
se declaró la función. 

El Local Scope: se refiere a la variable o funcion que esta dentro 
de un bloque o funcion especifica. Solo se pueden acceder a ellas
 (ejecutar o llamar) dentro del entrono en donde conviven.

El ambito lexico: se refiere a que una funcion puede acceder a una 
funcion o variable fuera de ella.Cada nivel interno puede acceder a 
sus niveles externos hasta poder alcanzarlas.
 */

const helloWorld = () => {
  const hello = "hello world";
  console.log(hello);
};

helloWorld();

var scope = "I am global";

const functionScope = () => {
  var scope = "I am a local var";
  const func = () => {
    return scope;
  };
  console.log(func());
};

functionScope();

var scope = "I'm global";
const func1 = () => {
  const scope = "I'm local 1";
  const func2 = () => {
    // const scope = "I'm local 2";
    const func3 = () => {
      //   const scope = "I'm local 3";
      console.log(scope);
    };
    func3();
  };
  func2();
};
func1();
console.log(scope);

/**
 * var
 *
 * problems
 * It could be redeclared
 */
