import { Request, Response } from "express";
import insertPurchases from "../data/insertPurchases";
import selectProduct from "../data/selectProduct";
import selectUser from "../data/selectUser";
import { purchaseData, purchaseInput } from "../types";

export default async function registerPurchases(req: Request, res: Response) {
    try {
        const { userId, productId, quantity } = req.body

        if (!userId || !productId || !quantity) {
            throw new Error("O user_id, product_id e quantity devem ser passados");
        }

        const userExist = await selectUser(userId)

        if (!userExist) {
            throw new Error("Usuário não encontrado");
        }

        const productExist = await selectProduct(productId)
        
        if (!productExist) {
            throw new Error("Produto não encontrado");
        }

        // Calculando o preço total
        const totalPrice = productExist.price * quantity

        const purchasesInsert: purchaseData = {
            id: Date.now().toString(),
            totalPrice,
            userId,
            productId,
            quantity
        }

        const anwser = await insertPurchases(purchasesInsert)

        res.status(201).send({ message: anwser })

    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}