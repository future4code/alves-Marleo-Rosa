import { IShowDB, ITicketsDB, Show } from "../../models/Show"
import { BaseDatabase } from "../BaseDatabase"

export class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"

    public toShowDBModel = (show: Show) => {
        const showDB: IShowDB = {
            id: show.getId(),
            content: show.getContent(),
            user_id: show.getUserId()
        }

        return showDB
    }

    public createShow = async (show: Show) => {
        const showDB = this.toShowDBModel(show)

        await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .insert(showDB)
    }

    public getShows = async () => {
        const showsDB: IShowDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .select()

        return showsDB
    }

    public getTickets = async (showId: string) => {
        const result: any = await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .select()
            .count("id AS tickets")
            .where({ show_id: showId })

        return result[0].tickets as number
    }

    public findShowById = async (showId: string) => {
        const showsDB: IShowDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .select()
            .where({ id: showId })
        return showsDB[0]
    }

    public deleteShow = async (showId: string) => {
        await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .delete()
            .where({ id: showId })
    }

    public findTickets = async (showId: string, userId: string) => {
        const ticketsDB: ITicketsDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .select()
            .where({ show_id: showId })
            .andWhere({ user_id: userId })

        return ticketsDB[0]
    }

    public addTickets = async (ticketDB: ITicketsDB) => {
        await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .insert(ticketDB)
    }

    public removeTickets = async (showId: string, userId: string) => {
        await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .delete()
            .where({ show_id: showId })
            .andWhere({ user_id: userId })
    }
}