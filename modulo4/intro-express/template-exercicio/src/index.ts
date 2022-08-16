import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

app.post('/', (req: Request, res: Response) => {
    res.send('Hello, world!')
})
