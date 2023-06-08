const attacker = prompt("Nome do personagem atacante?");
const attackPower = parseFloat(prompt("Qual seu poder de ataque?"));

const defender = prompt("Qual nome do player defensor?");
let lifePoints = parseFloat(prompt("Quanto de vida ele tem de 0 a 100?"));
const defencePower = parseFloat(prompt("Quanto de defesa ele tem?"));
const shield = prompt("Ele possui um escudo? (Sim/Não");

let damage = 0;

if (attackPower > defencePower && shield === "não") {
  damage = attackPower - defencePower;
} else if (attackPower > defencePower && shield === "Sim") {
  damage = (attackPower - defencePower) / 2;
}

lifePoints -= damage

alert(attacker + " causou " + damage + " pontos de dano em " + defender)
alert(
  attacker  + "\nPoder de ataque: " + attackPower + "\n\n" +
  defender + "\nPontos de vida: " + lifePoints +
  "\nPoder de defesa: " + defencePower + "\nPossui escudo: " + shield
)