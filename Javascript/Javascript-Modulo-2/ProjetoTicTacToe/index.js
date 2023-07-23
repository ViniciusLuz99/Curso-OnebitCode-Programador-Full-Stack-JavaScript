// Variáveis globais úteis
const boardRegions = document.querySelectorAll("#gameBoard span");
let vBoard = [];
let turnPlayer = "";
let gameInProgress = false;

function noRefresh() {
  document.getElementById("start").addEventListener("click", function (event) {
    event.preventDefault(); // Impede que o formulário seja enviado e a página seja recarregada
    initializeGame();
  });
}
noRefresh()
function updateTitle() {
  const playerInput = document.getElementById(turnPlayer);
  document.getElementById("turnPlayer").innerText = playerInput.value;
}

function checkNames() {
  // Obter os nomes dos jogadores a partir dos campos de input
  const player1Name = document.getElementById("player1").value;
  const player2Name = document.getElementById("player2").value;
  // Verificar se os campos de nome estão vazios
  if (!player1Name || !player2Name) {
    // Exibir mensagem solicitando que os nomes sejam inseridos
    document.getElementById("message").innerText =
      "Por favor, insira os nomes dos jogadores!";
    // Adicionar a classe 'error' aos campos de input vazios
    document.getElementById("player1").classList.add("error");
    document.getElementById("player2").classList.add("error");
    return false; // Retorna false para indicar que a verificação falhou
  }
  // Se os campos estiverem preenchidos, limpar a mensagem
  document.getElementById("message").innerText = "";
  return true; // Retorna true para indicar que a verificação foi bem-sucedida
}

function initializeGame() {
  noRefresh();
  // Verificar os nomes dos jogadores usando a função checkNames
  if (!checkNames()) {
    return; // Sai da função e não inicia o jogo
  }
  gameInProgress = true; // start no game
  // Inicializa as variáveis globais
  vBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  turnPlayer = "player1";
  // Ajusta o título da página (caso seja necessário)
  document.querySelector("h2").innerHTML =
    'Vez de: <span id="turnPlayer"></span>';
  document.querySelector("h2").classList.remove("win");
  updateTitle();

  // Alterar o texto do botão para "Reiniciar" ou "Iniciar" dependendo do estado do jogo
  const startButton = document.getElementById("start");
  if ((gameInProgress = true)) {
    startButton.innerText = "Reiniciar";
    document.getElementById("start").classList.remove("win");
  } else {
    startButton.innerText = "Iniciar";
  }

  // Limpa o tabuleiro (caso seja necessário) e adiciona os eventos de clique
  boardRegions.forEach(function (element) {
    element.classList.remove("win");
    element.classList.remove("tablecolor");
    element.innerText = "";
    element.classList.add("cursor-pointer");
    element.classList.add("ready");
    element.addEventListener("click", handleBoardClick);
  });
}

// Verifica se existem três regiões iguais em sequência e devolve as regiões
function getWinRegions() {
  const winRegions = [];
  if (
    vBoard[0][0] &&
    vBoard[0][0] === vBoard[0][1] &&
    vBoard[0][0] === vBoard[0][2]
  )
    winRegions.push("0.0", "0.1", "0.2");
  if (
    vBoard[1][0] &&
    vBoard[1][0] === vBoard[1][1] &&
    vBoard[1][0] === vBoard[1][2]
  )
    winRegions.push("1.0", "1.1", "1.2");
  if (
    vBoard[2][0] &&
    vBoard[2][0] === vBoard[2][1] &&
    vBoard[2][0] === vBoard[2][2]
  )
    winRegions.push("2.0", "2.1", "2.2");
  if (
    vBoard[0][0] &&
    vBoard[0][0] === vBoard[1][0] &&
    vBoard[0][0] === vBoard[2][0]
  )
    winRegions.push("0.0", "1.0", "2.0");
  if (
    vBoard[0][1] &&
    vBoard[0][1] === vBoard[1][1] &&
    vBoard[0][1] === vBoard[2][1]
  )
    winRegions.push("0.1", "1.1", "2.1");
  if (
    vBoard[0][2] &&
    vBoard[0][2] === vBoard[1][2] &&
    vBoard[0][2] === vBoard[2][2]
  )
    winRegions.push("0.2", "1.2", "2.2");
  if (
    vBoard[0][0] &&
    vBoard[0][0] === vBoard[1][1] &&
    vBoard[0][0] === vBoard[2][2]
  )
    winRegions.push("0.0", "1.1", "2.2");
  if (
    vBoard[0][2] &&
    vBoard[0][2] === vBoard[1][1] &&
    vBoard[0][2] === vBoard[2][0]
  )
    winRegions.push("0.2", "1.1", "2.0");
  return winRegions;
}

// Desabilita uma região do tabuleiro para que não seja mais clicável
function disableRegion(element) {
  element.classList.remove("cursor-pointer");
  element.removeEventListener("click", handleBoardClick);
}

// Pinta as regiões onde o jogador venceu e mostra seu nome na tela
function handleWin(regions) {
  regions.forEach(function (region) {
    document
      .querySelector('[data-region="' + region + '"]')
      .classList.add("win");
  });
  document.getElementById("start").innerText = "Jogar Novamente!";
  document.getElementById("start").classList.add("win");
  if (regions.length === 0) {
    // Caso não haja regiões vencedoras (empate)
    document.querySelector("h2").classList.add("win");
    document.querySelector("h2").innerHTML = "Empate!";
    boardRegions.forEach(function (element) {
      element.classList.add("win");
    });
  } else {
    // Caso haja regiões vencedoras (vitória)
    const playerName = document.getElementById(turnPlayer).value;
    document.querySelector("h2").innerHTML = playerName + " venceu!";
    document.querySelector("h2").classList.add("win"); // Adicionar a classe "win" ao título para destacá-lo em verde
  }
  gameInProgress = false; //Fim de jogo
}

function handleBoardClick(ev) {
  if (!gameInProgress) {
    return; // Se o jogo estiver concluído, saia da função sem fazer nada
  }
  // Obtém os índices da região clicada
  const span = ev.currentTarget;
  const region = span.dataset.region; // N.N
  const rowColumnPair = region.split("."); // ["N", "N"]
  const row = rowColumnPair[0];
  const column = rowColumnPair[1];
  // Marca a região clicada com o símbolo do jogador
  if (turnPlayer === "player1") {
    span.innerText = "X";
    vBoard[row][column] = "X";
  } else {
    span.innerText = "O";
    vBoard[row][column] = "O";
  }
  // Limpa o console e exibe nosso tabuleiro virtual
  console.clear();
  console.table(vBoard);
  // Desabilita a região clicada
  disableRegion(span);
  // Verifica se alguém venceu
  const winRegions = getWinRegions();
  if (winRegions.length > 0) {
    handleWin(winRegions);
  } else if (vBoard.flat().includes("")) {
    turnPlayer = turnPlayer === "player1" ? "player2" : "player1";
    updateTitle();
  } else {
    handleWin([]);
  }
}
// Adiciona o evento no botão que inicia o jogo
document.getElementById("start").addEventListener("click", initializeGame);
