import connection from "../connection"
import { productData } from "../types"

export default async function insertProducts(insertProducts: productData): Promise<string> {

    const { id, name, price, image_url } = insertProducts

    await connection("labecommerce_products")
        .insert({
            id,
            name,
            price,
            image_url
        })

    return `Produto ${name} inserido com sucesso`
}