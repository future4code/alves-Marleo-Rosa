import connection from "../connection";
import { userData } from "../types";

export default async function selectUser(userId: string): Promise<userData | undefined> {
    const [result] = await connection().select("*").where({ id: userId })

    const userType: userData = {
        id: result.id,
        name: result.name,
        email: result.email,
        password: result.password
    }
    return userType
}