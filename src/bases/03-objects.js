const persona = {
     nombre: 'Tony',
     apellido: 'Stark',
     edad: 45,
     direccion: {
          ciudad: 'New York',
          zip: 53311,
          lat: 12.4423,
          lng: 23.45343
     }
}

//los objetos de pasanpor referencia
// const persona2 = persona //con el operador spreat 
const persona2 = { ...persona } //rompe la referencia 
persona2.nombre = 'Peter'
//Sufre cambio de persona2 por que apuntan al mismo lugar. Se mantiente la referencia al espacio de memtoria al cual apunta 
console.log(persona) //Peter
console.log(persona2) //Peter

