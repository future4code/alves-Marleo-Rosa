// - **Exercícios de interpretação de código**

//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, 
// pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
/*
//     1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
let array
console.log('a. ', array)
// a. undefined
array = null
console.log('b. ', array)
// b. null
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//       0  1  2  3  4  5  6  7   8   9   10  (o computador começa a contar do 0)

console.log('c. ', array.length)  //A propriedade length nos diz qual é a quantidade de itens de um array
// c. 11
let i = 0
console.log('d. ', array[i])
// d. 3           (i quer dizer indice, e igual a zero quer dizer que é a primeira posição)
array[i + 1] = 19
console.log('e. ', array)
// e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] (Ele tá dizendo pra substituir o que tem no indice 1 pelo número 19)
const valor = array[i + 6]
console.log('f. ', valor)
//f. 9
*/
/*
//  2. Leia o código abaixo com atenção

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//Qual será o valor impresso no console se a entrada do usuário for: 
//"Subi num ônibus em Marrocos"?

//SUBI NUM ÔNIBUS EM MARROCOS 27
*/
// - **Exercícios de escrita de código**
/*
// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
// Em seguida, Imprima no console a seguinte mensagem:
        
// O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

nomeDoUsuario = prompt("Digite o seu nome:")
emailDoUsuario = prompt("Digite o seu email:")
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)
*/

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, 
// armazenado em uma variável. Em seguida, siga os passos:

//     a) Imprima no console o array completo 
//     b) Imprima no console a mensagem "Essas são as minhas comidas preferidas:", 
//        seguida por cada uma das comidas, **uma embaixo da outra**.
//     c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
// Troque a segunda comida da sua lista pela inserida pelo usuário. 
// Imprima no console a nova lista
/*
const arrayComidas = ["Strogonoff", "Pizza", "Xis", "Hamburguer", "Lasanha"]
console.log(arrayComidas)

console.log(`Essas são as minhas comidas favoritas: \n Strogonoff; \n Pizza; \n Xis; \n Hamburguêr; \n Lasanha.`)
const comidaUsuario = prompt("Qual é a sua comida favorita?")

arrayComidas[1] = comidaUsuario
console.log(arrayComidas)
*/
// 3. Faça um programa, seguindo os passos:
    
//     a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
//     b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
//     c) Imprima o array no console
    
//     d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
//     e) Remova da lista o item de índice que o usuário escolheu.
    
//     f) Imprima o array no console

const listaDeTarefas = []
tarefa1 = prompt("Diga uma tarefa que você precisa realizar no seu dia:")
tarefa2 = prompt("Diga uma segunda tarefa que você precisa realizar no seu dia:")
tarefa3 = prompt("Diga uma terceira tarefa que você precisa realizar no seu dia:")
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)
tarefaRealizada = prompt("Digite uma tarefa que você já realizou: 0, 1 ou 2")
listaDeTarefas.splice(tarefaRealizada, 1)
console.log(listaDeTarefas)
