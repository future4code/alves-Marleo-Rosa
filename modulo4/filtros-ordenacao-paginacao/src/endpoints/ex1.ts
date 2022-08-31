import { request, Request, response, Response } from "express"
import { connection } from "../index"

export const getUserByName = async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.params.name
        if (!name.length) {
            res.statusCode = 404
            throw new Error("No users found")
        }

        res.status(200).send(name)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

export default async function getUsersByType(): Promise<any> {
    try {
        const type = request.params.type

        const filterByType = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio
       WHERE type LIKE "%${type}%";
    `)
        response.status(200).send(filterByType[0])

    } catch (error: any) {
        console.log(error)
        response.send(error.message || error.sqlMessage)
    }
}