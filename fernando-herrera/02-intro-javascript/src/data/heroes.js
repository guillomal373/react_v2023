//export opción 1
//export const heroes = [
//export opción 2, default -- mejor opción 1
//export default [

//opción 3, la 1 con default pero export abajo al final del archivo
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

const owners = ['DC', 'Marvel'];

//opción 3
//export default heroes;

// todo en el mismo export
export {
    heroes as default,
    owners
}