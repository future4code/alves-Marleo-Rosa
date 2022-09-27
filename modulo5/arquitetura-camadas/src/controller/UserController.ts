import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { MissingFields } from "../error/MissingFields";

export class UserController {
    public signup = async (req: Request, res: Response) => {
        try {
            const { name, email, password } = req.body

            if (!name || !email || !password) {
                throw new MissingFields()
            }
            const newUser: CreateNewUser = {
                name: name,
                email: email,
                password: password
            }

            const userBusiness = new UserBusiness()
            const user = await userBusiness.signup(newUser)

            res.status(201).send(user)

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }
}