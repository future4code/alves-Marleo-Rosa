// Exercícios de interpretação de código

// 1) =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]

//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

// A) Ele vai retornar tudo

// 2) =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]

//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })

//   console.log(novoArrayB)

// A) Vai retornar apenas os nomes

// 3) =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]

//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })

//   console.log(novoArrayC)

// A) Vai retornar os apelidos diferentes de "Chijo"

//   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Exercícios de escrita de código

// 1)

// const pets = [
//     { nome: "Lupin", raca: "Salsicha" },
//     { nome: "Polly", raca: "Lhasa Apso" },
//     { nome: "Madame", raca: "Poodle" },
//     { nome: "Quentinho", raca: "Salsicha" },
//     { nome: "Fluffy", raca: "Poodle" },
//     { nome: "Caramelo", raca: "Vira-lata" },
// ]
// //a) Crie um novo array que contenha apenas o nome dos doguinhos
// const nomePets = pets.map((item) => {
//     return item.nome
// })
// console.log(nomePets)
// //b) Crie um novo array apenas com os cachorros salsicha
// const somenteSalsicha = pets.filter((item) => {
//     return item.raca === "Salsicha"
// })
// console.log(somenteSalsicha)


// // C) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

// const somentePoodle = pets.filter((item) => {
//     return item.raca === "Poodle"
// }).map((item) => {
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
// })
// console.log(somentePoodle)

//   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 2)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
// a) Crie um novo array que contenha apenas o nome de cada item
const apenasNome = produtos.map((item) => {
    return item.nome
})
console.log(apenasNome)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
// NÃO CONSEGUI
const nomeEPreco = produtos.map((item) => {
    let valorFinal = item.preco - (item.preco * 5 / 100).toFixed(2)
    item.preco = valorFinal
    return item.valorFinal, item.nome
})
console.log(nomeEPreco)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const apenasBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})
console.log(apenasBebidas)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const apenasYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})
console.log(apenasYpe)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
// NÃO CONSEGUI

// const apenasYpe2 = produtos.map((item) => {
//     return item.nome.includes("Ypê").map((item)=>{
//         return item.preco
//     })
    // return `Compre ${item.nome.includes("Ypê")} por ${item.preco.toFixed(2)}`
// })
// console.log(apenasYpe2)
// console.log(`Compre ${item.nome} por ${item.preco}`)
