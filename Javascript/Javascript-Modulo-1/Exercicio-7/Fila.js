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

let menu = "";

let filaVirtual = ["João", "Maria", "Pedro", "Ana", "Carlos", "Laura", "Lucas"];
let pacienteConsultado = "Em espera...";

do {
  let pacientes = "";
  for (let i = 0; i <= filaVirtual.length; i++) {
    pacientes += i + 1 + "º - " + filaVirtual[i] + "\n";
  }

  menu = prompt(
    "Bem Vindo!" +
      "\n Em consulta: " +
      pacienteConsultado +
      "\nPacientes na fila:\n" +
      pacientes +
      "\nEscolha uma opção" +
      "\n1 - Novo paciente" +
      "\n2 - Consultar paciente" +
      "\n3 - Sair"
  );
  switch (menu) {
    case "1":
      const novoPaciente = prompt("Insira o nome do paciente:");
      filaVirtual.push(novoPaciente);
      break;
    case "2":
      pacienteConsultado = filaVirtual.shift();
      alert("Consultando " + pacienteConsultado);
      break;
    case "3":
      alert("Finalizando...");
      break;
    default:
      alert("Comando não encontrado!");
  }
} while (menu !== "3");
