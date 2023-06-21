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

do {
  let pacientes = "";

  menu = prompt(
    "Bem Vindo!" +
      "\nPacientes na fila:" +
      filaVirtual +
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
      const pacienteConsultado = ()
      pacienteConsultado = filaVirtual.shift()
      alert("Consultando" + pacienteConsultado)
  }
} while (menu !== "3");
