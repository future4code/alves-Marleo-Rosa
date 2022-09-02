import connection from "../connection";
import { userData } from "../types";

export default async function insertUser(insertUser: userData): Promise<string> {

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