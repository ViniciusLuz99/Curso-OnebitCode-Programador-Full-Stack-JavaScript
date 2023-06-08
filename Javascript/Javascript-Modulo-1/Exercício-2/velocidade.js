const vehicle1 = prompt("Informe o veiculo 1");
const speed1 = parseFloat(prompt("Informe a velocidade do veiculo 1"));

const vehicle2 = prompt("Informe o veiculo 2");
const speed2 = parseFloat(prompt("Informe a velocidade do veiculo 2"));

if (speed1 > speed2) {
  alert(vehicle1 + " é mais rapido que " + vehicle2);
} else if (speed2 > speed1) {
  alert(vehicle2 + " é mais rapido que " + vehicle1);
} else {
  alert("Estão na mesma velocidade!")
}
