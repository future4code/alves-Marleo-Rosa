import React from 'react'
import { DivHeader, BotaoHeader, ContainerHeader } from './styled'
import { goToLogin, goToRecipesList } from "../routes/coordinator"
import { useNavigate } from "react-router-dom"

const Header = ({ rightButtonText, setRightButtonText }) => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if (token) {
            logout()
            setRightButtonText("Login")
            goToLogin(navigate)
        } else {
            goToLogin(navigate)
        }
    }

    return (
        <ContainerHeader>
            <DivHeader>
                <BotaoHeader>
                    <button onClick={() => goToRecipesList(navigate)}>LabEddit</button>
                    <button onClick={rightButtonAction}>{rightButtonText}</button>
                </BotaoHeader>
            </DivHeader>
        </ContainerHeader>
    )
}

export default Header