import { IShowDB, Show } from "../models/Show";
import { BaseDatabase } from "./BaseDatabase";

export class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"

    public toShowDBModel = (show: Show): IShowDB => {
        const showDB: IShowDB = {
            id: show.getId(),
            content: show.getContent(),
            user_id: show.getUserId()
        }
        return showDB
    }

}