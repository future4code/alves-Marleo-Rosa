
// Exercícios de interpretação de código
// Tente responder os exercícios dessa seção sem executar o código.
// Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado. 
/*
// 1. Leia o código abaixo

function minhaFuncao(variavel) {
    return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

// a) O que vai ser impresso no console?
// 10
// 50
// b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a 
//    função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

*/


/*
// 2. Leia o código abaixo

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
    return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade
// Ele verifica se o que o usuário escreveu contem a palavra 'cenoura'

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:

//      i.   Eu gosto de cenoura
//      ii.  CENOURA é bom pra vista
//      iii. Cenouras crescem na terra
// true true true porque as três contém a palavra 'cenoura', caso contrário ele retornaria false
*/

//      =-=-=-=-=-===-=-=-=-=-=-=-=-=-=-
//      Exercícios de escrita de código

// 1. Escreva as funções explicadas abaixo:

// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem 
// falando algumas informações sobre você, como: 

// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

// function escrever() {
//     console.log("Eu sou Márleo, tenho 29 anos, moro em Jaguari e sou estudante.")
//     }

// escrever()
/*
//B)
function ex2(nome, idade, cidade, profissão) {
    console.log("Eu sou,", nome, "tenho", idade, "anos,moro em", cidade, "e sou", profissão)
    return ("Eu sou," + nome + "tenho" + idade + "anos, moro em" + cidade "e sou" + profissão)
}
ex2("Márleo", "29", "Jaguari" "estudante")

*/

//2
//A)
// const soma = (num1, num2) => {
//     return num1 + num2
// }
// console.log(soma(5, 10))

//B)
// const exB = (num1, num2) => {
//     return num1 >= num2
// }
// console.log(exB(10, 5))

//C)
// const exC = (num1) => {
//     return num1 % 2 === 0
// }
// console.log(exC(2))

//D)
// const mensagem = (mensagemUsuario) => {
//     return mensagemUsuario
// }
// mensagemUsuario = prompt("Digite uma mensagem:")
// console.log(mensagemUsuario.length)
// console.log(mensagemUsuario.toUpperCase())

//Exercício 3:
let num1 = Number(prompt("Digite um número:"))
let num2 = Number(prompt("Digite outro número:"))
const soma = (num1, num2) => {
    const somar = (num1 + num2)
    return somar
}
console.log(`Números inseridos: ${num1} e ${num2}`)
console.log(`Soma: ${soma(num1, num2)}`)

const sub = (num1, num2) => {
    const subtrair = (num1 - num2)
    return subtrair
}
console.log(`Diferença: ${sub(num1, num2)}`)

const multi = (num1, num2) => {
    const multiplicar = (num1 * num2)
    return multiplicar
}
console.log(`Multiplicação: ${multi(num1, num2)}`)

const div = (num1, num2) => {
    const dividir = (num1 / num2)
    return dividir
}
console.log(`Divisão: ${div(num1, num2)}`)
