let velocidade = 80

while ( velocidade > 0) {
  alert("O carro esta a " + velocidade + " m/h")
  velocidade -= 20
  alert("Diminuindo 20km/h")

  if (velocidade === 40) {
    break
  }
}

alert("O carro parou")