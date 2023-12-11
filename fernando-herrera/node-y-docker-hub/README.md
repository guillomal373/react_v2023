NestJS in 100 Seconds
https://www.youtube.com/watch?v=0M8AYU_hPas

#NestJS Github
https://github.com/nestjs/nest

@Installing NestJs - First Steps
https://docs.nestjs.com/first-steps


#Node y Docker: Crear y subir imagen a Docker Hub
https://www.youtube.com/watch?v=l-UZQjdPUAI&list=PLCKuOXG0bPi3-FzU3rz2ld8jY8t60mS5u
https://github.com/Klerith/docker-nest-app/tree/main

COMMANDS:
1. docker run -p 80:3000 --name node-app nest-rest  // el puerto 3000 se va a mostrar como el puerto 80
2. docker image tag nest-rest guillomal373/nest-rest-prod  // se le cambia el nombre a la imagen a 'guillomal373/nest-rest-prod' para poder subirla a docker hub
3. docker push guillomal373/nest-rest-prod // al no darle tag esta queda como "latest", EL PROBLEMA ES QUE AL HACER UN NUEVO PUSH no se va a sobreescribir, es mejor con el tag de versión
4. docker push guillomal373/nest-rest-prod:1.0.0
5. cada vez q se suba con cambios se hace todo nuevamente desde el paso 3 o 4