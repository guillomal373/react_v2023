//promises 
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

//Tarea
import {getHeroeById, getHeroesByOwner} from './bases/08-imports-exports';

//resolve cuando se cumpla la promesa y reject cuando pasa algo y no se respondió positivamente
/*const promise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        //Tarea importar el getHeroesById(2)
        const heroe = getHeroeById(2);
        resolve(heroe);//console.log('2 seconds later')
        //reject (heroe); // para q salga como catch
    }, 2000);
});

promise
    .then( (result)=>{ //when promise ends correctly
        console.log(`Heroe`, result); 
    } )
    .catch( (error)=> {
        console.error('Heroe error', error);
    } )
    .finally( ()=>{} )*/

//promesas con parámetros
const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(!heroe) reject(`No existe un heroe con el id ${id}`);
            resolve(heroe);//console.log('2 seconds later')
            //reject (heroe); // para q salga como catch
        }, 2000);
    });
};

getHeroeByIdAsync(3)
    //.then(result=>{ console.log('Heroe Async',result); })//también se puede
    .then(console.log)
    //.catch((err)=>{ console.warn(err); })//también se puede...
    .catch(console.warn)