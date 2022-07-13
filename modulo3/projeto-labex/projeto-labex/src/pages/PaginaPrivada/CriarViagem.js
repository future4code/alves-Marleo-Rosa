import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Botoes, Escopo, Tudao } from './styled-admin'

const CriarViagem = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <Escopo>
                <Tudao>
                    <h3>Criar Viagem</h3>
                    <Botoes>
                        <button onClick={goBack}>Voltar</button>
                        <button>Criar</button>
                    </Botoes>
                </Tudao>
            </Escopo>
        </div >
    )
}

export default CriarViagem