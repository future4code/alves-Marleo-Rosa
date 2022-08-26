import { Request, Response } from "express";
import moment from 'moment'

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
                message: '"title", "description", "deadline", "authorId" são obrigatórios'
            })

            return
        }

        const dateDiff: number = moment(req.body.deadline, 'DD/MM/YYYY').unix() - moment().unix()
        console.log(dateDiff)

        if (dateDiff <= 0) {
            res.status(400).send({
                message: '"deadline" deve ser uma data futura.'
            })

            return
        }
        // consultar o banco de dados

        // validar saídas do banco

        // responder a requisição
    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}