// algo va a suceder, ahora, en el futuro o nunca
const somethingWillHappen = () =>{
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else{
            reject('Whoops!');
        }
    })
}


somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err))


// -----------------------------------------------

const somethingWillHappen2 = () =>{
    return new Promise((resolve, reject) =>{
        if (true){
            setTimeout(() => {
                resolve('True');
            }, 3000)
        } else{
            const error = new Error('Whoopes');
            reject(error)
        }
    })
}

somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err))


Promise.all([somethingWillHappen(), somethingWillHappen()])
.then(response =>{
    console.log('Array of results', response)
})
.catch(err => {
    console.error(err);
})