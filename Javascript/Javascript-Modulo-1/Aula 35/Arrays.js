const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);

/*
Adicionar Elementos
*/

// push (adciona no final)
arr.push("Boromir"); // adiciona o elemento "Boromir" ao final do array
console.log(arr);

// unshift (adciona no começo)
arr.unshift("Boromir"); // adiciona o elemento "Boromir" no início do array
console.log(arr);

/*
Remover Elementos
*/

// pop (remover elemento do final do array)
arr.pop(); // remove o último elemento do array
// remover e transferir com pop
const ultimoElemento = arr.pop(); // remove e armazena o último elemento do array na variável "ultimoElemento"
console.log(arr);
console.log(ultimoElemento); // exibe o último elemento removido no console na variavel que foi armazenada

/*
Pesquisar por um Elemento
*/

// includes (descobre se um elemento esta ou não incluso)
const inclui = arr.includes("Gandalf"); // verifica se o elemento "Gandalf" está presente no array
console.log(inclui); // exibe o resultado da verificação no console (true ou false)

//indexOf (descobre a posição de um elemento no array)
const indice = arr.indexOf("Gandalf"); // encontra o índice do elemento "Gandalf" no array
console.log(indice); // exibe o índice do elemento no console

/*
Cortar e Concatenar
*/

//slice
const hobbits = arr.slice(0, 4); // extrai os elementos de índice 0 a 3 (Frodo, Sam, Merry, Pippin) em um novo array "hobbits"
const outros = arr.slice(-4); // extrai os últimos 4 elementos do array em um novo array "outros"
console.log(arr);
console.log(hobbits);
console.log(outros);
