//Importaciones y Exportaciones JS
// import { owners } from './data/heroes'
//cuando hay una exportacion por defecto 
import superHeroes  from '../data/heroes'

// const [dc, marvel] = owners

// console.log(dc, marvel)
// console.log(superHeroes)


//Tarea 
// getHeroById ( id )
//user function de flecha 
//find

// const  getHeroById = (id) => {
//     return superHeroes.find((hero) => hero.id === id)
// }
export const  getHeroById = (id) => superHeroes.find((hero) => hero.id === id)

// const getHeroesByOwner = (owner) => {
//     return superHeroes.filter( (hero) => hero.owner === owner)
// }

export const getHeroesByOwner = (owner) => superHeroes.filter( (hero) => hero.owner === owner)


//Asi funcinoa

// import {getHeroById, getHeroesByOwner} from './bases/09-imp-exp'

// console.log(getHeroById(2))
// console.log(getHeroesByOwner('DC'))
