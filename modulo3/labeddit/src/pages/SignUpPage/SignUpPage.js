import React from 'react'
import logo from "../../assets/img/logo.png"
import useUnProtectPage from '../../hooks/useUnprotectedPage'
import SignUpForm from "./SignUpForm"
import { LogoImage, ScreenContainer } from './styled'

const SignUpPage = ({ setRightButtonText }) => {
    useUnProtectPage()
    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <SignUpForm setRightButtonText={setRightButtonText} />
        </ScreenContainer>
    )
}

export default SignUpPage