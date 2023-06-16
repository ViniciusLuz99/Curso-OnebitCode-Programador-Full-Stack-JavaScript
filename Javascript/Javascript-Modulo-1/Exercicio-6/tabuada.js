// Solicita ao usuário um número para ser multiplicado
let numero = parseFloat(prompt("Digite um número para ser multiplicado:"));
// Inicializa a variável 'resultado' como zero
let resultado = 0;
// Inicializa a variável 'indice' como zero
let indice = 0;

// Loop 'for' que realiza a multiplicação do número pelo índice
// e exibe o resultado em cada iteração
// A estrutura do loop é: inicialização; condição; finalização
for (
  alert("Inicializando a multiplicação...."); // Inicialização, exibe uma mensagem de inicialização
  indice <= 20; // Condição, o loop continuará enquanto o 'índice' for menor ou igual a 20
  indice++, resultado = numero * indice // Finalização, incrementa o 'índice' e calcula o 'resultado'
) {
  alert(numero + " X " + indice + " = " + resultado); // Exibe o resultado da multiplicação
}
