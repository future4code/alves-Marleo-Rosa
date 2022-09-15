import { User, UserDB } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    public createUser = async (user: User): Promise<void> => {

        const UserDB: UserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }
        await this.getConnection()
            .insert(UserDB)
            .into("users_cookenu")
    }

    public async edit(id: string, nickname: string) {
        await this.getConnection().update({ nickname }).into("users_cookenu").where({ id })
    }

    public async getUserByEmail(email: string) {
        const result: UserDB[] = await this.getConnection()
            .select("*")
            .where({ email })
            .from("users_cookenu")

        return result[0]
    }
}