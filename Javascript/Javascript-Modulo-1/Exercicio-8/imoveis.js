const imoveis = [];
let menu = "";

do {
  menu = prompt(
    "Imoveis cadastrados = " +
      imoveis.length +
      "\n1 - Novo Cadastro de Imovel" +
      "\n2 - Consultar Imoveis Salvos" +
      "\n3 - Sair"
  );

  switch (menu) {
    case "1":
      const imovel = {}; //objeto imovel
      imovel.proprietario = prompt("Nome do proprietário:");
      imovel.quartos = prompt("Número de quartos:");
      imovel.banheiros = prompt("Número de banheiros:");
      imovel.garagem = prompt("Possui garagem? (Sim / Não)");
      const confirma = confirm(
        "Salvar o imovel?\n" +
          "\nProprietário: " +
          imovel.proprietario +
          "\nNumero de quartos " +
          imovel.quartos +
          "\nNumero de banheiros: " +
          imovel.banheiros +
          "\nPossui garagem? " +
          imovel.garagem
      );
      if (confirma) {
        2;
        imoveis.push(imovel);
        alert("Imóvel cadastrado com sucesso!");
      } else {
        alert("Cadastro cancelado com Sucesso");
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel: " +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nPossui Garagem? " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      2;
      alert("Saindo");
      break;
    default:
      alert("Opção Invalida");
  }
} while (menu !== "3");
