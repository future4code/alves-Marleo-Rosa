import axios from 'axios'
import { baseURL } from "./baseURL"

// Exercício 2
// a. Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma arrow function assíncrona
// Funções assincronadas retornam promises e permitem o uso do await (espera a conclusão de outras operações async).

// b. Implemente a função solicitada, usando arrow function

const getSubscribers = async (): Promise<any[]> => {
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