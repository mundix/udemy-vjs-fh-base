

const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Iroman',
    // power: 'Dinero'
}

// a la desestructuracion de le puede poenr valor por defecto
const { age, name, codeName, power = 'No tiene poder' } = person

// console.log(name)
// console.log(age)
// console.log(codeName)
// console.log(power)

// const createHero = (person) => {
    //pueso usar la desestrucutracion en el argumento
// const createHero = ({ name, age, codeName, power = 'Sin Poder' }) => {

//     // const { name, age, codeName, power = 'Sin Poder' } = person

//     return { 
//         id: 111223333,
//         //cuando tienen el mismo nombre las variables , se obvia ponerlo name:name , se pone solo name
//         // name: name, 
//         name, 
//         age,
//         codeName,
//         power
//     }
// }

//misma funcion pero sin el return , se usa ( parentesis que devuelv eel obj { id, name ...})
const createHero = ({ name, age, codeName, power = 'Sin Poder' }) => ({id:12344, age, name, codeName, power: 'Sin Poder'})

console.log(createHero(person))