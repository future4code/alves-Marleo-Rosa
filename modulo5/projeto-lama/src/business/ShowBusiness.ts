import { ShowDatabase } from "../database/migrations/ShowDatabase"
import { AuthenticationError } from "../errors/AuthenticationError"
import { AuthorizationError } from "../errors/AuthorizationError"
import { NotFoundError } from "../errors/NotFoundError"
import { IAddTicketsInputDTO, IAddTicketsOutputDTO, ICreateShowInputDTO, ICreateShowOutputDTO, IDeleteShowInputDTO, IDeleteShowOutputDTO, IGetShowInputDTO, IGetShowOutputDTO, IRemoveTicketsInputDTO, IRemoveTicketsOutputDTO, ITicketsDB, Show } from "../models/Show"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }
    // criar autenticação do show

    public createShow = async (input: ICreateShowInputDTO) => {
        const { token, content } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new AuthenticationError()
        }

        if (typeof content !== "string") {
            throw new Error("Parâmetro content inválido");
        }

        if (content.length < 1) {
            throw new Error("Parâmetro 'content' inválido: mínimo de 1 caracteres")
        }

        const id = this.idGenerator.generate()

        const show = new Show(
            id,
            content,
            payload.id
        )

        await this.showDatabase.createShow(show)

        const response: ICreateShowOutputDTO = {
            message: "Show criado com sucesso",
            show
        }
        return response
    }

    public getShows = async (input: IGetShowInputDTO) => {
        const { token } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new AuthenticationError()
        }

        const showsDB = await this.showDatabase.getShows()

        const shows = showsDB.map(showDB => {
            return new Show(
                showDB.id,
                showDB.content,
                showDB.user_id
            )
        })

        for (let show of shows) {
            const showId = show.getId()
            const tickets = await this.showDatabase.getTickets(showId)
            show.setTickets(tickets)
        }

        const response: IGetShowOutputDTO = {
            shows
        }
        return response
    }

    public deleteShow = async (input: IDeleteShowInputDTO) => {
        const { token, showId } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new AuthenticationError()
        }

        const showDB = await this.showDatabase.findShowById(showId)

        if (!showDB) {
            throw new NotFoundError()
        }

        if (payload.role === USER_ROLES.NORMAL) {
            if (showDB.user_id !== payload.id) {
                throw new AuthorizationError()
            }
        }

        await this.showDatabase.deleteShow(showId)

        const response: IDeleteShowOutputDTO = {
            message: "Show deletado com sucesso"
        }

        return response
    }

    public addTickets = async (input: IAddTicketsInputDTO) => {
        const { token, showId } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new AuthenticationError()
        }

        const showDB = await this.showDatabase.findShowById(showId)

        if (!showDB) {
            throw new NotFoundError()
        }

        const isAlreadyTicked = await this.showDatabase.findTickets(
            showId,
            payload.id
        )

        if (isAlreadyTicked) {
            throw new Error("Já comprou o ticket");
        }

        const ticketsDB: ITicketsDB = {
            id: this.idGenerator.generate(),
            show_id: showId,
            user_id: payload.id
        }

        await this.showDatabase.addTickets(ticketsDB)

        const response: IAddTicketsOutputDTO = {
            message: "Ticket comprado com sucesso"
        }
        return response
    }

    public removeTickets = async (input: IRemoveTicketsInputDTO) => {
        const { token, showId } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new AuthenticationError()
        }

        const showDB = await this.showDatabase.findShowById(showId)

        if (!showDB) {
            throw new NotFoundError()
        }
        const isAlreadyTicked = await this.showDatabase.findTickets(
            showId,
            payload.id
        )

        if (!isAlreadyTicked) {
            throw new Error("Ainda não deu ticket");
        }

        await this.showDatabase.removeTickets(showId, payload.id)

        const response: IRemoveTicketsOutputDTO = {
            message: "Ticket removido com sucesso"
        }
    }
}