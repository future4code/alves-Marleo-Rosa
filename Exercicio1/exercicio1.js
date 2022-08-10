//EX1
console.log("Bem vindo ao Backend!")

console.log("Olá", process.argv[2])
let idade = Number (process.argv[3]) + Number (7)
console.log("Você tem", process.argv[3], "anos.", "Em sete anos você terá", idade)

//a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
//Basta utilizar process. argv[2]. Essa propriedade irá armazenar uma cópia, somente leitura, do valor original de argv[0] passado quando o arquivo. js for iniciado.
