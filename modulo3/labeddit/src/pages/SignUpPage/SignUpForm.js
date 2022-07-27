import React from 'react'
import { InputsContainer, TextField } from "./styled"
import useForm from "../../hooks/useForm"
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../services/user'

const SignUpForm = () => {
    const navigate = useNavigate()

    const { form, handleInputChange, clear } = useForm({ name: "", email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate)
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    placeholder='Nome:'
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    type="name"
                    required
                />
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
                >Cadastrar
                </button>

            </form>
        </InputsContainer>
    )
}

export default SignUpForm