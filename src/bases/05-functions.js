

// function saludar(zxy){
    // return `Hola ${zxy}`
// }
//Este codigo es mas seguro que el que teniamos anteriomente
// const saludar  = function (zxy){
//     return `Hola ${zxy}`
// }
//Asi cambia a funciond e fecha 'Landa Function or Arrow function' 
//una ventaja que el cuerpo tieneun univo return , puedes obviar las llaves, y obviar la palabra return 
// const saludar  =  (zxy) => {
//     return `Hola ${zxy}`
// }
// asi quedaria mas simple y los parentesis son opcionales, 
//pero son obligatorio cuando tiene mas de un argumento
const saludar  =  (nombre = 'Peter') => `Hola ${nombre}` 



const nombre = 'Tony'

// console.log(saludar(nombre))
// console.log(saludar()) //imprime Peter

const getUser = () => {
    return  {
        uid: 'ABC123',
        username: 'Tony001'
    }
}

// console.log(getUser())

const heroes = [{
    id:1,
    name: 'Batman'
},{
    id:2,
    name: 'Superman'
}]

const existe = heroes.some((heroe) => heroe.id === 2)
const heroe = heroes.find((heroe) => heroe.id === 2)
const {name, id} = heroes.find((heroe) => heroe.id === 1)

console.log(existe)
console.log(heroe)
console.log(name)