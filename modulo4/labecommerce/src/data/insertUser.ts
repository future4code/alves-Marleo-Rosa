import connection from "../connection";
import { userInsert } from "../types";

export default async function insertUser(insertUser: userInsert): Promise<string> {

    const { id, name, email, password } = insertUser

    await connection("labecommerce_users")
        .insert({
            id,
            name,
            email,
            password
        })

    return `Usuario ${name} criado com sucesso`
}