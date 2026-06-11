console.log(new Date());
console.log(new Date(0));
console.log(new Date().getTime());
console.log(new Date(2024, 0, 3));
console.log(new Date(2024, 11, 3));
console.log(new Date(2024, 12, 3));
console.log(new Date(2024, 6, 3, 14, 30, 0));
console.log(new Date("2024-07-03T14:30:00"));
console.log(new Date("July 3, 2024 14:30:00"));

//Métodos pra trabalhar com data e hora
const date = new Date("2026-05-27T15:00:00")
console.log(`Data e hora: ${date}`);
console.log(`Dia da semana: ${date.getDay()}`);
console.log(`Mês: ${date.getMonth()}`);
console.log(`Mês: ${date.getMonth() + 1}`);
console.log(`Ano: ${date.getFullYear()}`);
console.log(`Horas: ${date.getHours()}`);
console.log(`Minutos: ${date.getMinutes()}`);
console.log(`Segundos: ${date.getSeconds()}`);

//Modificando uma data e uma hora
const date1 = new Date("2026-05-27T15:10:00")
console.log(`Data: ${date1}`);
date1.setFullYear(2030);
console.log(`Modificando o Ano: ${date1}`);
date1.setMonth(6)
console.log(`Modificando o Mês: ${date1}`);
date1.setHours(18)
console.log(`Modificando o Hora: ${date1}`);
date1.setMinutes(15)
console.log(`Modificando os Minutos: ${date1}`);
date1.setSeconds(30)
console.log(`Modificando os Segundos: ${date1}`);

// Formatando uma data e uma hora
const day1 = new Date("2026-05-03T15:10:00")
const year = day1.getFullYear()
const hour = day1.getHours().toString().padStart(2, "0")
const minutes = day1.getMinutes().toString().padStart(2, "0")
const day = day1.getDate().toString().padStart(2, "0")
const month = (day1.getMonth() + 1).toString().padStart(2, "0")
console.log(`Transformar em texto: ${day}`);
console.log(`Formatando o ANO: ${year}`);
console.log(`${day}/${month}/${year} ${hour}:${minutes}`);

//Convertendo uma data para string
let dateToString = new Date("2026-05-28T14:46:00")
//Converte para String
console.log(`Convert to String ${dateToString.toString()}`)
//Retorna somente a data
console.log(`Retorna somente a data ${dateToString.toDateString()}`)
//Retorna somente a hora
console.log(`Retorna somente a hora ${dateToString.toTimeString()}`)

//Exibindo data e hora formatadas de acordo com a localidade
console.log(`Exibe a data e a hora no formato local: ${dateToString.toLocaleDateString()}`)
console.log(`Exibe a data e a hora no formato local: ${dateToString.toLocaleTimeString()}`)

//Exibe a data e a hora no formato escolhido
console.log(`Exibe a data e a hora no formato local: ${dateToString.toLocaleDateString("pt-BR")}`)
console.log(`Exibe a data e a hora no formato local: ${dateToString.toLocaleTimeString("pt-BR")}`)

//Usando o toLocaleString()
console.log(`Usando o ToLocaleString(): ${dateToString.toLocaleString()}`)
console.log(`Usando o ToLocaleString(): ${dateToString.toLocaleString("en")}`)

//Exibe a data e a hora em styles diferentes
//short
console.log(
  dateToString.toLocaleString("pt-BR", {
    dateStyle: "short"
  })
)
//long
console.log(
  dateToString.toLocaleString("pt-BR", {
    dateStyle: "long"
  })
)

//medium
console.log(
  dateToString.toLocaleString("pt-BR", {
    dateStyle: "medium"
  })
)

//full
console.log(
  dateToString.toLocaleString("pt-BR", {
    dateStyle: "full"
  })
)

//day, monty, hour and minutes
console.log(
  dateToString.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  })
)

let amount = 12.5
console.log(
  amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
)

//Conhecendo a Intl - é a API de internacionalização do ECMAScript
//Obtém informações da localidade
const currentLocale = Intl.DateTimeFormat().resolvedOptions()
console.log(currentLocale)
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))
console.log(new Intl.DateTimeFormat("en-US").format(new Date()))

//Obtem a diferença em minutos do timezone
console.log(dateToString.getTimezoneOffset())
//Obtem a diferença em horas do timezone
console.log(dateToString.getTimezoneOffset() / 60)

const dateWithTimeZone = new Date("2026-05-28T14:46:00.603-03:00")
console.log(dateWithTimeZone.toLocaleString())

const dateWithTimeZone1 = new Date("2026-05-28T14:46:00.603+03:00")
console.log(dateWithTimeZone1.toLocaleString())
