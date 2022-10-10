import { IShowDB, ITicketsDB } from "../../models/Show"
import { IUserDB, USER_ROLES } from "../../models/User"

export const users: IUserDB[] = [
    {
        id: "101",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC", // bananinha
        role: USER_ROLES.ADMIN
    },
    {
        id: "102",
        name: "Fulano",
        email: "fulano@gmail.com",
        password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO", // qwerty00
        role: USER_ROLES.NORMAL
    },
    {
        id: "103",
        name: "Ciclana",
        email: "ciclana@gmail.com",
        password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i", // asdfg123
        role: USER_ROLES.NORMAL
    }
]

export const shows: IShowDB[] = [
    {
        id: "201",
        content: "Olá, sou novo por aqui!",
        user_id: "101"
    },
    {
        id: "202",
        content: "Bom dia, família!",
        user_id: "102"
    },
    {
        id: "203",
        content: "Receba!",
        user_id: "103"
    }
]

export const tickets: ITicketsDB[] = [
    {
        id: "301",
        show_id: "201",
        user_id: "101"
    },
    {
        id: "302",
        show_id: "202",
        user_id: "101"
    },
    {
        id: "303",
        show_id: "203",
        user_id: "101"
    },
    {
        id: "304",
        show_id: "201",
        user_id: "102"
    },
    {
        id: "305",
        show_id: "201",
        user_id: "103"
    },
    {
        id: "306",
        show_id: "202",
        user_id: "103"
    }
]