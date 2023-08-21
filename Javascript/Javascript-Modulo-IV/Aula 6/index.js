//Com Objetos
const person = {
  name: "Luke",
  job: "Farmer",
  parents: ["Anakin", "Padme"],
};

// Modo 'normal'
const name = person.name;

//Com Desestruturação, pode até pegar mais de uma propriedade do objto
const { job, parents } = person;

//Com arrays
const [father, mother] = parents;

// com funções

//sem desestruturação
function creatUser(person) {
  const id = Math.floor(Math.random() * 9999);
  return {
    id,
    name: person.name,
    job: person.job,
    parents: person.parents,
  };
}

//com desestruturação
function createUser({ name, job, parents }) {
  //.floor para arredondar um numero para baixo 10,5 ele pegaria o 10,
  //.random que gera um numero aleatorio entre 0 e 1
  const id = Math.floor(Math.random() * 9999);
  return {
    id,
    name,
    job,
    parents,
  };
}
const luke = createUser(person);

console.log(luke);
