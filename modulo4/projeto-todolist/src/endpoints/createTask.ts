import { Request, Response } from "express";
import moment from 'moment'
import insertTask from "../data/insertTask";

export default async function createTask(
    req: Request,
    res: Response
) {
    try {
        // validar entradas da requisição
        if (
            !req.params.title ||
            !req.params.description ||
            !req.params.deadline ||
            !req.params.authorId
        ) {
            res.status(400).send({
                message: '"title", "description", "status", "deadline", "authorId" são obrigatórios'
            })

            return
        }

        const dateDiff: number = moment(req.body.deadline, 'DD/MM/YYYY').unix() - moment().unix()

        if (dateDiff <= 0) {
            throw new Error("deadline deve ser uma data futura.");
        }
        // consultar o banco de dados
        const id: string = Date.now() + Math.random().toString()
        await insertTask(
            id,
            req.body.title,
            req.body.description,
            req.body.status,
            moment(req.body.deadline, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            req.body.authorId
        )
        // responder a requisição
        res.status(201).send({
            message: "Tarefa criada com sucesso!",
            id
        })

    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}