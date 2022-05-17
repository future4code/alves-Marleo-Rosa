//Exercícios de interpretação de código
//1)
/*
Matheus Nachtergaele
Virginia Cavendish
Canal: Globo, horario: 14h
*/

//2)
//A)
/* nome: Juca, idade 3, raca SRD
   nome: Juba, idade 3, raca SRD
   nome: Jubo, idade 3, raca SRD
*/

/*

B) Ela serve para fazermos uma cópia de um objeto (ou array) inteiro
Feita essa cópia, podemos manipular ela da maneira
que quisermos (ex: mudar ou adicionar propriedades)
Essa sintaxe é chamada de espalhamento (ou spread)
*/

// 3)
/*
A)  false
    undefined
B)  Ela retornou false pois ele não é backender e undefined pois não consta a altura.
*/

//Exercícios de escrita de código
//1)
// Exemplo de entrada
// const pessoa = {
//     nome: "Márleo",
//     apelidos: ["Piber", "Léo", "Marlinho"]
// }

// // Exemplo de saída
// console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)

// function modPessoa(parametro) {
//     const novoApelido = {
//         ...parametro,
//         apelidos: ["Cb", "Cabo", "Gremista"]
//     }
//     console.log(`Eu sou ${novoApelido.nome}, mas pode me chamar de ${novoApelido.apelidos}`)
// }
// modPessoa(pessoa)

//2)
// const pessoaEx2 = {
//     nome: "Márleo",
//     idade: 29,
//     profissão: "Dev"
// }
// console.log(pessoaEx2)

// const pessoa2Ex2 = {
//     nome: "Piber",
//     idade: 26,
//     profissão: "Militar"
// }
// console.log(pessoa2Ex2)

// function retornoObjetos(pessoaEx2) {
//     const array = [pessoaEx2.nome, pessoaEx2.nome.length]
//     return array
// }
// retornoObjetos(pessoa2Ex2)
// console.log(retornoObjetos(pessoaEx2))

//3
let carrinho = []

const fruta1 = {
    nome: "laranja", disponibilidade: true
}
const fruta2 = {
    nome: "maça", disponibilidade: true
}
const fruta3 = {
    nome: "bergamota", disponibilidade: true
}

function adicionarFruta(frutas1, frutas2, frutas3) {
    carrinho.push(fruta)
    return carrinho
}
carrinho = adicionarFruta(fruta1, fruta2, fruta3)
console.log(carrinho)

//vc deve usar o push tu vai fazer uma funcao addfruta nessa funcao dentro dela vai ta carrinho.push(fruta) o parametro da funcao vai ser fruta e dentro dela vai ta carrinho.push(fruta) daí tu vai chamar essa funcao 3x como eu fiz só que cada vez eu vou passar uma fruta como parametro eu nao vou colocar 3x carrinho.push depois chamar uma fruta de cada vez como parametro

// adicionarFruta(laranja)
// adicionarFruta(maça)
// console.log(carrinho)
// botarNoCarrinho(carrinho.push(fruta1.laranja))
// botarNoCarrinho(carrinho.push(fruta2.maça))
// botarNoCarrinho(carrinho.push(fruta3.bergamota))
// console.log(carrinho)
