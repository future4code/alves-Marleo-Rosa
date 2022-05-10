// 1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)
*/
/*
false
false
true
boolean
*/
/*
// 2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  
// Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

//Nesse formato, ao invés de somar, o JS concatena os dois valores, 
//o jeito correto é colocando o Number pra transformar a string em número.


// 3. 3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor 
//impresso no console seja, de fato, a soma dos dois números.

primeiroNumero = prompt("Digite um numero!")
segundoNumero = prompt("Digite outro numero!")
let = Number (primeiroNumero)
let = Number (segundoNumero)
soma = Number (primeiroNumero) + Number (segundoNumero)

console.log(soma)
*/

// Exercícios de escrita de código

// 1. 1. Faça um programa que:

// a) Pergunte a idade do usuário

// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

// c) **Imprima na console** a seguinte mensagem: 
// "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

// d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
/*
idadeUsuario = prompt("Qual é a sua idade?")
idadeAmigo = prompt("Qual é a idade do seu melhor amigo(a)?")
let = Number (idadeUsuario)
let = Number (idadeAmigo)
resposta = idadeUsuario > idadeAmigo
diferenca = idadeUsuario - idadeAmigo
console.log (`Sua idade é maior que do seu melhor amigo? ${resposta}`)
console.log (`A diferença de idade de vocês é de ${diferenca} ano(s).`)
*/

// 2. a) Peça ao usuário que insira um número **par**

// b) Imprima na console **o resto da divisão** desse número por 2.

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
/*
numeroPar = prompt("Insira um número par:")
let = Number (numeroPar)
resto = numeroPar % 2
console.log (resto)
*/
// Nessa programação, sabemos que o usuário colocou um número par quando o resto da divisão da 0
// e um número impar quando o resto da divisão da 1

//3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console  

// a) A idade do usuário em meses

// b) A idade do usuário em dias

// c) A idade do usuário em horas
/*
idadeUsuario = prompt ("Qual é a sua idade?")
let = Number (idadeUsuario)
meses = idadeUsuario * 12
dias = idadeUsuario * 365
horas = idadeUsuario * 8760
console.log(`${idadeUsuario} anos são ${meses} meses, ${dias} dias e ${horas} horas.`)
*/
//4. Faça um programa que pergunte ao usuário dois números. 
// Em seguida, faça as operações e imprima no console as seguintes 
// mensagens seguidas pelo true ou false:

// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// obs: O true ou false vai depender dos números inseridos e do resultado das operações.
/*
let primeiroNumero = Number(prompt("Digite um número:"))
let segundoNumero = Number(prompt("Digite outro número:"))
a = primeiroNumero > segundoNumero //Verifica se o primeiro número é maior que o segundo
console.log(a)
b = primeiroNumero === segundoNumero //Verifica se os dois números são iguais
console.log(b)
c = primeiroNumero % segundoNumero //Verifica se o primeiro é divisivel pelo segundo
console.log(c)
d = segundoNumero % primeiroNumero // Verifica se o segundo é divisivel pelo primeiro
console.log(d)
*/

