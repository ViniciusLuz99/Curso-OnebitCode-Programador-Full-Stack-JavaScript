const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// Map

const nomes = []
for (let i = 0; i < personagens.length; i++) {
  const personagem = personagens[i]
  nomes.push(personagem.nome)
}

const nomes2 = personagens.map(function (personagem) { //Agora usando Map
  return personagem.nome
})

console.log(nomes2)

// Filter

const orcs = []
for (let i = 0; i < personagens.length; i++) {
  if (personagens[i].raca === "Orcs") {
    orcs.push(personagens[i])
  }
}
console.log(orcs)

// filter: permite obter um novo array contendo apenas elementos específicos de um array existente
const orcs2 = personagens.filter(function (personagem){ //Usando Filter
  return personagem.raca === "Orc"
})
console.log(orcs2)

// Reduce

let nivelTotal1 = 0
for (let i = 0; i < personagens.length; i++) {
  nivelTotal += personagens[i].nivel
}
console.log(nivelTotal1)

// reduce: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final
const nivelTotal = personagens.reduce(function (acumulador, personagem) { //Usando reduce
  return acumulador + personagem.nivel
}, 0)

console.log(nivelTotal)

const racas = personagens.reduce(function (acumulador, personagem) {
  if (acumulador[personagem.raca]) {
    acumulador[personagem.raca].push(personagem)
  } else {
    acumulador[personagem.raca] = [personagem]
  }
  return acumulador
}, {})
console.log(racas)


// Sort
// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos

personagens.sort(function (a, b) {
  return a.nivel - b.nivel
})

console.log(personagens)

//Sem modificar um array existente
const personagensOrdenados = personagens.slice().sort(function (a, b) {
  return a.nivel - b.nivel
})
console.log(personagensOrdenados)