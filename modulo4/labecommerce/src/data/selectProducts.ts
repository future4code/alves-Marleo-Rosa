import connection from "../connection"
import { productData } from "../types"

const typeProduct = (product: any) => {
    const registerProducts: productData = {
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: product.image_url
    }

    return registerProducts
}

export default async function selectProducts(): Promise<productData[] | undefined> {

    const result = await connection("labecommerce_products")

    const allProductsType = result.map((product) => {
        return typeProduct(product)
    })

    console.log(allProductsType)

    return allProductsType
}