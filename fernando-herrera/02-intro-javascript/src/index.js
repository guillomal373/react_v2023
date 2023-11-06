//Async | Await

// sin Async | Await
//const getImagenPromesa = () => new Promise((resolve)=>{resolve('http://www.mrvaldemar.com/asdf')})
//getImagenPromesa().then(console.log); 


//con Async | Await
const getImagen = async() => {
    return 'http://www.mrvaldemar.com/asdf';
    //el await ayuda a q el código sea SÍNCRONO
}

getImagen().then(console.log);
