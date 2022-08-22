// - Exercício 1

// Crie um função que receba uma `string` com o nome e outra `string` com uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma `string` no seguinte formato:

//"Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 

function nomeData(nome: string, aniversario: string): string {
    const part = aniversario.split("/")
    return `Olá me chamo ${nome}, nasci no dia ${(part[0])}, do mês de ${part[1]} do ano de ${part[2]}`
}
console.log(nomeData("Márleo", "02/09/1992"))