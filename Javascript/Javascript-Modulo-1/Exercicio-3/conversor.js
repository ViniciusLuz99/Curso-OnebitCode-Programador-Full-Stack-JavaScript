const converter = prompt("Qual numero vocé quer converter?");
const converterMedida = prompt(
  "para qual medida quer converter este valor?[mm] [cm] [dm] [dam] [hm] [km]"
);

const convertedNum = parseFloat(converter);

switch (converterMedida) {
  case "mm":
    alert(convertedNum + "mm");
    break;
  case "cm":
    alert(convertedNum + "cm");
    break;
  case "dm":
    alert(convertedNum + "dm");
    break;
  case "dam":
    alert(convertedNum + "dam");
    break;
  case "hm":
    alert(convertedNum + "hm");
    break;
  case "km":
    alert(convertedNum + "km");
    break;
  default:
    alert("Invalido")
}
