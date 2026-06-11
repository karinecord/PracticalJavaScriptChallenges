/* Texto maiúsculo e minúsculo */
let message = "  Estou estudando os fundamentos do JavaScript  "
console.log(message.toUpperCase())
console.log(message.toLowerCase())

/* Obtendo o comprimento de uma string */
console.log(message.length)

let value = 123456
console.log(String(value).length)
console.log(value.toString().length)

/* Substituindo e fatiando um texto */
console.log(message.replace("JavaScript", "HTML"))
console.log(message.replace("os fundamentos do JavaScript", "métodos de string"))

console.log(message.slice(0, 5))
console.log(
  message.slice(6, 16)
)

console.log(
    message.slice(-10)
)

console.log(message.trim())

/* Completando uma string*/
const creditCard = "1234123412344928"
const lastDigits = creditCard.slice(-4)
console.log(lastDigits)
const maskedNumber = lastDigits.padStart(creditCard.length, "*")
console.log(maskedNumber)

const number = "123"
console.log(number.padEnd(10, "#"))
console.log(number.padEnd(10, "#").length)

/* Separando e unindo strings*/
const text = "estudar, aprender, praticar";
const separator = text.split(",");
console.log(separator);


const text2 = "estou aprendendo javascript";
console.log(text2.split(" "));

const words = ["estudar", "aprender", "praticar"];
const joined = words.join(" - ");
console.log(joined);

/*Encontrando um conteúdo no texto*/
const msg = "Estou estudando os fundamentos do Javascript";
console.log(msg.indexOf("estudando"));
console.log(msg.indexOf("HTML"));
console.log(msg.includes("Javascript")); // true
console.log(msg.includes("javascript")); // false