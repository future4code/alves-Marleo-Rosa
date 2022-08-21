import express, { Request, response, Response } from "express";
import cors from "cors";
import { usuarios } from "./users";
import { Usuario } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

//Criar usuários
app.post("/users/create", (req: Request, res: Response) => {
    try {
        const { nome, cpf, dataNascString } = req.body

        const [day, month, year] = dataNascString.split("/") // formato [01, 01, 2020]

        const dataNasc: Date = new Date(`${year}-${month}-${day}`)

        // validar as entradas da requisição

        const ageInMilliseconds: number = Date.now() - dataNasc.getTime()

        const ageInYears: number = ageInMilliseconds / 1000 / 60 / 60 / 24 / 365

        if (ageInYears < 18) {
            res.statusCode = 406
            throw new Error("Idade deve ser maior que 18 anos")
        }
        // consultar ou alterar a base de dados
        usuarios.push({
            nome,
            cpf,
            dataNasc,
            balanco: 0,
            extrato: []
        })
        // validar os resultados da consulta
        // enviar a resposta
        res.status(201).send("Conta criada com sucesso!")
    } catch (error: any) {
        console.log(error)
        res.send({ message: error.message })
    }
})

//Listar todos os usuários
app.get("/users/all", (req: Request, res: Response) => {
    try {
        if (!usuarios.length) {
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada");

        }
        res.status(200).send(usuarios)
    } catch (error) {
        res.send(error)

    }
})

//Ver saldo do usuário
app.get("/users/:cpf", (req: Request, res: Response) => {
    try {
        const cpf = req.params.cpf
        const usuario = usuarios.find(c => c.cpf == cpf)
        if (!usuario) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }
        res.status(200).send({ saldo: usuario.balanco })
    } catch (error: any) {
        if (res.statusCode = 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
})

//Adicionar saldo
app.put("/users/saldar", (req: Request, res: Response) => {
    try {
        const { nome, cpf, valor } = req.body //passa no body os 3 valores

        if (!nome || !cpf || !valor) { //se for diferente do que um dos 3 chama o erro
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }
        const usuarioFind = usuarios.find((usuario) => usuario.nome === nome && usuario.cpf === cpf)
        if (usuarioFind) {
            const novoBalanco = usuarioFind.balanco = usuarioFind.balanco + valor
            res.status(res.statusCode).send(`Saldo atual: ${novoBalanco}`)
        }
    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message })
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});