const menu = prompt(
  "Digite numero de uma opção. \n Opção: 1 \n Opção: 2 \n Opção: 3 \n Opção: 4 \n Sair: 5"
);

do {
  alert("A opção Escolhida é " + menu);
  menu = prompt(
    "Digite numero de uma opção. \n Opção: 1 \n Opção: 2 \n Opção: 3 \n Opção: 4 \n Sair: 5"
  );
} while (menu >= 4);

