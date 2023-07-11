// Função para adicionar um jogador à lista do time
function addPlayer(){
  // Obtém os valores dos campos de entrada de texto
  const position = document.getElementById('position').value;
  const name = document.getElementById('name').value;
  const number = document.getElementById('number').value;

  // Exibe uma janela de confirmação com os detalhes do jogador a ser escalado
  const confirmation = confirm("Escalar " + name + " Como " + position + "?");

  // Se a confirmação for verdadeira
  if (confirmation) {
    // Obtém a lista de times
    const teamList = document.getElementById("team-list");
    // Cria um novo elemento de lista (li) para o jogador
    const playerItem = document.createElement('li');
    // Atribui um id único ao elemento de jogador
    playerItem.id = 'player-' + number;
    // Define o texto do elemento de jogador com os detalhes do jogador
    playerItem.innerText = position + ": " + name + "(" +number + ")";

    // Adiciona o elemento de jogador como filho da lista de times
    teamList.appendChild(playerItem);

    // Limpa os campos de entrada de texto
    document.getElementById('position').value = "";
    document.getElementById('name').value = "";
    document.getElementById('number').value = "";
  }
}

// Função para remover um jogador da lista do time
function removePlayer(){
  // Obtém o número do jogador a ser removido
  const number =  document.getElementById('numberToRemove').value;
  // Obtém o elemento de jogador a ser removido usando o seu id
  const playerToRemove = document.getElementById('player-' + number);

  // Exibe uma janela de confirmação com os detalhes do jogador a ser removido
  const confirmation = confirm("Remover o " + playerToRemove.innerText + "?");

  // Se a confirmação for verdadeira
  if (confirmation){
    // Remove o elemento de jogador da lista de times
    document.getElementById('team-list').remove(playerToRemove);
    // Limpa o campo de entrada de texto
    document.getElementById('numberToRemove').value = '';
  }
}
