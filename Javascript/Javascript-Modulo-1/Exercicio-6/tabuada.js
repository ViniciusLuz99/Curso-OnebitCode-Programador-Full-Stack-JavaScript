// Solicita ao usuário um número para ser multiplicado
const numero = parseFloat(prompt("Digite um número para ser multiplicado:"));

// Inicializa a variável 'resultado' como uma string vazia
let resultado = "";

// Inicializa a variável 'fator' como 1
let fator = 1;

// Loop 'for' que realiza a multiplicação do número pelo fator
// e concatena o resultado em uma string
// A estrutura do loop é: inicialização; condição; finalização
for (
  alert("Inicializando a multiplicação...."); // Inicialização, exibe uma mensagem de inicialização
  fator <= 20; // Condição, o loop continuará enquanto o 'fator' for menor ou igual a 20
  fator++ // Finalização, incrementa o 'fator'
) {
  resultado += " -> " + numero + " x " + fator + " = " + (numero * fator) + "\n";
}

// Exibe o resultado da multiplicação em forma de tabuada
alert("Resultado da tabuada de " + numero + ":\n" + resultado);
