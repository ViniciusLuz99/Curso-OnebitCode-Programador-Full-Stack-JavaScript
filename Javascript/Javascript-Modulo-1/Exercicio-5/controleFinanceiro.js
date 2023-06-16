let money = parseFloat(prompt("Qual sua quantidade de dinheiro?"));
let options = "3";

do {
  options = prompt(
    "Saldo atual R$:" +
      money +
      "\n1 - Adicionar" +
      "\n2 - Retirar" +
      "\n3 - Encerrar"
  );
  switch (options) {
    case "1":
      money += parseFloat(
        prompt("Qual quantidade de dinheiro quer adicionar?")
      );
      break;
    case "2":
      money -= parseFloat(prompt("Qual quantidade de dinheiro quer remover?"));
      break;
    case "3":
      alert("Encerrando....");
      break;
    default:
      alert("Opção invalida");
      break;
  }
} while (options !== "3");
