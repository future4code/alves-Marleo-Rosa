import express, { Request, Response } from "express";
import cors from "cors";
import { usuarios } from "./users";
import { Usuario } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

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
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

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

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});