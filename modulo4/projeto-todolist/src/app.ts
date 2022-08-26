import express from "express";
import cors from "cors";
import connection from "./connection";
import { AddressInfo } from "net";
import createUser from "./endpoints/createUser";
import getUserById from "./endpoints/getUserById";

const app = express();
app.use(express.json());
app.use(cors());


app.post('/user', createUser)
app.get('/user/:id', getUserById)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
export default app 