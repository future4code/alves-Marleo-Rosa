import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { IAddTicketsInputDTO, ICreateShowInputDTO, IDeleteShowInputDTO, IGetShowInputDTO, IRemoveTicketsInputDTO } from "../models/Show";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) { }

    public createShow = async (req: Request, res: Response) => {
        try {
            const input: ICreateShowInputDTO = {
                token: req.headers.authorization,
                content: req.body.content
            }

            const response = await this.showBusiness.createShow(input)
            res.status(200).send(response)
        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }

    public getShows = async (req: Request, res: Response) => {
        try {
            const input: IGetShowInputDTO = {
                token: req.headers.authorization
            }

            const response = await this.showBusiness.getShows(input)
            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public deleteShow = async (req: Request, res: Response) => {
        try {
            const input: IDeleteShowInputDTO = {
                token: req.headers.authorization,
                showId: req.params.id
            }

            const response = await this.showBusiness.removeTickets(input)
            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public addTickets = async (req: Request, res: Response) => {
        try {
            const input: IAddTicketsInputDTO = {
                token: req.headers.authorization,
                showId: req.params.id
            }

            const response = await this.showBusiness.addTickets(input)
            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public removeTickets = async (req: Request, res: Response) => {
        try {
            const input: IRemoveTicketsInputDTO = {
                token: req.headers.authorization,
                showId: req.params.id
            }

            const response = await this.showBusiness.removeTickets(input)
            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
}