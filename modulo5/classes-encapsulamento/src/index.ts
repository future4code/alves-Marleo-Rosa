import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
dotenv.config();
export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA
    }
});
const app: Express = express();
app.use(express.json());
app.use(cors());

// Exercício 1
// a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
// são basicamente funções de inicialização de uma classe, as quais são invocadas no momento em que objetos desta classe são criadas. 

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    // private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

}
// b) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
// 1 vez

const cpf = "190.319.831-99"
const name = "Renato Portaluppi"
const age = 60

const newUser: UserAccount = new UserAccount(cpf, name, age)

// c) Como conseguimos ter acesso às propriedades privadas de uma classe?
// Variáveis privadas só podem ser acessadas de dentro da própria classe (usando a keyword this)

// Exercício 2

class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(description: string, value: number, date: string) {
        this.description = description
        this.value = value
        this.date = date
    }
}

// - Exercício 3

// Crie uma classe **Bank**, que será responsável por guardar todos os dados da aplicação. Ela deve possuir a propriedades *accounts*, privada (crie os *getters* e *setters* que achar apropriado).

class Bank {
    private accounts: UserAccount[]

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts
    }
}

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});