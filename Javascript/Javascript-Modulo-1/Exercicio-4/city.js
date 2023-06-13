const touristName = prompt("Qual seu nome?");
let question = prompt("Já visitou alguma cidade?");
let city = "";

while (question == "sim") {
  const cityName = prompt("Qual cidade?");
  city.push(cityName);
  question = prompt("visitou alguma outra cidade?");

  if (question === "nao") alert(touristName + "visitou " + cityName);
  break;
}
