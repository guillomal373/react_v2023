//Template Strings
const nombre = 'Guillermo';
const apellido = 'Malagón';

//const nombreCompleto = nombre+' '+apellido; //v1
const nombreCompleto = `${nombre} ${apellido}`; //v2 con template String, si se hacen enter también los renderiza
console.log(nombreCompleto);

function getSaludo(nombre){
    return `bienvenido ${nombre}`;
}

console.log(`Hola, ${getSaludo(nombre)}`);