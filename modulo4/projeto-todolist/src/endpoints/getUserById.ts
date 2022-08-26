import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";

export default async function getUserById(
    req: Request,
    res: Response
) {
    try {
        // consultar o banco de dados
        const user = await selectUserById(req.params.id)

        // validar saídas do banco
        if (!user) {
            res.status(404).send({
                message: "Usuário não encontrado"
            })
        }

        // responder a requisição
        res.status(200).send({
            id: user.id,
            nickname: user.nickname
        })

    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}