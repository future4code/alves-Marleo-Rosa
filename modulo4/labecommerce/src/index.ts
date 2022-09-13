import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import createUser from "./endpoints/createUser";
import getUsers from "./endpoints/getUsers";
import registerProducts from "./endpoints/registerProducts";
import getProducts from "./endpoints/getProducts";
import registerPurchases from "./endpoints/registerPurchases";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/user", createUser)
app.get("/users", getUsers)
app.post("/products", registerProducts)
app.get("/products", getProducts)
app.post("/purchases", registerPurchases)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
