import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { url_base } from '../../constants/url_base'
import { CampoForm } from '../PaginaMenu/styled'
import { Botoes, Escopo, Tudao } from './styled-admin'

const Login = () => {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const navigate = useNavigate()
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangeSenha = (event) => {
        setSenha(event.target.value)
    }
    const goBack = () => {
        navigate("/")
    }
    // const logar = () => {
    //     navigate("/PainelAdmin")
    // }
    const onSubmitLogin = () => {
        const body = {
            email: email,
            password: senha
        }
        axios
            .post(`${url_base}/login`, body)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                // logar()
                navigate("/PainelAdmin")
            })
            .catch((err) => {
                console.log("Erro ao efetuar login", err.response)
                alert("Login ou senha incorreta, tente novamente!")
            })
    }
    return (
        <div>
            <Escopo>
                <Tudao>
                    <h3>Login</h3>
                    <CampoForm>
                        <input
                            placeholder='E-mail'
                            type='email'
                            value={email}
                            onChange={onChangeEmail}
                        />
                        <input
                            placeholder='senha'
                            type='password'
                            value={senha}
                            onChange={onChangeSenha}
                        />
                    </CampoForm>
                    <Botoes>
                        <button onClick={goBack}>Voltar</button>
                        <button onClick={onSubmitLogin} >Login</button>
                    </Botoes>
                </Tudao>
            </Escopo>
        </div >
    )
}

export default Login