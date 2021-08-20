
//Promises

import { getHeroById } from "./bases/09-imp-exp"

// console.log('Hola Mundo')


// //asi se inicializa una promesa 
// new Promise( (resolve, reject) => {
//     // el resolve y el reject depende de la respuesta 
//     console.log('cuerpo de la promesa')
//     // resolve('Promesa Resuelta', true)
//     //then recive un argumento opcional , y se pueden regresar tantos argumentos maximo 3 
//     resolve('Promesa Resuelta')
//     // reject('Promesa Resuelta con error') //uncaught error , no es un error de js es un error personalizado , de una promesa no atrapada, 
//     //para atrapar la promesa se usa el .catch(err)
// })
// // .then( (msg) => console.log( msg) )
// // .catch( (err) => console.log(err))
// .then( console.log ) // el mismo codigo
// .catch( console.log )// el mismo codigo
// console.log('Fin')

const getHeroByIdAsync = (id) => {
    //el promise tiene como argumento un callback de 2 argumentos resolve y reject
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            const hero = getHeroById(id)
            if(hero) {
                resolve( hero )
            }else{
                resolve('Heroe No Existe')
            }
        }, 1000)
    }) 
}

getHeroByIdAsync(1).then( h => console.log(h)).catch(console.log)