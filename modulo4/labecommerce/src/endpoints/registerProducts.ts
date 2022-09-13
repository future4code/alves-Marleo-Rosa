import { Request, Response } from "express";
import insertProducts from "../data/insertProducts";
import { productData, productInput } from "../types";

export default async function registerProducts(req: Request, res: Response) {
    try {
        const { name, price, image_url }: productInput = req.body

        if (!name || !price || !image_url) {
            throw new Error("O name, price e image_url devem ser passados");
        }

        const productInsert: productData = {
            id: Date.now().toString(),
            name,
            price,
            image_url
        }

        const anwser = await insertProducts(productInsert)

        res.status(201).send({ message: anwser })

    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}