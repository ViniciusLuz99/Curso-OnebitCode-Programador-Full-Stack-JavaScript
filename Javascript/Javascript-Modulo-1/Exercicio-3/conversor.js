const measurement = prompt("Insira uma medida em metros?");
const unit = prompt(
  "para qual medida quer converter este valor?" +
    "\n[mm] [cm] [dm] [dam] [hm] [km]"
);

const convertedNum = parseFloat(measurement);

switch (unit) {
  case "mm":
    alert("resultado " + convertedNum + "m = " + convertedNum * 1000 + "mm");
    break;
  case "cm":
    alert("resultado " + convertedNum + "m = " + convertedNum * 100 + "cm");
    break;
  case "dm":
    alert("resultado " + convertedNum + "m = " + convertedNum * 10 + "dm");
    break;
  case "dam":
    alert("resultado " + convertedNum + "m = " + convertedNum / 10 + "dam");
    break;
  case "hm":
    alert("resultado " + convertedNum + "m = " + convertedNum / 100 + "hm");
    break;
  case "km":
    alert("resultado " + convertedNum + "m = " + convertedNum / 1000 + "km");
    break;
  default:
    alert("Invalido");
}
