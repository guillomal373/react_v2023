//Desestructuración: La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.
//Asignación desestructurante

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

//tedioso hacer esto llaves veces
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

//cómo podemos hacerlo sin usar la palabra persona
// const {nombre, edad, clave} = persona;
// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = (usuario) => {
    console.log(usuario)
}
retornaPersona(persona);

//o si la propiedad no existe se le asigna un valor por defecto
const retornaPersona2 = ({nombre, edad, rango = 'Capitán'}) => {
    console.log(nombre, edad, rango)
}
retornaPersona2(persona);

//tarea
const useContext = ({nombre, edad, clave, rango = 'Capitán'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3215
        }
    }
}//EXTRAYENDO OBJETOS ANINADOS
const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);
console.log(nombreClave, anios);
//console.log(latlng)//NO SIRVE 
console.log(lat, lng);