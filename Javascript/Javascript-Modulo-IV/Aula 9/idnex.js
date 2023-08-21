//Parametros rest
//é uma tecnica que permite que uma função receba um número indeterminado de parâmetros, e que esses parâmetros sejam colocados em um array

//Exemplo 
function sum(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0);
}
console.log(sum(1, 1))
console.log(sum(1, 1, 2, 3, 4, 5))