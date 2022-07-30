import React from 'react'
import { DivHeader, BotaoHeader, ContainerHeader, BotaoLoginLogout, LogoImage } from './styled'
import { goToLogin, goToRecipesList } from "../routes/coordinator"
import { useNavigate } from "react-router-dom"
import logo from "../assets/img/logo.png"

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
                <BotaoHeader onClick={() => goToRecipesList(navigate)}>LabEddit</BotaoHeader>
                <LogoImage src={logo} />

                <BotaoLoginLogout onClick={rightButtonAction}>{rightButtonText}</BotaoLoginLogout>
                    {/* <button </button> */}

            </DivHeader>
        </ContainerHeader>
    )
}

export default Header