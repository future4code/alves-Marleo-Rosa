export interface IShowDB {
    id: string,
    content: string,
    user_id: string
}

export interface ITicketsDB {
    id: string,
    show_id: string,
    user_id: string
}


export class Show {
    constructor(
        private id: string,
        private content: string,
        private userId: string,
        private tickets: number = 0
    ) { }

    public getId = () => {
        return this.id
    }

    public getContent = () => {
        return this.content
    }

    public getUserId = () => {
        return this.userId
    }

    public getTickets = () => {
        return this.tickets
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setContent = (newContent: string) => {
        this.content = newContent
    }

    public setUserId = (newUserId: string) => {
        this.userId = newUserId
    }

    public setTickets = (newTickets: number) => {
        this.tickets = newTickets
    }

}

export interface ICreateShowInputDTO {
    token: string,
    content: string
}

export interface ICreateShowOutputDTO {
    message: string,
    show: Show
}

export interface IGetShowOutputDTO {
    shows: Show[]
}

export interface IDeleteShowInputDTO {
    token: string,
    showId: string
}

export interface IDeleteShowOutputDTO {
    message: string
}

export interface IAddTicketsInputDTO {
    token: string,
    showId: string
}

export interface IAddTicketsOutputDTO {
    message: string
}

export interface IRemoveTicketsInputDTO {
    token: string,
    showId: string
}

export interface IRemoveTicketsOutputDTO {
    message: string
}