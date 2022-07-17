import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { url_base } from '../../constants/url_base'
import useForm from '../../hooks/useForm'
import { useProtectedPage } from '../../hooks/useProtectPage'
import { Botoes, BotãoEstiloso, Escopo, StyleCriarViagem, Tudao } from './styled-admin'

const CriarViagem = () => {

    useProtectedPage()
    const token = localStorage.getItem("token")

    const { form, onChange, limpaCampos } = useForm({
        "name": "",
        "planet": "",
        "date": "",
        "description": "",
        "durationDays": ""

    })
    const addViagem = (event) => {
        const body = form
        console.log("body:", form)
        const headers = { auth: token }
        event.preventDefault()
        axios
            .post(`${url_base}/trips`, body, headers)
            .then((res) => {
                alert("Viagem criada com sucesso!")
            })
            .catch((err) => {
                alert("Conexão instável, tente novamente em instantes.")
            })
        limpaCampos()
    }



    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <Escopo>
                <Tudao>
                    <h3>Criar Viagem</h3>

                    <StyleCriarViagem onSubmit={addViagem}>
                        <input
                            placeholder={"Nome"}
                            name={"name"}
                            value={form.name}
                            onChange={onChange}
                            required />
                        <select placeholder="Planeta" name="planet" value={form.planet} onChange={onChange} required>
                            <option value="" disabled="" selected="">Escolha um Planeta</option>
                            <option value="Mercúrio">Mercúrio</option>
                            <option value="Vênus">Vênus</option>
                            <option value="Terra">Terra</option>
                            <option value="Marte">Marte</option>
                            <option value="Jupiter">Jupiter</option>
                            <option value="Saturno">Saturno</option>
                            <option value="Urano">Urano</option>
                            <option value="Netuno">Netuno</option>
                            <option value="Plutão">Plutão</option>
                        </select>
                        <input
                            placeholder={"Data"}
                            type={"date"}
                            name={"date"}
                            value={form.date}
                            onChange={onChange}
                            required
                        />
                        <input
                            placeholder={"Descrição da Viagem"}
                            name={"description"}
                            value={form.description}
                            onChange={onChange}
                            required />
                        <input
                            placeholder={"Duração da Viagem em dias"}
                            type={"number"}
                            name={"durationInDays"}
                            value={form.durationInDays}
                            onChange={onChange}
                            required />
                    </StyleCriarViagem>
                    <Botoes>
                        <BotãoEstiloso onClick={goBack}>Voltar</BotãoEstiloso>
                        <BotãoEstiloso type="submit" onClick={addViagem}>Criar Viagem</BotãoEstiloso>
                    </Botoes>
                </Tudao>
            </Escopo>
        </div >
    )
}

export default CriarViagem