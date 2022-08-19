import express from "express";
import cors from "cors";
import { users, User, UserType } from "./data";
import { type } from "os";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

//ex1
app.get("/allusers", (req, res) => {
    res.send(users)
})
//ex2 NÃO FUNCIONOU
app.get("/users/:type", (req, res) => {
    try {
        const type: string = req.query.q as string
        if (!type) { throw new Error("Verifique sua requisição") }
        if (type.toLowerCase() !== UserType.ADMIN.toLowerCase() || type.toLowerCase() !== UserType.NORMAL.toLowerCase()) {
            throw new Error("Admin ou Normal");
        }
        const userFilter = users.filter((user) => user.type.toLowerCase() == type.toLowerCase())
        res.status(200).send(userFilter)
    } catch (error: any) {
        switch (error.message) {
            case "Prrencha corretamente":
                res.status(400) //ou res.statusCode = 422
                break;
            case "Admin ou Normal":
                res.status(400)
                break;
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})


//ex3 NÃO FUNCIONOU
app.get("/users/:name", (req, res) => {
    try {
        const name: string = req.query.q as string
        if (!name) { throw new Error("Check os dados") }

        const user = users.filter((user) => {
            return user.name.toLowerCase() === name.toLowerCase()
        })
        if (!user.length) {
            res.send("Não existente")
        }
    } catch (error: any) {
        switch (error.message) {
            case "Check os dados":
                res.status(400)
                break;
            case "Usuário não encontrado":
                res.status(404)
                break;
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})