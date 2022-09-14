import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import User from "../model/User";
import GenerateId from "../services/GenerateId";
import { IUserDB } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password, role } = req.body
      const userDB = new UserDatabase()

      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      }

      const user = await userDB.getUserByEmail(email)
      console.log(user)
      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id = new GenerateId().createId()
      

      const newUser =  new User(id, name, nickname, email, password, role )

     await userDB.createUser(newUser)

      res.status(201).send({ newUser })

   } catch (error) {
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}