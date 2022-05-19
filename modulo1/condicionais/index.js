// Exercícios de interpretação de código
// 1)
// A) Ele verifica se o número é par ou ímpar
// B) Números pares
// C) Números ímpares

// 2) A) Ele passa o valor das frutas
// B) 2.25
// C) Ele vai pular pro próximo valor

// 3)
// A) Está pedindo para o usuário digitar um número
// B) número acima de zero ele da que passou no teste, número negativo ele não tem função nenhuma
// C) O erro no console é por conta daquele console.log estar fora da chave (acredito que seja isso, porém quero ter certeza com o feedback da atividade)

// Exercícios de escrita de código
// 1)

// const idadeUsuario = Number(prompt("Digite a sua idade:"))

// if (idadeUsuario >= 18) {
//     console.log("Você pode dirigir!")
// } else if (idadeUsuario < 18) {
//     console.log("Você não pode dirigir!")
// }

// 2)
// const turnoUsuario = prompt("Digite seu turno, M para (matutino) ou V para (Vespertino) ou N para (Noturno).").toLowerCase()

// if (turnoUsuario === "m") {
//     console.log("Bom dia!")
// } else if (turnoUsuario === "v") {
//     console.log("Boa tarde!")
// } else if (turnoUsuario === "n") {
//     console.log("Boa noite!")
// } else {
//     console.log("[ERRO] Digite novamente")
// }

// 3)
// const turnoUsuario = prompt("Digite seu turno, M para (matutino) ou V para (Vespertino) ou N para (Noturno).").toLowerCase()
// let turno
// switch (turnoUsuario) {
//     case "m":
//         console.log("Bom dia!")
//         break
//     case "v":
//         console.log("Boa tarde")
//         break
//         case "n":
//         console.log("Boa noite!")
//         break
//     default:
//         console.log("[ERRO] Digite novamente")
//         break
// }

// 4)
// const filmeGenero = prompt("Qual o gênero do filme?").toLowerCase()
// const filmeValor = Number(prompt("Qual o valor do ingresso?"))
// const temFilme = filmeGenero === "fantasia" && filmeValor <= 15
// const semFilme = ! temFilme
// if (temFilme) {
//     console.log("Bom filme!")
// } else if (semFilme) {
//     console.log("Escolha outro filme")
// }
// Desafios
//1
const filmeGenero = prompt("Qual o gênero do filme?").toLowerCase()
const filmeValor = Number(prompt("Qual o valor do ingresso?"))
const lanche = Number (prompt("Qual lanchinho você vai comprar? 1 - Pipoca, 2 - chocolate ou 3 - torresmo?"))-1


const temFilme = filmeGenero === "fantasia" && filmeValor <= 15
const semFilme = !temFilme
const indiceLanche = ["Pipoca", "chocolate", "torresmo"]
if (temFilme) {
    console.log(`Bom filme! E aproveite o seu ${indiceLanche[lanche]}`)
} else if (semFilme) {
    console.log("Escolha outro filme")
}