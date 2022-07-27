import axios from 'axios'
import { BASE_URL } from "../constants/urls"
import { goToRecipesList } from '../routes/coordinator'

export const login = (body, clear, navigate) => {
    axios
        .post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToRecipesList(navigate)
        })
        .catch((err) => alert("Email ou senha incorreta, tente novamente!"))
}

export const signUp = (body, clear, navigate) => {
    axios
        .post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToRecipesList(navigate)
        })
        .catch((err) => alert("Ocorreu uma falha ao criar o cadastro, tente novamente!"))
}