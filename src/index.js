
//Promises

console.log('Hola Mundo')


//asi se inicializa una promesa 
new Promise( (resolve, reject) => {
    // el resolve y el reject depende de la respuesta 
    console.log('cuerpo de la promesa')
    // resolve('Promesa Resuelta', true)
    //then recive un argumento opcional , y se pueden regresar tantos argumentos maximo 3 
    resolve('Promesa Resuelta')
    // reject('Promesa Resuelta con error') //uncaught error , no es un error de js es un error personalizado , de una promesa no atrapada, 
    //para atrapar la promesa se usa el .catch(err)
})
// .then( (msg) => console.log( msg) )
// .catch( (err) => console.log(err))
.then( console.log ) // el mismo codigo
.catch( console.log )// el mismo codigo
console.log('Fin')