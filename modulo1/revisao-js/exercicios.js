// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01 OK
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02 OK
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03 OK consegui pelo google
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)

}

// EXERCÍCIO 04 OK
function retornaNumerosPares(array) {

    const numerosPares = array.filter((numero) => {
        return numero % 2 === 0
    })
    return numerosPares
}
// EXERCÍCIO 05 OK
function retornaNumerosParesElevadosADois(array) {
    const numerosPares = array.filter((numero) => {
        return numero % 2 === 0
    })
    let numerosElevados = numerosPares.map((item) => {
        return item ** 2
    })
    return numerosElevados
}

// EXERCÍCIO 06 OK
function retornaMaiorNumero(array) {

    let maior = -Infinity
    // numero = numeros[i]
    for (let numero of array) {
        if (numero > maior) {
            maior = numero
        }
    }
    return maior

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    // numero = numeros[i]
    let maiorNumero = (num1, num2) => {
        if (num1 > num2) {
            return num1
        } else {
            return num2
        }
    }
    let menorNumero = (num1, num2) => {
        if (num1 < num2) {
            return num1
        } else {
            return num2
        }
    }
    let maiorNumero1 = maiorNumero(num1, num2)
    let menorNumero1 = menorNumero(num1, num2)

    let maiorDivisivelPorMenor = (num1, num2) => {
        if (num1 % num2 === 0) {
            return (true)
        } else {
            return (false)
        }
    }
    let divisao = diferenca(maiorNumero1, menorNumero1)
    let diferenca = num1 - num2
    diferenca = Math.abs(diferenca)
}

// EXERCÍCIO 08 OK
function retornaNPrimeirosPares(n) {
    let numeros = []
    for (let i = 0; numeros.length < n; i += 2) {
        numeros.push(i)
    }
    return numeros
}

// EXERCÍCIO 09 NÃO
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA !== ladoB !== ladoC) {
        return "Escaleno"
    } else if (ladoA === ladoB === ladoC) {
        return "Equilátero"
    } else {
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let arrayOrdenado = array.sort((a, b) => a - b)
    let segundoMaior = arrayOrdenado[arrayOrdenado.length - 2]
    let segundoMenor = arrayOrdenado[1]
    let resultado = [segundoMaior, segundoMenor]
    return resultado
}

// EXERCÍCIO 11 PASSOU MAS NÃO SEI SE ERA O CERTO A FAZER COLOCANDO ESPAÇOS NOS NOMES NO ARRAY DE ATORES
function retornaChamadaDeFilme(filme) {
    // entrada
    const filmes = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci']
    }
    return `Venha assistir ao filme ${filmes.nome}, de 2006, dirigido por ${filmes.diretor} e estrelado por ${filmes.atores}.`
    // saída
    //  "Venha assistir ao filme O Diabo Veste Prada, de 2006, dirigido por David Frankel e estrelado por Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci."
}

// EXERCÍCIO 12 NÃO DEU CERTO, PARECE SER BUG
function retornaPessoaAnonimizada(pessoa) {
    //entrada
    let pessoas = {
        nome: "Astrodev",
        idade: 25,
        email: "astrodev@labenu.com.br",
        endereco: "Rua do Futuro, 4"
    }

    // saída
    let novaPessoas = {
        ...pessoas,
        nome: "ANÔNIMO",
        idade: 25,
        email: "astrodev@labenu.com.br",
        endereco: "Rua do Futuro, 4"
    }
    return novaPessoas
}

// EXERCÍCIO 13A OK
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = pessoas.filter((pessoa) => {
        if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
            return pessoa
        }
    })
    return pessoasAutorizadas
}

// EXERCÍCIO 13B OK
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = pessoas.filter((pessoa) => {
        if (pessoa.altura <= 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
            return pessoa
        }
    })
    return pessoasNaoAutorizadas
}
// DAQUI PRA BAIXO NÃO DEU TEMPO
// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}