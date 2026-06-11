//Criando uma classe
class Person {
  constructor(name) {
    console.log("Olá", name);
  }
}

const person = new Person("Rodrigo")

//Criando propriedades dentro das classes
class Product {
  constructor(name) {
    this.name = name
  }
}

const product1 = new Product("Teclado")
console.log(product1.name)

const product2 = new Product("Mouse")
console.log(product2.name)

//Adicionando métodos nas classes
class User {
  constructor(name, email) {
    this.name = name
    this.email = email
  }

  sendEmail() {
    console.log("E-mail enviado para", this.name, "para o endereço eletrônico", this.email)
  }
}

const user = new User("Rodrigo", "rodrigo@gmail.com")
user.sendEmail()

//O que é método estático?
class Usuario {
  constructor(message) {
    this.message
  }

  showMessageClass() {
    console.log("Essa é uma mensagem da classe")
  }

  static showMessageStatic1(message) {
    console.log("Essa é uma mensagem do metodo estatico", message)
  }

  //Undefined
  static showMessageStatic2() {
    console.log("Essa é uma mensagem do metodo estatico", this.message)
  }
}

const usuario = new Usuario()
usuario.showMessageClass()

Usuario.showMessageStatic1("Essa é uma mensagem do metodo estatico")
Usuario.showMessageStatic2()

//Como aplicar herança com classes?
class Animal {
  constructor(name) {
    this.name = name
  }

  makeNoise() {
    console.log("Algum som genérico do animal");
  }
}

class Dog extends Animal {
  //Não tem nada aqui
  //Sobrescrevendo métodos - Override
  makeNoise() {
    console.log("Au...Au...Au!");
  }
}
const dog = new Dog("Mel")
console.log(dog.name)
dog.makeNoise()

class Cat extends Animal {
  //Não tem nada aqui
  //Sobrescrevendo métodos - Override
  makeNoise() {
    console.log("Miau...Miau...Miau!");
  }
  //Pertence a classe cat somente(específico)
  run() {
    console.log("Correndo...!");
  }
}
const cat = new Cat("Chanin")
console.log(cat.name)
cat.makeNoise()

//Aprendendo sobre herança e cadeia de protótipos
const array = ["Rodrigo", "Ana", "Paula"] //Array.prototype //Object.prototype //Null

//Criando um objeto prototype
const address = {
  city: "São Paulo",
  country: "Brazil"
}
console.log(address);

const users = ["Rodrigo", "João", "Sara"]
console.log(users);

const userName = "Karla Santos"
console.log(userName.__proto__);

//Como utilizar classes pra lidar com exceções
let objt = [17]
let index = 300
try {
  // objt.execute()
  if (!objt.includes(17)) {
    throw new Error("O número 17 não está disponível")
  }
  if (index > 99) {
    throw new RangeError("Número está fora do intervalo. Escolha um número de 0 á 99")
  }
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Método indisponível");
  }
  if (error instanceof RangeError) {
    console.log(error.message);
  } else {
    console.log("Não foi possível realizar a ação");
  }
}

//Como utilizar classes para criar erros customizados
class MyCustomError {
  constructor(message) {
    this.message = "CLASSE DE ERRO CUSTOMIZADA:" + message
  }
}

try {
  throw new Error("Erro genérico!");
  throw new MyCustomError("Erro personalizado lançado!");
} catch (error) {
  if (error instanceof MyCustomError) {
    console.log(error.message);
  } else {
    console.log("Não foi possível executar!");
  }
}