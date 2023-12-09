//Async | Await

// sin Async | Await
//const getImagenPromesa = () => new Promise((resolve)=>{resolve('http://www.mrvaldemar.com/asdf')})
//getImagenPromesa().then(console.log); 


//con Async | Await
const getImagen = async() => {

        try {
                //como es un response por poner el await antes del fetch entonces va a parar hasta que llegue respuesta pq ahora es RESPONSE
                const apiKey='MQTeHY7O1dmlmUnG0886vdMxNcaFPSMJ'; //Giphy -> https://developers.giphy.com/
                const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
                const {data} = await resp.json();
                const {url} = data.images.original;
                const img = document.createElement('img');
                img.src = url;
                document.body.append(img);
        } catch (error) {
                console.error('UPS')
                console.error(error)
                
        }
}


getImagen();