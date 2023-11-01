//promises 
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

//resolve cuando se cumpla la promesa y reject cuando pasa algo y no se respondió positivamente
const promise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve();//console.log('2 seconds later')
    }, 2000);
});

promise
    .then( ()=>{ console.log('Then of the promise 2 seconds later'); } )//when promise ends
    .catch( ()=> {} )
    .finally( ()=>{} )