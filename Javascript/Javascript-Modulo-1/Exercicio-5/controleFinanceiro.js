// Solicita ao usuário a quantidade de dinheiro e a armazena na variável 'money'
let money = parseFloat(prompt("Qual sua quantidade de dinheiro?"));

// Define a variável 'options' com o valor inicial vazio
let options = "";

// Inicia o loop 'do-while'
do {
  // Exibe um prompt com as opções disponíveis e o saldo atual
  options = prompt(
    "Saldo atual R$:" +
      money +
      "\n1 - Adicionar" +
      "\n2 - Retirar" +
      "\n3 - Encerrar"
  );

  // Verifica o valor da variável 'options' usando a estrutura 'switch'
  switch (options) {
    case "1":
      // Se o valor for "1", solicita ao usuário a quantidade de dinheiro a ser adicionada e a adiciona à variável 'money'
      money += parseFloat(
        prompt("Qual quantidade de dinheiro quer adicionar?")
      );
      break;
    case "2":
      // Se o valor for "2", solicita ao usuário a quantidade de dinheiro a ser removida e a subtrai da variável 'money'
      money -= parseFloat(prompt("Qual quantidade de dinheiro quer remover?"));
      break;
    case "3":
      // Se o valor for "3", exibe um alerta informando o encerramento
      alert("Encerrando....");
      break;
    default:
      // Se o valor não corresponder a nenhuma das opções anteriores, exibe um alerta informando que a opção é inválida
      alert("Opção inválida");
      break;
  }
} while (options !== "3");
// O loop continua enquanto o valor da variável 'options' for diferente de "3"
