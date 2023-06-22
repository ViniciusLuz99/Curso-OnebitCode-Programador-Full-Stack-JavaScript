const baralho = [];
let menu = "";

do {
  menu = prompt(
    "Cartas no baralho: " +
      baralho.length +
      "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
  );

  switch (menu) {
    case "1":
      const novaCarta = prompt("Qual é a carta?");
      baralho.push(novaCarta);
      break;
    case "2":
      const removerCarta = baralho.pop();
      if (!removerCarta) {
        alert("Não á uma carta no baralho");
      } else {
        alert("Você puxou um(a) carta" + removerCarta);
      }
      break;
    case "3":
      alert("Saindo");
      break;
    default:
      alert("Opção Invalida");
  }
} while (menu !== "3");
