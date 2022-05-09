//Exercícios de interpretação de código

//1 Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
/*
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

//Será impresso 10, 5
*/
//2 Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
/*
let a = 10
let b = 20
c = a // 10
b = c // 10
a = b // 20

console.log(a, b, c)

//Será impresso 10, 10, 20
*/
//3 Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. 
//Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes 
//não podem começar com números ou caracteres especiais.
/*
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
*/
let = horasDia = prompt("Quantas horas você trabalha por dia?")
let pagamentoDIa = prompt("Quanto você recebe por dia?")
alert(`Você recebe ${pagamentoDIa/horasDia} por hora`)

//Exercícios de escrita de código
//1:

const nome = prompt("Digite seu nome:")
let idade = prompt("Digite sua idade:")
console.log(typeof nome)
console.log(typeof idade)

//Foram declarados como string pois representam um conjunto de caracteres.

console.log("Olá", nome, ", você tem", idade, "anos.")

console.log(typeof nome)
console.log(typeof idade)


//2: Escreva um programa que faça 3 perguntas de Sim ou Não,armazenado em uma variável. 
//Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
const perguntaRoupaAzul = prompt("Você está usando uma roupa azul?")
const perguntaEstudante = prompt("Você é estudante?")
const daLabenu = prompt("Da Labenu?")

console.log("Usando roupa azul?", perguntaRoupaAzul)
console.log("É estudante?", perguntaEstudante)
console.log("Da Labenu?", daLabenu)

//3 Suponha que temos duas variáveis a e b, cada uma com um valor inicial

let a = 10
let b = 25
let c = a
a = b
b = c

// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10