import React from 'react'
import { DivHeader, BotaoHeader, ContainerHeader } from './styled'
import { goToLogin, goToRecipesList } from "../routes/coordinator"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
    return (
        <ContainerHeader>
            <DivHeader>
                <BotaoHeader>
                    <button onClick={() => goToRecipesList(navigate)}>LabEddit</button>
                    <button onClick={() => goToLogin(navigate)}>Login</button>
                </BotaoHeader>
            </DivHeader>
        </ContainerHeader>
    )
}

export default Header