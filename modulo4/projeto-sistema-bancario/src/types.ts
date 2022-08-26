export type Transacoes = {
    valor: number,
    data: Date,
    descricao: string
}

export type Usuario = {   
    nome: string,
    cpf: string,
    dataNasc: Date,
    balanco: number,
    extrato: Transacoes[]
}