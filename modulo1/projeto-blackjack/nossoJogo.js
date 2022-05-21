/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem-vindo(a) ao jogo de blackjack")
if (confirm("Quer iniciar uma nova rodada?")) {
   
   let cartaUsuario1 = comprarCarta()
   let carta2 = comprarCarta()
   let carta1PC = comprarCarta()
   let carta2PC = comprarCarta()
   let pontosUsuario = cartaUsuario1.valor + carta2.valor
   let pontosPC = carta1PC.valor + carta2PC.valor
   console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${carta2.texto}  - pontuação ${pontosUsuario}`)

   console.log(`Computador - cartas: ${carta1PC.texto} ${carta2PC.texto}  - pontuação ${pontosPC}`)

   if (pontosUsuario > pontosPC) {
      console.log("O usuário ganhou!")
   } else if (pontosPC > pontosUsuario) {
      console.log("O computador ganhou!")
   } else if (pontosUsuario === pontosPC) {
      console.log("Empate!")
   }
} else {
   console.log("O jogo acabou.")
}