import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Botoes, Escopo, Tudao } from './styled-admin'
import listaViagens from "./../PaginaPublica/VerViagens"

const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token === null) {
            console.log("Não está logado!")
            navigate("/Login")
        }

    })
}

const PainelAdmin = () => {
    useProtectedPage()

    const navigate = useNavigate()

    const goToCriarViagem = () => {
        navigate("/CriarViagem")
    }

    const goToLogin = () => {
        navigate("/Login")
    }

    const goToLogout = () => {
        navigate("/Logout")
    }

    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <Escopo>
                <Tudao>
                    <h3>Painel Administrativo</h3>
                    <Botoes>
                        <button onClick={goBack}>Voltar</button>
                        <button onClick={goToCriarViagem}>Criar Viagem</button>
                        <button onClick={goToLogin}>Login</button>
                        <button onClick={goToLogout}>Logout</button>
                    </Botoes>
                    {listaViagens}
                </Tudao>
            </Escopo>
        </div >
    )
}

export default PainelAdmin