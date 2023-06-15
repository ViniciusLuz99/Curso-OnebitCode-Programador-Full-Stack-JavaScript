const touristName = prompt("Qual seu nome?");
let cities = "";
let contagem = 0;

let question = prompt("Já visitou alguma cidade? (sim/não)");

while (question === "sim") {
  let cityName = prompt("Qual cidade?");
  cities += " - " + cityName + "\n";
  contagem++;
  question = prompt("visitou alguma outra cidade? (sim/não)");
}

alert (
  "Turista: " + touristName +
  "\nQuantidade de cidades que visitou: " + contagem +
  "\nCidades visitadas:\n" + cities
)
