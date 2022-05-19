// Exercícios de interpretação de código
// 1) da 10 no console  1 + 2 + 3 + 4 = 10 numero de somas menores que o número 5

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// 2) 
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
// A) Ele vai imprimir todos os números acima de 18

// B) Não consegui

// 3) Ele vai apresentar 4 linhas até chegar em 4 asteriscos na linha 

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// Exercícios de escrita de código
// 1)

// let numeroBichos = Number(prompt("Quantos bichos você tem?"))
// if (numeroBichos === 0) {
//     console.log("Quena pena! Você pode adotar um pet!")
// } else if (numeroBichos > 0) {
//     let bichos = []
//     while (bichos.length < numeroBichos) {
//         let nomeBichos = prompt("Qual o nome dos seus bichos?")
//         bichos.push(nomeBichos)
//     }
//     console.log(`O nome dos seus bichos são: ${bichos}`)
// }

// 2)

// let arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arrayOriginal)
// if (arrayOriginal) {
//     while (arrayOriginal.length > 0) {

//     }
//     console.log(arrayOriginal / 10)
// }

// Não consegui


// Enquanto o array não acabar, console log (array[indice]/10)




// function divididoPor10(arrayOriginal) {
//     let divisao = arrayOriginal.length
//     for (let dividido of arrayOriginal) {
//         if (dividido / divisao) {
//             divisao = 10

//         }
//     }
//     return divisao
// }