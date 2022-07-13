import React from 'react'
import { useNavigate } from "react-router-dom"
import { Botoes, Escopo, Tudao } from './styled'
// import imgCarina from 'src\assets\img\carina.jpg'

const PaginaMenu = () => {
    const navigate = useNavigate()

    const goToVerViagens = () => {
        navigate("/VerViagens")
    }
    const goToPainelAdmin = () => {
        navigate("/PainelAdmin")
    }
    return (
        <div>
            <Escopo>
                <Tudao>
                    <h1>LabeX</h1>
                    <Botoes>
                        <button onClick={goToVerViagens}>Ver viagens</button>
                        <button onClick={goToPainelAdmin}>Página Privada</button>
                    </Botoes>
                </Tudao>
            </Escopo>
        </div>
    )
}

export default PaginaMenu