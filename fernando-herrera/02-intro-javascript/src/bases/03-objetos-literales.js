//Objetos literales
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 12345,
        lat: 14.2312,
        lng: 34.9254545
    }
};

//console.log({persona});//como el nombre de la llave es el mismo a la estructura, no es necesario poner el nombre de la llave
const persona2 = {...persona};//NULLISH OPERATOR Se ha clonado con los valores iniciales Y NO es la referencia al otro objeto
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);
