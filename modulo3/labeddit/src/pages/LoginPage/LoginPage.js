import React from 'react'
import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./styled"
import logo from "../../assets/img/logo.png"
import LoginForm from "./LoginForm"
import { goToSignUp } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import useUnProtectPage from '../../hooks/useUnprotectedPage'

const LoginPage = () => {
    useUnProtectPage()
    const navigate = useNavigate()

    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <h1>LoginPage</h1>
            <LoginForm />
            <SignUpButtonContainer>
                <button
                    onClick={() => goToSignUp(navigate)}
                    type='submit'

                >Cadastrar</button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage