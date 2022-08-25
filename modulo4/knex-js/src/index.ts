import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
}

const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    // Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
    // o valor no resultado!
    const count = result[0][0].count;
    return count;
};

app.get('/actors', async (req: Request, res: Response): Promise<void> => {
    try {
        const name: any = req.query.name
        const result = await countActors(name)
        res.status(200).send(result[0])
    } catch (error: any) {
        res.status(500).send("Unexpected error")
    }
})