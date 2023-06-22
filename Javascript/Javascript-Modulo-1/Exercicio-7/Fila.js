/*
Simulador de fila de espera
deve:
1-Mostrar um menu interativo
2 Menu Contendo:
Lista de Todos os pacientes, mostrando sua posição ao lado
Novo pasciente, Pede o nome e adiciona ele ao fim da fila
Consultar paciente, Que retira o primeiro da lista e mostra na tela o paciente consultado
3-Opção de Sair, caso contrario deve retornar ao Menu
*/

// Inicialização da fila virtual com alguns pacientes
let filaVirtual = ["João", "Maria", "Pedro", "Ana", "Carlos", "Laura", "Lucas"];
let menu = "";// Variável para armazenar a opção escolhida no menu
let pacienteConsultado = "Em espera...";// Variável para armazenar o paciente em consulta

do {
  let pacientes = "";
  for (let i = 0; i < filaVirtual.length; i++) {
    pacientes += (i + 1) + "º - " + filaVirtual[i] + "\n";
  }
  // Exibição do menu interativo e informações sobre os pacientes
  menu = prompt(
    "Escolha uma opção" +
    "\n1 - Novo paciente" +
    "\n2 - Consultar paciente" +
    "\n3 - Sair" +
   "\nPacientes na fila:\n" + pacientes +
     "\n Em consulta: " + pacienteConsultado
  );

  switch (menu) {
    case "1":
   // Opção para adicionar um novo paciente à fila
      const novoPaciente = prompt("Insira o nome do paciente:");
      filaVirtual.push(novoPaciente);
      break;
    case "2":
    // Opção para consultar o próximo paciente da fila
      pacienteConsultado = filaVirtual.shift()// Remove o primeiro paciente da fila e armazena em pacienteConsultado
      if (filaVirtual.length > 0) {
        alert("Consultando " + pacienteConsultado);
      } else {
        alert("Não há pacientes na fila")
      }
      break;
    case "3":
    // Opção para sair do programa
      alert("Finalizando...");
      break;
    default:
      alert("Comando não encontrado!");
  }
} while (menu !== "3");
