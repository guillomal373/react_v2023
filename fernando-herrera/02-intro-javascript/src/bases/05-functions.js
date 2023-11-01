//Funciones

/*function saludar(nombre){
    return `Hola, ${nombre}`;
}*/

//Opción 1, mejor crear funciones de la siguiente manera, además no permite hacer algo como esto "saludar=30"
const saludar = function(nombre){
    return `Hola, ${nombre}`;
}
//Opción 2 de función, funcion flecha, 
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
//Opción 3 de función 
const saludar3 = (nombre) => `Hola, ${nombre}`;
//Opción 4
const saludar4 = () => `Hola mundo`;

console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Son Gohan'));
console.log(saludar4());

//Funciones muy usadas en react
const getUser = () => ({id: '123', nombre: 'donGuillo'});
console.log(getUser());

//Ejercicio
//1. Transformar a una función d flecha
//2. Tiene q retornar un objeto implícito
//3. Pruebas
const getUsuarioActivo = (nombre) => ({ uid: 'ABC567', username: nombre });
console.log(getUsuarioActivo('Fernando')); 