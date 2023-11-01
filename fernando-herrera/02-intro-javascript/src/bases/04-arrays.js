//Arreglos en JS
//const arreglo = new Array(); //v1
//const arreglo = new Array(100); //inicialmente con 100 posiciones
const arreglo = [1,2,3,4];//v2
//arreglo.push(1);//NO es recomendable, mejor usar spread

let arreglo2 = [...arreglo, 5];

const arreglox2 = arreglo2.map( function(value) {//map espera una función
    return value*2;
});



console.log(arreglo);
console.log(arreglo2);
console.log(arreglox2);