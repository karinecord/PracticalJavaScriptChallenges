let value = true

while (value) {

  console.log("Executando")

  value = false

}

//Do while
let value1 = 0
do {
  value1++
  console.log(value1)
} while (value1 < 10)
console.log("Segue fluxo....")

//Loop For
const number = 7

for (let step = 0; step <= 10; step++) {
  console.log(`${number} x ${step} = ${number * step}`)
}

//For in
//For...in executa iterações a partir de um objeto e percorre as propriedades
let person = {
  name: "Rodrigo",
  surname: "Gonçalves",
  email: "rodrigo@email.com"
}
let steps = 1
for (let property in person) {
  console.log(steps)
  //exibe o nome da propriedade
  console.log(property)

  //Exibe o conteúdo da propriedade
  console.log(person[property])

  steps++
}

let students = ["Rodrigo", "Jane", "Paula"]
for (let index in students) {
  console.log(students[index])
}

//for of
//O **for...of percorre os valores**, não os índices e nem as chaves.

const alunos = ["Rodrigo", "Amanda", "John"]

for (let aluno of alunos) {
  console.log(aluno)
}

const users = [
  { name: "Rodrigo", email: "rodrigo@email.com" }
]

for (let user of users) {
  console.log(user.name)
  console.log(user.email)
}

//Break
for (let i = 0; i < 10; i++) {
  console.log(i)
  if (i === 5) {
    break
  }

}

//continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue
  }
  console.log(i)
}
