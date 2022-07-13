import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Botoes, Escopo, Tudao } from './styled-admin'

const Logout = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <Escopo>
                <Tudao>
                    <h3>Logout</h3>
                    <Botoes>
                        <button onClick={goBack}>Voltar</button>
                        <button>Logout</button>
                    </Botoes>
                </Tudao>
            </Escopo>
        </div >
    )
}

export default Logout