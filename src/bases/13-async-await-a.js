// Trabajando con Async y Await 


const miPromesa = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() =>{
            // resolve('Tenemo un valor de la promesa')
            reject('Reject en Mi promesa')
        }, 2000)
    })
}


// const medirTiempoAsync = () =>{
const medirTiempoAsync = async  () =>{

    try {
        console.log("Inicio")
    
        // await miPromesa().then( console.log)
        const respuesta = await miPromesa()
        console.log(respuesta)
        
        console.log("Fin")
        // return 'Fin de medir tiempo async' 
    } catch (error) {
        // return 'Catch en meditTiempoAsync' //Esto no sera un catch a menos que usemos el throw 
        throw 'Error al recibir los datos medirTiempoAsync'
    }

    
}


// miPromesa().then( console.log)

medirTiempoAsync()
.then( valor => console.log('THEN exitoso:', valor))
.catch( (err) => console.log('ERROR:',err))