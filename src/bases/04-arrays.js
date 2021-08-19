

const arreglo = [1,2,3,4]
arreglo.push(5)

//parsando por referncia con operador sptread 
const arreglo2 = [...arreglo]

arreglo2.push(6)

//es unmetodo que recibe un callback 
const arreglo3 = arreglo2.map(function(n) {
    return n*2; //multiplado por 2 
});

arreglo3.push(14)

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)
