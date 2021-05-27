## Concepts

- Thread, JS has only one thread
- Event Loop--> what handles the different events
  - It understands if the call stack is empty
- Memory Heap
- Cola de tareas
- Pila de Ejecucion

## Callbacks

- Una funcion que al crearla le pasamos como parametro una segunda funcion

## Promises

## Async/Await

En un principio HTML, CSS y JS eran diferentes para cada navegador, hasta que se fueron volvieron estándares. Pero jQuery fue la tecnología que hacía que JS fuese compatible en todos los navegadores.

jQuery ya murió, es inútil.

JS está tan bien que ya empieza a reemplazar a HTML. Cada vez escribimos más JS que HTML.

Los componentes son aplicar un concepto muy parecido a las funciones pero para maquetar.

Componentes: Partes de código reutilizables y modificables.
¡¡ Existe una librería muy buena StoryBook y un profesor de platzi (Sacha Lifszyc) tiene un mini curso en youtube de como aprender a utilizarla e implementarla en tus proyectos
Conclusión: Java Script es el futuro, hay que aprender a utilizarlo muy bien.

Composición de componentes: Es poder crear componentes que estén hechos de otros componentes.

## Atomic design

Atomic Design es una metodología de diseño (y una forma de modelar nuestro pensamiento) para trabajar con componentes: ¿Por qué usar Atomic Design?

## Difference in Frameworks

- Syntaxis diferente
- Estrategia de renderizado (componente en html)

### Reactividad (estado y ciclo de vida)

Que es un paradigma?
Formas de pensar y traducir nuestras ideas en codigo ya que no hay una unica forma de programar ni de resolver un problema.

- OOP (create clases to have objects)
- Functional (no modificamos elementos, vamos transformando el objeto haciendo copias de el)
- Paradigma descriptivo (el como),
- Paradigma (el que)
- Reactividad es un paradigma, saben que hacer sin importar lo que pase.

1. Reactivdad es responsive --> osea `resiliente` y `escalable`

- `resiliente` siempre sabe que hacer
- `escalable` no importa con cuanta informacion trabaje, siempre puede trabajar.

2. Message Driven Architecture
   `emisores y receptores` este proceso no es sincronico, es asincronico, los mensajes no son entregados directamente, se anhaden a una cola cola y los receptores deben subscribirse a dicha cola para recibir los mensajes.

- Emisor genera mensaje.
- El gestor de queues gestiona en que cola se debe guardar y avisa todos los subscriptores de dicha cola que llego un nuevo mensaje.

3. Estado

- lugar donde se guarda la informacion reactiva del framework

4. Render

- Proceso por el cual nuestro codigo pasa a ser informacion visual.

  4.1 Estrategias de renderizado

- Virtual DOM
  Cada vez que hay un render creamos una copia del DOM en memoria y trabajamos con el, cuando hay cambios estos se hacen en el DOM y nuestra aplicacion tiene mejor rendimiento.

- NO virtual DOM
- Hay una linea de pensamiento que cree que usar el virtual dom es un paso extra.

Framework: Una manera de trabajar y hacer las cosas, incluye librerías.

Librería: Un código que tiene una función muy en particular.

# Ecosistema de frameworks y libreria JS

## Module bundlers o empaquetadores

(empaquetar los archivos, minificarlos y optimizarlos)

- Webpack (tiene su propio archivo, hay que definirle como empaquetar los archivos)
- Parcel (handles everything)
- Rollup (for libraries)

## Compiladores (they convert code to JS, so that the browser could understand it)

- Babel (transpilador, la syntaxis del futuro)
- Typescript (subset de JS, es un lenguaje tipado y orientado a objetos)

## UI tools (se encargan de la vista)

- React
- Vue
- Svelte
- etc

## CSS and preprocessors

- CSS
- SASS
- LESS
- Stylus
- etc

# Learning path in Javascript

### Variables

`let` let's you create a variable and reassign it
`const` creates a variable but won't let you reassign it
`var` is a legacy keyword, investigate further

### Data Types

`string`, could be defined with single or double quotes --> 'example', "example"
`number`, could be decimal or integers
`boolean`, true or false --> always use is or has --> isMillionaire, hasColor
`undefined`, there is no value
`null`, we are clearing out the value
`

### Arrays

`properties` such as length with `list.length`
`adding items` with `list.push(value);`
`remove items` with `list.pop()` removes the last item

### functions

1. The simplest way is to define them as follows
   '''
   function sum(a,b){
   return a+b;
   }
   '''

2. Anonymous functions (no name)
   '''
   setTimeout(function(){
   console.log("Time's up!");
   }, 1000);
   '''

3. Arrow Functions (no names)
   '''
   setTimeout(() => {
   console.log("Time's up!");
   }, 1000);
   '''

4. Notes:

- **if you have one line it assumes that is your return value**
- **don't use arrow functions to look fancy**
- All functions return something, if not defined, return `undefined`
- Callbacks --> functions that can be used as inputs to another function
  '''
  setTimeout(function(){
  console.log("Time's up!");
  }, 1000);
  '''

### Objects (2 main ways)

1. Object literals
   '''
   const cookie = {
   name: "Chocolate Chip",
   isGlutenFree: false,
   "+Yummy": true,
   eatCookie: function(){
   console.log("I am eating " + this.name);
   }
   };

'''

2.  Classes
    '''
    class Cookie {
    constructor(name, isGlutenFree){
    this.name = name;
    this.isGlutenFree = isGlutenFree;
    }

        eatCookie(){
            console.log("I am eating " + this.name);
        }

    }

'''

### Conditionals

`&&` and
`||` or
`if (condition) { block that runs if true }`

### Loops

'''
for (let i=0; i< names.length; i++) { # some code here...
}
'''
