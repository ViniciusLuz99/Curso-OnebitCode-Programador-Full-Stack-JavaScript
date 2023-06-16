let menu = "";

do {
  // alert("A opção Escolhida é " + menu);
  menu = prompt(
    "Digite numero de uma opção." +
      "\n Opção: 1" +
      "\n Opção: 2" +
      "\n Opção: 3" +
      "\n Opção: 4" +
      "\n Sair: 5"
  );

  switch (menu) {
    case "1":
      alert("Opção 1 selecionada");
      break;
    case "2":
      alert("Opção 2 selecionada");
      break;
    case "3":
      alert("Opção 3 selecionada");
      break;
    case "4":
      alert("Opção 4 selecionada");
      break;
    case "5":
      alert("Encerrando....");
      break;
    default:
      alert("Opção invalida");
  }
} while (menu !== "5");
