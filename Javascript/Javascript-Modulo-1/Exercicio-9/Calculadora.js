let menu = "";

function areaTriangulo() {
  const base = parseFloat(prompt("Digite o numero da base"));
  const altura = parseFloat(prompt("Digite o numero da altura"));
  return (base * altura) / 2;
}

function areaRetangulo() {
  const base = parseFloat(prompt("Digite o numero da base"));
  const altura = parseFloat(prompt("Digite o numero da altura"));
  return base * altura;
}

function areaQuadrado() {
  const base = parseFloat(prompt("Digite o numero da base"));
  const altura = parseFloat(prompt("Digite o numero da altura"));
  return base * altura;
}

function areaTrapezio() {
  const baseMi = parseFloat(prompt("Digite o numero da base maior"));
  const baseMn = parseFloat(prompt("Digite o numero da base menor"));
  const altura = parseFloat(prompt("Digite o numero da altura"));
  return ((baseMi + baseMn) * altura) / 2;
}

do {
  menu = prompt(
    "Bem-vindo à Calculadora geométrica, escolha uma das opções abaixo:" +
      "\n1 - Área do triângulo: base * altura / 2" +
      "\n2 - Área do retângulo: base * altura" +
      "\n3 - Área do quadrado: lado²" +
      "\n4 - Área do trapézio: (base maior + base menor) * altura / 2" +
      "\n5 - Área do círculo: pi * raio² (considere pi = 3.14)" +
      "\n6 - Sair"
  );

  let resultado;
  switch (menu) {
    case "1":
      resultado = areaTriangulo();
      alert("A área do triângulo é: " + resultado);
      break;
    case "2":
      resultado = areaRetangulo();
      alert("A área do retângulo é: " + resultado);
      break;
    case "3":
      resultado = areaQuadrado();
      // alert("A área do quadrado é: " + resultado);
      alert("Cara eu n sei como fazer isso");
      break;
    case "4":
      resultado = areaTrapezio();
      alert("A área do trapézio é: " + resultado);
      break;
    case "5":
      // Implemente a função areaCirculo() para calcular a área do círculo
      // e exiba o resultado usando um alert.
      break;
    case "6":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (menu !== "6");
