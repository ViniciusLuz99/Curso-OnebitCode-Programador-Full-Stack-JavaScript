//Operador spread, permite "espalhar" os elementos de um  objeto interavel, como um array ou string
// Utiliza tres pontos ...interableObject

// pode ser usado para:
//Passar varios parametros de uma vez
//Clonar objetos interaveis
//fazer manipulações sem alterar o objeto original
//Transfomar strings em arrays

const towns = ["Braga", "Porto", "Vila do Conde", "Bragança", "Coimbra"];
console.log(towns);
console.log(...towns); // operador spread
console.log(...towns[0]); // console.log(B, r, a, g, a)

const townsCopy = towns
townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({towns, townsCopy})
// alterou o array original, porque e uma referência ao mesmo array

// para isso usamos o operador spread porque ele cria uma cópia do array original e não altera o array original
const townsClone = [...towns]

townsClone.push('Alburqueque')
console.log({towns, townsCopy, townsClone})


//
const townsObj =  {...towns}
const townsObjClone = {...townsObj}

townsObjClone.test = "test"

console.log({townsObj, townsObjClone})