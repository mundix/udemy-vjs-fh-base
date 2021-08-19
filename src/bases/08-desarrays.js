//Desestructuracion de Arreglo , la posicion es lo imporante a diferencia del objeto 


const characters  = ['Goku', 'Vegeta', 'Trunks']

const goku = characters[0]
const vegeta = characters[1]
const trunks = characters[2]

//quiero desestructura arreglo 
// const [g, v, t] = characters
const [, , t] = characters //si solo me interesa el tercer elemento 
// console.log(goku, vegeta, trunks)
// console.log(g, v, t)
// console.log( t)


// const returnArray = ([letters, numbers]) => {
//     return [letters, numbers]
// }
const returnArray = ([letters, numbers]) => ([letters, numbers])

const [letters, numbers] = returnArray(['XYZ', 987])

console.log(letters, numbers)
