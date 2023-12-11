//fetch API -> https://developer.mozilla.org/es/docs/Web/API/Fetch_API
const apiKey='MQTeHY7O1dmlmUnG0886vdMxNcaFPSMJ'; //Giphy -> https://developers.giphy.com/

//RANDOM
const peticionGiphiApi = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//SEARCHING A WORD
//const searchWord = 'excellent';
//const peticionGiphiApi = fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchWord}`);

peticionGiphiApi
    .then( result=>result.json() )//esto es como un arrow function
        .then( ({data}) =>{//promesa anidada, se desestructura pq vienen la llave "data" dentro de "data" es decir {data}
                console.log(data);
                //RANDOM returns only one result
                const {url} = data.images.original;

                //SEARCHING A WORD RETURNS AN ARRAY
                //const {url} = data[0].images.original;
                const img = document.createElement('img');
                img.src = url;
                document.body.append(img);
        } )
    .catch( () => { console.warn })  