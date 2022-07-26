import React from 'react'
import { DivHeader, BotaoHeader } from './styled'
import { goToLogin, goToRecipesList } from "../routes/coordinator"
import { useNavigate } from "react-router-dom"

export const Header = () => {
    const navigate = useNavigate()
    return (
        <DivHeader>
            <BotaoHeader>
                <button onClick={() => goToRecipesList(navigate)}>LabEddit</button>
                <button onClick={() => goToLogin(navigate)}>Login</button>
            </BotaoHeader>
            <p>LabEddit - Aqui é o Header</p>
        </DivHeader>
    )
}
