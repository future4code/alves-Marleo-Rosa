import React from 'react'
import { useNavigate } from 'react-router-dom'

const DetalhesViagens = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            Página de detalhes
            <button onClick={goBack}>Voltar</button>

        </div >
    )
}

export default DetalhesViagens