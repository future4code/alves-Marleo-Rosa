import axios from "axios"
import { baseURL } from "./baseURL"

// Exercício 4
//Vamos continuar as nossas funcionalidades da API. Crie uma função que permita criar uma nova notícia.

type News = {
    title: string,
    content: string,
    date: number
}

// async function createNews(news: ): Promise<void> {
//     await axios.put(`${baseURL}/news`)
// }

const createNews = async (news: any): Promise<void> => {
    await axios.put(`${baseURL}/news`)
}
createNews()

const news: News = {
    title: "Grêmio campeão do mundo!",
    content: "Grêmio vence o Hamburgo da Alemanha por 2a1",
    date: new Date().getTime()
}