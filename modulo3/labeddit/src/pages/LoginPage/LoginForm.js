import React from 'react'
import { InputsContainer, TextField } from "./styled"
import useForm from "../../hooks/useForm"
import { login } from "../../services/user"
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const { form, handleInputChange, clear } = useForm({ email: "", password: "" })
    const navigate = useNavigate()


    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, navigate)
    }


    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    placeholder='E-mail:'
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    type="email"
                    required
                />
                <TextField
                    placeholder='Senha:'
                    name="password"
                    value={form.password}
                    onChange={handleInputChange}
                    type="password"
                    required
                />
                <button
                    type='submit'
                >Login
                </button>

            </form>
        </InputsContainer>
    )
}

export default LoginForm