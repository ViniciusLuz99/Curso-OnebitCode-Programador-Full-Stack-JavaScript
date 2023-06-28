// Função para calcular a área de um triângulo
function areaTriangulo() {
  const base = parseFloat(prompt("Digite o numero da base"));
  const altura = parseFloat(prompt("Digite o numero da altura"));
  return (base * altura) / 2;
}
// Função para calcular a área de um retângulo
function areaRetangulo() {
  const base = parseFloat(prompt("Digite o numero da base"));
  const altura = parseFloat(prompt("Digite o numero da altura"));
  return base * altura;
}
// Função para calcular a área de um quadrado
function areaQuadrado() {
  const lado = parseFloat(prompt("Digite o numero do lado do quadrado"));
  return lado * lado;
}
// Função para calcular a área de um trapézio
function areaTrapezio() {
  const baseMi = parseFloat(
    prompt("Digite o numero da base maior do trapézio")
  );
  const baseMn = parseFloat(
    prompt("Digite o numero da base menor do trapézio")
  );
  const altura = parseFloat(prompt("Digite o numero da altura do trapézio"));
  return ((baseMi + baseMn) * altura) / 2;
}
// Função para calcular a área de um círculo
function areaCirculo() {
  const raio = parseFloat(prompt("Digite o numero do raio do circulo"));
  return 3.14 * raio * raio;
}
// Função para exibir o menu e obter a escolha do usuário
function showMenu() {
  return prompt(
    "Bem-vindo à Calculadora geométrica, escolha uma das opções abaixo:" +
      "\n1 - Área do triângulo: base * altura / 2" +
      "\n2 - Área do retângulo: base * altura" +
      "\n3 - Área do quadrado: lado²" +
      "\n4 - Área do trapézio: (base maior + base menor) * altura / 2" +
      "\n5 - Área do círculo: pi * raio² (considere pi = 3.14)" +
      "\n6 - Sair"
  );
}
// Função principal para executar a calculadora
function executar() {
  let menu = "";
  do {
    menu = showMenu();
    let resultado;

    switch (menu) {
      case "1":
        resultado = areaTriangulo();
        break;
      case "2":
        resultado = areaRetangulo();
        break;
      case "3":
        resultado = areaQuadrado();
        break;
      case "4":
        resultado = areaTrapezio();
        break;
      case "5":
        resultado = areaCirculo();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida!");
    }

    if (resultado) {
      alert("Resultado: " + resultado);
    }
  } while (menu !== "6");
}
// Chama a função executar para iniciar a calculadora
executar();
