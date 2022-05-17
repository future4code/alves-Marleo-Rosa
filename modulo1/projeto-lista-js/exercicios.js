// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01 OK
function calculaAreaRetangulo() {
  let altura = Number(prompt("Digite a Altura:"))
  let Largura = Number(prompt("Digite a Largura:"))
  let calculaAreaRetangulo = (altura * Largura)
  return console.log(calculaAreaRetangulo)
}

// EXERCÍCIO 02 OK
function imprimeIdade() {
  let anoAtual = Number(prompt("Digite o ano atual:"))
  let anoNasc = Number(prompt("Digite o ano atual:"))
  let imprimeIdade = (anoAtual - anoNasc)
  return console.log(imprimeIdade)
}

// EXERCÍCIO 03 OK
function calculaIMC(peso, altura) {
  return calculaIMC = (peso / (altura * altura))
}

// EXERCÍCIO 04 OK
function imprimeInformacoesUsuario() {
  let nome = (prompt("Digite seu nome:"))
  let idade = (prompt("Digite sua idade:"))
  let email = (prompt("Digite seu email"))
  return console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05 OK
function imprimeTresCoresFavoritas() {
  let cor1 = (prompt("Digite uma cor:"))
  let cor2 = (prompt("Digite outra cor:"))
  let cor3 = (prompt("Digite mais uma cor:"))
  imprimeTresCoresFavoritas = [cor1, cor2, cor3]
  return console.log(imprimeTresCoresFavoritas)
}

// EXERCÍCIO 06 OK
function retornaStringEmMaiuscula(string) {
  return retornaStringEmMaiuscula = (string.toUpperCase())
}

// EXERCÍCIO 07 OK
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return calculaIngressosEspetaculo = (custo / valorIngresso)
}

// EXERCÍCIO 08 OK
function checaStringsMesmoTamanho(string1, string2) {
  // let string1 = (prompt("DIgite uma palavra:"))
  // let string2 = (prompt("Digite outra palavra:"))
  checaStringsMesmoTamanho.length
  return checaStringsMesmoTamanho = (string1 > string2)
}

// EXERCÍCIO 09 OK
function retornaPrimeiroElemento(array) {
  return (array[0])

}

// EXERCÍCIO 10 EU ACHO QUE NÃO TÁ CERTO MAS DEU CERTO
function retornaUltimoElemento(array) {
  a = array.pop()
  return a
}

// EXERCÍCIO 11 array: ["ola","abc"]  ESTUDAR MAIS SOBRE ESSE
//                        0     1
function trocaPrimeiroEUltimo(array) {
  let primeiro = array[0]   //representa primeira posição
  let ultimo = array[array.length - 1] // representa a última posição
  array[0] = ultimo
  array[array.length - 1] = primeiro
  return array
}

// EXERCÍCIO 12  OK
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  checaIgualdadeDesconsiderandoCase = (string1.toUpperCase() === string2.toUpperCase())
  return checaIgualdadeDesconsiderandoCase
}

// EXERCÍCIO 13 //ano atual: 2020 / ano de nascimento: 2000 / ano de emissao do RG: 2015
// true = precisa renovar / false = não precisa renovar
//20 anos <=  5 em 5 anos | 21 a 50 anos 10 em 10 anos | 51+ anos 15 em 15 anos
function checaRenovacaoRG() {
  let anoAtual = Number(prompt("Ano atual:"))
  let anoNasc = Number(prompt("Ano de nascimento:"))
  let anoId = Number(prompt("Ano da identidade:"))
  let idade = Number(anoAtual - anoNasc)
  let tempoRG = Number(anoAtual - anoId)
  renovaEm5 = (idade <= 20 && tempoRG >= 5)
  renovaEm10 = (idade > 20 && idade <= 50 && tempoRG >= 10)
  renovaEm15 = (idade > 50 && tempoRG >= 15)

  console.log(renovaEm5 || renovaEm10 || renovaEm15)

  // console.log(checaRenovacaoRG)
}

// EXERCÍCIO 14 NÃO
function checaAnoBissexto(ano) {
  let bissexto = ano % 4 === 0
  let naoBissexto = ano % 4 !== 0
  ano = bissexto !== naoBissexto
  return ano
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let resposta1 = prompt("Você tem mais de 18 anos?")
  let resposta2 = prompt("Você possui ensino médio completo?")
  let resposta3 = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  console.log(
    resposta1.toLowerCase().includes("sim") &&
    resposta2.toLowerCase().includes("sim") &&
    resposta3.toLowerCase().includes("sim"))
}