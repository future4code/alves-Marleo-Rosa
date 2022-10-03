import { BaseDatabase } from "../../src/database/BaseDatabase"
import { IShowDB, Show } from "../../src/models/Show"

export class ShowDataBaseMock extends BaseDatabase {
    public static SHOWS_TABLE = "Lama_Shows"
    public static TICKETS_TABLE = "Lama_Tickets"

    public ShowDBModel = (show: Show): IShowDB => {
        const showDB: IShowDB = {
            id: show.getId(),
            content: show.getContent(),
            user_id: show.getUserId()
        }

        return showDB
    }

    public findById = async (showId: string): Promise<IShowDB | undefined> => {
        switch (showId) {
            case "201":
                return {
                    id: "201",
                    content: "Olá, sou novo por aqui!",
                    user_id: "101"
                }
            case "202":
                return {
                    id: "202",
                    content: "Bom dia, família!",
                    user_id: "102"
                }
            case "203":
                return {
                    id: "203",
                    content: "Receba!",
                    user_id: "103"
                }
        }
    }
}