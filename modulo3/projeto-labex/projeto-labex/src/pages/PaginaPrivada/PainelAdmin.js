import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Botoes, Escopo, Tudao } from './styled-admin'

const PainelAdmin = () => {
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
                </Tudao>
            </Escopo>
        </div >
    )
}

export default PainelAdmin