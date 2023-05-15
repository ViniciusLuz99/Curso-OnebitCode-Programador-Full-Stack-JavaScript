const primeiroNome = prompt("Informe o primeiro nome do recruta:")
const sobrenome = prompt("Informe o sobrenome do recruta:")
const campoDeEstudo = prompt("Qual é o campo de estudo do recruta")
const anoDeNascimento = prompt("Ano de nascimento do recruta")

alert(
  "recruta Cadastrado com sucesso!\n" + 
  "\n Nome completo: " + primeiroNome + " " + sobrenome +
  "\n Campo de estudo: "  + campoDeEstudo +
  "\n Idade: " + (2023 - anoDeNascimento)
) //"\n" pula uma linha na string