import { UserDatabase } from "../database/UserDatabase"
import { ParamsError } from "../errors/ParamsError"
import { ISignupInputDTO, User, USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }

    public signup = async (input: ISignupInputDTO) => {
        const name = input.name
        const email = input.email
        const password = input.password

        if (!name || !email || !password) {
            throw new ParamsError()
        }

        if (typeof name !== "string" || name.length < 3) {
            throw new Error("name deve possuir ao menos 3 caracteres");
        }

        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (typeof password !== "string" || password.length < 6) {
            throw new Error("Parâmetro 'password' inválido");
        }

        const userDB = await this.userDatabase.findByEmail(email)

        if (userDB) {
            throw new Error("E-mail já cadastrado");
        }

        const id = this.idGenerator.generate()
        const hasheadPassword = await this.hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hasheadPassword,
            USER_ROLES.NORMAL
        )

        await this.userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response = {
            message: "Usuário cadastrado com sucesso",
            token
        }
        return response
    }
}