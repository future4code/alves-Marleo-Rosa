export type userInput = {
    name: string,
    email: string,
    password: string
}

export type userData = {
    id: string
    name: string,
    email: string,
    password: string
}

export type productInput = {
    name: string,
    price: number,
    image_url: string
}

export type productData = {
    id: string
    name: string,
    price: number,
    image_url: string
}

export type purchaseInput = {
    userId: string,
    productId: string,
    quantity: number
}

export type purchaseData = {
    id: string
    totalPrice: number,
    userId: string,
    productId: string,
    quantity: number
}