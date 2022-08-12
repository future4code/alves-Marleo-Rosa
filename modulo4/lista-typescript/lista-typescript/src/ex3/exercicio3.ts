enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type tipos = {
    nome: string,
    lancamento: string,
    genero: string,
    pontuacao?: string
}

function filmes(filme: tipos): object {
    return filme
}
console.table(filmes({ nome: "Velozes e Furiosos", lancamento: "2001", genero: GENERO.ACAO }))
console.table(filmes({ nome: "Até o último homem", lancamento: "2016", genero: GENERO.ACAO, pontuacao: "4.6" }))
console.table(filmes({ nome: "Os Mercenários", lancamento: "2010", genero: GENERO.ACAO }))