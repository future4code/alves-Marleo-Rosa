import { Request, Response } from "express";
import { pokemonList } from "../database/PokemonList";
import { BaseError } from "../errors/BaseError";
import { Pokemon } from "../models/Pokemon";

export default async function getPokemons(req: Request, res: Response) {
    try {
        let message = "Sucess"
        const result: Pokemon[] = pokemonList
        if (!result) {
            res.statusCode = 404
            message = "Lista de pokémons não encontrada"
            throw new BaseError()
        }
        res.status(200).send({ message, result })
    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
        res.send({ message })
    }
}