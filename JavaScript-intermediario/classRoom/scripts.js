/*
  Objeto: Uma coleção de dados e/ou funcionalidades: Podem ter propriedades e métodos
*/

/*
  Cria um objeto vazio
*/
const obj = {};
console.log(obj);
console.log(typeof obj);

/*
  Cria um objeto com propriedades e métodos
*/
const user = {
  email: "rodrigo@email.com",
  age: 18,

  name: {
    first_name: "Rodrigo",
    surname: "Gonçalves"
  },

  address: {
    street: "Rua X",
    number: 23,
    city: "São Paulo",
    country: "Brasil",
    postal_code: "12345-678"
  },

  message1: () => {
    console.log(`Olá ${user.name.first_name}`)
    // console.log(`Olá ${this.name.first_name}`) //{This} Nao funciona com arrow function
  },

  message2: function () {
    // console.log(`Olá ${user.name.first_name}`)
    console.log(`Olá ${this.name.first_name}`)  //{This} Funciona com arrow function
  }
}
/*Acessando propriedades e métodos usando a notação de ponto */
console.log(user.email);

/*Acessando propriedade de objetos */
console.log(user.name.first_name);

/*Executa o método do objeto*/
user.message1()

/*Notação de colchetes*/
console.log(user["email"]);
console.log(user["name"]["first_name"]);
user["message1"]();
user["message2"]();

/* Criando objeto */
const produto = {
  name: "Teclado",
  quantity: 100
}

/* Acessando uma propriedade */
console.log(produto.name);

/* Atualizando propriedades */
console.log(produto.name);

produto.name = "Mouse";
console.log(produto.name);
/*Notação de colchetes */
console.log(produto["name"] = "Monitor");

console.log(produto.quantity);

produto.quantity = 99;
console.log(produto.quantity);
/*Notação de colchetes */
console.log(produto["quantity"] = 50);


const usuario = {
  id: 1,
  name: "Rodrigo",

  address: {
    street: "Avenida Brasil",
    city: "São Paulo"
  },
   message() {
    console.log("Olá")
  }
}

console.log(usuario.address.street);
usuario.message();
// usuario.sendMessage();

/* Corrigindo com Optional Chaining */
usuario.sendMessage?.()

/*❌Erro scripts.js:95 Uncaught TypeError: 
Cannot read properties of undefined (reading 'number')

console.log(usuario.phone.number);

/* Corrigindo com Optional Chaining */
/*undefined*/
console.log(usuario.phone?.number);

/* Operador de Coalescência Nula (`??`)*/
let content1 = null
let content2 = "Olá Rodrigo"
let content3 = undefined
let content4 = false
let content5 = 0
let content6 = ""
let content7 = {}
console.log(content1 ?? "Conteúdo padrão");
console.log(content2 ?? "Conteúdo padrão");
console.log(content3 ?? "Conteúdo padrão");
console.log(content4 ?? "Conteúdo padrão");
console.log(content5 ?? "Conteúdo padrão");
console.log(content6 ?? "Conteúdo padrão");
console.log(content7 ?? "Conteúdo padrão");

/*  Criando a função construtora */
function createProduct(name) {
  const product = {}

  product.name = name

  product.details = function () {
    console.log(`O nome do produto é ${this.name}`)
  }

  return product
}

/* Criando uma instância*/
const product1 = new createProduct("Teclado")
console.log(product1.name)
product1.details()

/*  Criando outro objeto*/
const product2 = new createProduct("Mouse")
console.log(product2.name)
product2.details()

console.log(product1 === product2)

/* Outra forma de criar função construtora*/
function Person(name) {
  this.name = name

  this.message = function () {
    console.log(`Olá ${this.name}`)
  }
}

/*Criando instâncias*/
const person1 = new Person("Rodrigo")
console.log(person1.name)
person1.message()

/* Outra instância */
const person2 = new Person("João")
console.log(person2.name)
person2.message()

