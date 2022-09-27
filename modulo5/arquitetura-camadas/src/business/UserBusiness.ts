import { UserDatabase } from "../database/UserDatabase"
import { MissingFields } from "../error/MissingFields"
import { User } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    public signup = async (user: CreateNewUser) => {

        const { name, email, password } = user


        if (!name || typeof name !== "string" || name.length < 3) {
            throw new MissingFields()
        }

        if (!email || typeof email !== "string") {
            throw new MissingFields()
        }

        if (email.indexOf("@") == -1) {
            throw new MissingFields()
        }

        if (!password || typeof password !== "string" || password.length < 6) {
            throw new MissingFields()
        }

        const UserData = new UserDatabase()

        const userDB = await UserData.getUserByEmail(email)

        if (userDB) {
            throw new MissingFields()
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.createId()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const newUser = new User(
            id,
            name,
            email,
            hashPassword
        )

        await UserData.CreateNewUser(newUser)

        const payload: TokenPayload = {
            id: newUser.getId(),
            role: newUser.getRole()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)

        const response = {
            message: "Seu usuário foi criado",
            token
        }

        return response

    }
}