import User from "../model/User";
import { IUserDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

// Utiliza sempre que precisar salvar, editar, deletar ou consultar recursos

export class UserDatabase extends BaseDatabase {

    public async createUser(user: User) {

        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            nickname: user.getNickName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        await this.getConnection().insert(userDB).into("User")
    }

    public async edit(id: string, nickname: string) {
        await this.getConnection().update({ nickname }).into("User").where({ id })
    }

    public async getUserByEmail(email: string): Promise<IUserDB | undefined> {
        const result: IUserDB[] = await this.getConnection()
            .select("*")
            .from("User")
            .where({ email })

        return result[0]
    }

    public async getUserByPassword(senha: string) {
        const result: IUserDB[] = await this.getConnection()
            .select("*")
            .from("User")
            .where({ password: senha })

        return result
    }

    public async getUserById(id: string) {
        const result: IUserDB[] = await this.getConnection()
            .select("*")
            .from("User")
            .where({ id })

        return result[0]
    }

    public async getUsers() {
        const result: IUserDB[] = await this.getConnection()
            .select("*")
            .from("User")

        return result
    }
}
