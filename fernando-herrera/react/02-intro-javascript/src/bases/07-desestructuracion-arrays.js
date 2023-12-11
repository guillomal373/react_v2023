//Desestructuración: La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.
//Asignación desestructurante

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

//desestructuración arreglos

const personajes = ['Goku', 'Vegetea', 'Trunks'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [goku] = personajes;
console.log(goku);

//ignorando la primera y segunda posición del array
const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () =>{
    return ['ABC', 123]
}
const arr = retornaArreglo();
console.log(arr);
//o 
const [letras, numero] = retornaArreglo();
console.log(`${letras}: ${numero}`);

//Tarea
const useState = (valor) => {
    return [valor, ()=>{ console.log('Hola Mundo')}]
}
//const arr2 = useState('Goku');
//console.log(arr2);
//Acá se está llamando la función en la posición 1 del array "arr2"
//arr2[1]();

//1. la primera posición del arreglo se llamará nombre
//2. la segunda posición se llamará "setNombre"
const [nombre, setNombre] = useState('Goku');
console.log(nombre);
setNombre();