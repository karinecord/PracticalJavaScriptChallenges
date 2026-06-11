//Criando Array com construtor
const newArray = new Array()
console.log(newArray)
console.log("Rodrigo".length)

//Retorna o tamanho do array
console.log(newArray.length)

//[] - Array
//{} - Object

//Cria o Array com 10 posições vazias
const available = new Array(10)
console.log(available)
console.log(available.length)

//Criando um array
let fruits = ["Apple", "Banana", "Organge", "Watermelon"]
console.log(fruits)

//Quantidade de itens do Array
console.log(fruits.length)

//Acessa o item pelo indice
console.log(fruits[0])

//Tenta acessar o indice que nao existe
console.log(fruits[7])

//Obtem dinamicamente o ultimo item
console.log(fruits[fruits.length - 1])

//Convertendo uma string para array
let fullName = "Rodrigo Gonçalves Santana"
console.log(fullName)

//Cria um Array com os nomes separados pelo espaço
console.log(fullName.split(" "))

// Cria um Array com as letras
console.log(Array.from(fullName))

//Adicionando e removendo um item do array
let users = []

//Adiciona um item ao final do array
users.push("Rodrigo")
users.push("João")
users.push("Marcos")
users.push("Ana")

// Adiciona um item ao inicio do array
users.unshift("Ana")

// remove do inicio do array
users.shift()

// remove do final do array
users.pop()

console.log(users)

//Usando o índice
let fruits1 = ["Apple", "Watermelon", "Lemon", "Strawberry"]
//encontra e retorna o indice do elemento no Array
let position = fruits1.indexOf("Lemon")
let position1 = fruits1.indexOf("Banana")
console.log(position)
console.log(position1)
//Remove um item pela posicao do indice 1 e o numero do item para remover
// fruits1.splice(1,2)
fruits1.splice(position,1)
console.log(fruits1)


//Quais elementos o array aceita?
let myArray = [
  "Um texto",
  10,
  true,
  function(){
    console.log("Função dentro do Array!")
  },
  {
    name: "Rodrigo",
    email: "rodrigo@gmail.com"
  },
]

//texto
console.log(myArray[0])
//numero
console.log(myArray[1])
//Boolean
console.log(myArray[2])
//Funcao
myArray[3]()
//Objeto
console.log(myArray[4].name, myArray[4].email)

//Verificando se existe um conteúdo no array
let fruits3 = ["Apple", "Orange", "Banana", "Strawberry"]
//Verifica se um item existe no Array
console.log(fruits3.includes("Apple"))
console.log(fruits3.includes("Lemon"))
console.log(fruits3.includes("Banana"))
console.log(fruits3.includes("Orange"))




const array = [1, 2, 3, 4, 5];
array.splice(2, 1, 'x', 'y', 'z');
console.log(array)


// O splice serve para remover e/ou inserir elementos diretamente no array original.

//   Sintaxe:  array.splice(índiceInicial, quantidadeRemover, ...itensParaInserir)

//   No seu exemplo:
//   const array = [1, 2, 3, 4, 5];
//   //              0  1  2  3  4  ← índices

//   array.splice(2, 1, 'x', 'y', 'z');
//   //           ↑  ↑   ↑    ↑    ↑
//   //      índice  |   elementos a inserir
//   //           remove 1 elemento

//   Passo a passo:
//   1. Vai até o índice 2 → elemento 3
//   2. Remove 1 elemento → remove o 3
//   3. Insere 'x', 'y', 'z' no lugar do 3

//   Resultado:
//   [1, 2, 'x', 'y', 'z', 4, 5]

//   ---
//   Outros exemplos para fixar:

//   // Só remover (sem inserir)
//   [1, 2, 3, 4].splice(1, 2)  // → array vira [1, 4]

//   // Só inserir (sem remover)
//   [1, 2, 3].splice(1, 0, 'a', 'b')  // → [1, 'a', 'b', 2, 3]

//   // Remover tudo a partir do índice 2
//   [1, 2, 3, 4, 5].splice(2)  // → array vira [1, 2]

//   Atenção: o splice modifica o array original (diferente do slice, que retorna uma cópia).
