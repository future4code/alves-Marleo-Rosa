import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    public async createUser(user: User) {

        await this.getConnection().insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }).into("users_cookenu")
    }

    public async edit(id: string, nickname: string) {
        await this.getConnection().update({ nickname }).into("users_cookenu").where({ id })
    }

    public async getUserByEmail(email: string) {
        const result = await this.getConnection()
            .select("*")
            .where({ email })
            .from("users_cookenu")

        return result
    }
}