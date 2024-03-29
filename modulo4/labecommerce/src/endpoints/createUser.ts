import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { userData, userInput } from "../types";

export default async function createUser(req: Request, res: Response) {
    try {

        const { name, email, password }: userInput = req.body

        if (!name || !email || !password) {
            throw new Error("O name, email e password devem ser passados");
        }

        const userInsert: userData = {
            id: Date.now().toString(),
            name,
            email,
            password
        }

        const anwser = await insertUser(userInsert)

        res.status(201).send({ message: anwser })

    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}