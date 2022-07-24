import React from 'react'
import { useNavigate } from "react-router-dom"
import { Botoes, BotãoEstiloso, ByMarleo, Escopo, ImgHome, Tudao } from './styled'
import ImagemTurismo from "../../assets/img/turismo-espacial.png"

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
                    <ImgHome src={ImagemTurismo} />
                    <Botoes>
                        <BotãoEstiloso onClick={goToVerViagens}>Ver viagens</BotãoEstiloso>
                        <BotãoEstiloso onClick={goToPainelAdmin}>Página Privada</BotãoEstiloso>
                    </Botoes>
                    <ByMarleo>
                        © 2022 by Márleo Piber
                    </ByMarleo>
                </Tudao>
            </Escopo>
        </div>
    )
}

export default PaginaMenu