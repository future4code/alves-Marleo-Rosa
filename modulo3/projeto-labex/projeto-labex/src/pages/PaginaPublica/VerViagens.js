import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Botoes, BotãoEstiloso, Escopo, StyleH3, StyleListaViagens, Tudao } from '../PaginaMenu/styled'
import { url_base } from "../../constants/url_base";

//Lógica do Router
const VerViagens = () => {
    const [viagens, setViagens] = useState([])

    const navigate = useNavigate()

    const goToPaginaInscrever = () => {
        navigate("/PaginaInscrever")
    }

    const goBack = () => {
        navigate(-1)
    }

    // A função do axios para essa requisição retornar todas as viagens.
    const retornaViagens = () => {
        axios
            .get(`${url_base}/trips`)
            .then(res => {
                setViagens(res.data.trips)
            })
            .catch(err => alert(`Problemas de conexão`))
    }

    useEffect(() => {
        retornaViagens()
    }, [])

    const listaViagens = viagens.map((trip) => {
        return (
            <StyleListaViagens key={trip.id}>
                <p>Nome: {trip.name}</p>
                <p>Descrição: {trip.description}</p>
                <p>Planeta: {trip.planet}</p>
                <p>Duração: {trip.durationInDays}</p>
                <p>Data: {trip.date}</p>
            </StyleListaViagens>
        )
    })
    return (
        <div>
            <Escopo>
                <Tudao>
                    <StyleH3>
                        <h3>Lista de Viagens</h3>
                    </StyleH3>
                    {listaViagens}
                    <Botoes>
                        <BotãoEstiloso onClick={goBack}>Voltar</BotãoEstiloso>
                        <BotãoEstiloso onClick={goToPaginaInscrever}>Inscrever-se</BotãoEstiloso>
                    </Botoes>
                </Tudao>
            </Escopo>
        </div>
    )
}

export default VerViagens