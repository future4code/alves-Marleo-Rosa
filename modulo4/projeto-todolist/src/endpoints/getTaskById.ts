import { Request, Response } from "express";
import moment from "moment";
import selectTaskById from "../data/selectTaskById";

export default async function getTaskById(
    req: Request,
    res: Response
) {
    try {
        const result = await selectTaskById(req.params.id)
        if (!result) {
            res.status(404).send({
                message: "Tarefa não encontrada"
            })
            return
        }

        res.status(200).send({
            id: result.id,
            title: result.title,
            description: result.description,
            deadline: moment(result.deadline, 'YYY-MM-DD').format('DD-MM-YYYY'),
            status: result.status,
            authorId: result.authorId,
            authorNickName: result.nickname
        })

    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}