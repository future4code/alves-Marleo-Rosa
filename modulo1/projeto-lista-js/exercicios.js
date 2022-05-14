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

// EXERCÍCIO 06 DA SÓ NO CONSOLE LOG
function retornaStringEmMaiuscula(string) {
  return retornaStringEmMaiuscula = (string.toUpperCase())
}

// EXERCÍCIO 07 DA SÓ NO CONSOLE LOG E PEDINDO 2X
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return calculaIngressosEspetaculo = (custo / valorIngresso)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // let string1 = (prompt("DIgite uma palavra:"))
  // let string2 = (prompt("Digite outra palavra:"))
  checaStringsMesmoTamanho.length
  return checaStringsMesmoTamanho = (string1 > string2)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return (array[0])

}

// EXERCÍCIO 10 EU ACHO QUE NÃO TÁ CERTO MAS DEU CERTO
function retornaUltimoElemento(array) {
  a = array.pop()
  return a
}

// EXERCÍCIO 11 array: ["ola","abc"]  NÃO CONSEGUI
//                        0     1
function trocaPrimeiroEUltimo(array) {
  // array.pop() // abc
  array.push(array[1])
  return array

}

// EXERCÍCIO 12  NÃO CONSEGUI POR O toLoweCase()
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return checaIgualdadeDesconsiderandoCase = (string1 === string2)
}

// EXERCÍCIO 13 //ano atual: 2020 / ano de nascimento: 2000 / ano de emissao do RG: 2015
// true = precisa renovar / false = não precisa renovar
function checaRenovacaoRG() {


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}