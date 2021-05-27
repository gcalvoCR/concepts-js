// Default params

function newFunction(name, age, country){
    var name = name || 'Gabriel';
    var age = gae || 32;
    var country = country || 'CR';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'Gabriel', age = 32, country = 'CR'){
    console.log(name, age, country);
};


newFunction2();
newFunction2('Ricardo')



// --------- Concatenation  --------- 

let hello = "Hello";
let world = "World";
let epicPhase = hello + " " + world;

console.log(epicPhase);

// es6 with template literals
let epicPhrase2 = `${hello} ${world}`




//---------  multilineas --------- 

let lorem = "Lorem ipsum. Commodi \n"
+ "otra frase epica que necesitamos"

// 6s with template literals
let lorem2 = `Lorem ipsum. Commodi
otra frase epica que necesitamos`

console.log(lorem)
console.log(lorem2)


//---------  destructuracion ---------

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age)

// es6
let {name, age } = person;

console.log(name, age);


//---------  operador de propagacion --------- Spread syntax (...)

let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yesica', 'Camila']

let education = ['David', ...team1, ...team2];

console.log(education)


//-------- var, let and const ------------

// let is for scope
// var is global
// const is inmutable


// ------------ objetos ------------
let name = 'oscar';
let age = 32;

obj = {name: name, age: age};

// es6 -> key and value
obj2 = {name, age};

// ----------- arrow functions ----------

const names = [
    {name: 'Gabriel', age: 32},
    {name: 'Yesica', age: 27}
]

let listOfNames = names.map(function (item) {
    console.log(item.name)
})

console.log(listOfNames)

let listOfNames2 = names.map((item) =>{
    console.log(item.name)
})

const square = num => num* num;

const res = square(2)

console.log(res)

// ----------- Promises ----------

const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if (true){
            resolve('Hey')
        } else{
            reject('Upps!')
        }
    })
}

helloPromise()
.then(response => console.log(response))
.catch(err => console.log(err))


// ----------- Classes ----------

class calculator{

    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

// ----------- Import / export ----------

import { hello } from './module';

hello();


// ----------- Generators ----------

function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }

}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);




