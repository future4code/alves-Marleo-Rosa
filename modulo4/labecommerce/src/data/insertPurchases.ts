import connection from "../connection"
import { purchaseData } from "../types"

export default async function insertPurchases(insertPurchases: purchaseData): Promise<string> {

    const { id, totalPrice, userId, productId, quantity } = insertPurchases

    await connection("labecommerce_purchases")
        .insert({
            id,
            total_price: totalPrice,
            user_id: userId,
            product_id: productId,
            quantity
        })

    return "Compra efetuada com sucesso"
}