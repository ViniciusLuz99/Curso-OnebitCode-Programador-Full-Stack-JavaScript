const resultado = prompt("Escolha 1 / 2 / 3");

const resultadoNumerico = parseFloat(resultado)

switch (resultadoNumerico) {
  case 1:
    alert("Resultado é '1'");
    break;
  case 2:
    alert("Resultado é '2'");
    break;
  case 3:
    alert("Resultado é '3'");
    break;
  default:
    alert("Não é numero de 1 a 3!")
}
