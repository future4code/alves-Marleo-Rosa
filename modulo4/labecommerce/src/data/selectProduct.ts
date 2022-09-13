import connection from "../connection";
import { productData } from "../types";

export default async function selectProduct(productid: string): Promise<productData | undefined> {

    const [result] = await connection().select("labecommerce_products").where({ id: productid })

    const productType: productData = {
        id: result.id,
        name: result.name,
        price: result.price,
        image_url: result.image_url
    }
    return productType
}