// O parâmetro é a entrada da função.

// Ele é como uma variável que fica disponível dentro da função
// mas que é informada na hora de chamar a função
function dobro(x) {
  alert("O dobre de " + x + " é " + (x * 2));
}
// dobro(5)
// dobro(7)

// Se uma função for chamada sem informar o parâmetro
// o valor usado para ele será o undefined
dobro();

// Mas podemos declarar um valor padrão para um parãmetro, assim,
// se ele não for informado, o valor padrão será usado no lugar do undefined
function dizerOla(nome = "mundo") {
  alert("Olá, " + nome + "!");
}
// dizerOla("Nome")
// dizerOla()

function soma(a, b) {
  alert("O resultado da soma é " + (a + b));
}

// soma(7, 6)

// Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último
function criarUsuario(nome, email, senha, tipo = "admin") {
  const usuario = {
    nome: nome,
    email, //mesmo que email: email,
    senha,
    tipo,
  };
  console.log(usuario)
}

criarUsuario("User01", "User01@email.com", "1234")

// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
  // ...
}
parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")

function parametrosDoJeitoCerto(usuario) {
  // ...
}

// Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  aniversario: "",
  endereco: ""
}
parametrosDoJeitoCerto(dadosDoUsuario)