// Função para adicionar um novo contato
function addContact() {
  // Obtém a seção de contatos pelo ID
  const contactSection = document.getElementById("contacts-list");

  // Cria um elemento h3 para exibir o título "Contato"
  const h3 = document.createElement('h3');
  h3.innerText = 'Contato';

  // Cria uma lista não ordenada (ul) para conter os elementos do contato
  const ul = document.createElement("ul");

  // Cria um elemento li para o nome
  const nameLi = document.createElement('li');
  nameLi.innerText = "Nome: ";

  // Cria um campo de entrada (input) para o nome
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'fullname';

  // Adiciona o campo de entrada de nome ao elemento li
  nameLi.appendChild(nameInput);

  // Adiciona o elemento li ao elemento ul
  ul.appendChild(nameLi);
  ul.appendChild(document.createElement('br'));

  // Cria um elemento li para o telefone
  const phoneLi = document.createElement('li');
  phoneLi.innerText = "Telefone: ";

  // Cria um campo de entrada (input) para o telefone
  const phoneInput = document.createElement('input');
  phoneInput.type = 'text';
  phoneInput.name = 'phone';

  // Adiciona o campo de entrada de telefone ao elemento li
  phoneLi.appendChild(phoneInput);

  // Adiciona o elemento li ao elemento ul
  ul.appendChild(phoneLi);
  ul.appendChild(document.createElement('br'));

  // Cria um elemento li para o endereço
  const addressLi = document.createElement('li');
  addressLi.innerHTML = '<label for="address">Endereço: </label>';

  // Cria um campo de entrada (input) para o endereço
  const addressInput = document.createElement('input');
  addressInput.type = "text";
  addressInput.name = "address";
  addressInput.id = "address";

  // Adiciona o campo de entrada de endereço ao elemento li
  addressLi.appendChild(addressInput);

  // Adiciona o elemento li ao elemento ul
  ul.appendChild(addressLi);
  ul.appendChild(document.createElement('br'));

  // Adiciona os elementos h3 e ul à seção de contatos
  contactSection.append(h3, ul);
}

// Função para remover o último contato adicionado
function removeContact() {
  // Obtém a seção de contatos pelo ID
  const contactSection = document.getElementById('contacts-list');

  // Obtém todos os elementos h3 (títulos) dentro da seção de contatos
  const titles = document.getElementsByTagName('h3');

  // Obtém todos os elementos ul (listas) dentro da seção de contatos
  const contacts = document.getElementsByTagName('ul');

  // Remove o último título adicionado da seção de contatos
  contactSection.removeChild(titles[titles.length - 1]);

  // Remove a última lista de contatos adicionada da seção de contatos
  contactSection.removeChild(contacts[contacts.length -1]);
}
