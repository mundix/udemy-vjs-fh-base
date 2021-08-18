const nombre = 'Edmundo'
const apellido = 'Pichardo'

// const nombreCompleto = nombre + ' ' + apellido
//Template String se llama esto  `${variable}`
const nombreCompleto = `${nombre} ${apellido}` //<- back tick "`" 


function getSaludo(nombre) {
     return 'Hole ' + nombre
}

// console.log(nombreCompleto)
console.log(`Este es un texto: ${getSaludo(nombre)}`)