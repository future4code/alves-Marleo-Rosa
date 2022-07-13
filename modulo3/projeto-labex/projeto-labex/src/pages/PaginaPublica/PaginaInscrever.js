import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Botoes, CampoForm, Escopo, Tudao } from '../PaginaMenu/styled'
import { url_base } from '../../constants/url_base'

const PaginaInscrever = () => {

    const [idViagem, setIdViagem] = useState("")
    const [viagens, setViagens] = useState([])
    const { form, onChange, limpaCampos } = useForm({
        name: "",
        age: "",
        aplicationText: "",
        profession: "",
        country: "",
    })

    const inscreverSe = () => {
        const body = form
        const headers = "Content-Type: application/json"
        axios
            .post(`${url_base}/trips/${idViagem}/apply`, body, headers)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                alert("Conexão instável, verifique a sua internet e tente novamente.")
            })
    }

    const cadastrar = (event) => {
        event.preventDefault()
        inscreverSe(form)
        alert("Candidatura efetuada!")
        limpaCampos()
    }

    const pegarViagens = () => {
        axios
            .get(`${url_base}/trips`)
            .then((res) => {
                setViagens(res.data.trips)
            })
            .catch((err) => {
                alert("Conexão instável, verifique a sua internet e tente novamente.")
            })
    }

    useEffect(() => {
        pegarViagens()
    }, [])

    const onChangeViagem = (event) => {
        setIdViagem(event.target.value)
    }
    const opcoes = viagens && viagens.map((trip) => {
        return <option key={trip.id} value={trip.id}>{trip.id}</option>
    })

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <Escopo>
                <Tudao>
                    <h3>Inscreva-se para uma viagem</h3>
                    <CampoForm onSubmit={cadastrar}>
                        <select
                            onChange={onChangeViagem}
                            name={"trip"}
                            value={form.value}
                            required
                        >
                            <option>Escolher viagem</option>
                            {opcoes}
                        </select>
                        <input
                            placeholder={"idade"}
                            type={"number"}
                            name={"age"}
                            value={"form.age"}
                            onChange={onChange}
                            required
                            min={18}
                        />
                        <input
                            placeholder={"Texto de Candidatura"}
                            name={"applicationText"}
                            value={form.applicationText}
                            onChange={onChange}
                            required
                        />
                        <input
                            placeholder={"Profissão"}
                            name={"profession"}
                            value={form.profession}
                            onChange={onChange}
                            required
                        />
                        <select
                            placeholder={"País"}
                            name={"country"}
                            value={form.country}
                            onChange={onChange}
                            required
                        >
                            <option value={""} disabled>Escolha um País</option>
                            {paises.map((country) => {
                                return <option value={country} key={country}>{country}</option>
                            })}
                        </select>
                    </CampoForm>
                    <Botoes>
                        <button onClick={goBack}>Voltar</button>
                        <button>Enviar</button>
                    </Botoes>
                </Tudao>
            </Escopo>
        </div>
    )
}

export default PaginaInscrever