const dayjs = require("dayjs");

function birthday(date) {
  const birthday = dayjs(date);
  const today = dayjs();

  const ageInYears = today.diff(birthday, "year");
  const nextBirthday = birthday.add(ageInYears + 1, "year");
  const daysLeft = nextBirthday.diff(today, "day") + 1;

  if (birthday.format("DD/MM/YYYY") === today.format("DD/MM/YYYY")) {
    console.log(`Hoje é seu aniversário!, você completou ${ageInYears} anos!`);
  } else {
    console.log(`Idade: ${ageInYears} anos!`);
  }

  console.log(`Próximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`);
  console.log(`Dias para o próximo aniversário: ${daysLeft}`);
}

birthday("2000-05-19 ");
