import { Request, Response } from "express";
import updateUser from "../data/updateUser";

export default async function editUser(
    req: Request,
    res: Response
) {
    try {
        // validar entradas da requisição
        if (
            req.body.name === '' ||
            req.body.nickname === '' ||
            req.body.email === ''
        ) {
            res.status(400).send({
                message: "Nenhum dos campos podem estar em branco"
            })

            return
        }

        if (!req.body.name && !req.body.nickname && !req.body.email) {
            res.status(400).send({
                message: "Escolha ao menos um valor para alterar"
            })
            return
        }

        // consultar o banco de dados
        await updateUser(
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        // responder a requisição
        res.status(200).send({
            message: "Usuário atualizado!"
        })

    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}