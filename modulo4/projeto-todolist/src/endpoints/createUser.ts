import { Request, Response } from "express";
import insertUser from "../data/insertUser";

export default async function createUser(
    req: Request,
    res: Response
) {
    try {
        // validar entradas da requisição
        if (
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email
        ) {
            res
                .status(400)
                .send('Preencha os campos "name", "nickname" e "email"')
        }
        // consultar o banco de dados
        const id: string = Date.now() + Math.random().toString() // o Date.now gera um número com o horário de criação do id, + o Match.random pra pegar um número aleatório e transformamos o número em string
        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )
        // responder a requisição
        res
            .status(200)
            .send('Usuário criado com sucesso!')
    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}