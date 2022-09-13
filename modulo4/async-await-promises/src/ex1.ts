import axios from 'axios'
import { baseURL } from "./baseURL"

// Exercício 1
// a. Qual endpoint você deve utilizar para isso?
// GET/subscribers https://labenews.herokuapp.com/subscribers


// b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
// Tipamos com Promise<any>

// c. Implemente uma função nomeada que faça o que foi pedido.
async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data
}

const main = async (): Promise<void> => {
    try {
        const subscribers = await getSubscribers()
        console.log(subscribers)
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}
main()