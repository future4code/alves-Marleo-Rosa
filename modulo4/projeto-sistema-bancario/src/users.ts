import { Usuario } from "./types"

export let usuarios: Usuario[] = [
    {
        nome: "Márleo",
        cpf: "025.750.830-95",
        dataNasc: new Date("1992-09-02"),
        balanco: 500,
        extrato: [{
            valor: 100,
            data: new Date("1992-09-02"),
            descricao: "Gordice"
        }]
    },
    {
        nome: "Taíne",
        cpf: "025.751.832-97",
        dataNasc: new Date("1997-03-11"),
        balanco: 800,
        extrato: [{
            valor: 200,
            data: new Date("2022-08-19"),
            descricao: "Salão"
        }]
    },
    {
        nome: "Julie",
        cpf: "026.752.834-99",
        dataNasc: new Date("2010-04-12"),
        balanco: 1000,
        extrato: [{
            valor: 50,
            data: new Date("2022-08-15"),
            descricao: "Ração"
        }]
    }
]