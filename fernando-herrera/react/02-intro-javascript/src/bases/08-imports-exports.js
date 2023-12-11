//Como importar archivo, en el archivo origen hay q decir 'export' y acá 'import'
//opción 1 import
//import { heroes } from "./data/heroes";
//opcion 2 export default -- mejor opción 1, más explícito
//import heroes from "./data/heroes";

//opción 3 con default y export al final del archivo heroes.js
//heroes es default y owners no, por eso están las llaves
import heroes, {owners} from '../data/heroes';

//console.log(owners);

//Utilizando funciones flecha y destructuring
//retornar solo un objeto
const getHeroeById = (id) =>{
    //callback, en cada heroe revisa la condición
    return heroes.find((heroe) => heroe.id === id);
}
//console.log( getHeroeById(2) );

//retornar varios objetos, usar filter
const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner)
}
//console.log(getHeroesByOwner('DC'));
//console.log(getHeroesByOwner('Marvel'));

export {getHeroeById, getHeroesByOwner};