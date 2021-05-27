
// entries y length
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);

console.log(entries);
console.log(entries.length)

//Object values
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const values = Object.values(data);

console.log(values);


// Padding
const string = 'hello';
console.log(string.padStart(8, 'hi '))
console.log(string.padEnd(12, '-'))


// trailing commas, there could be a following version or not

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

// async y await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello world'), 3000)
        : reject(new Error('Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

const helloAsync2 = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
    
}

helloAsync();
helloAsync2();