import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Botoes, BotãoEstiloso, Escopo, StyleListaViagens, Tudao } from './styled-admin'
import { url_base } from '../../constants/url_base'
import axios from 'axios'
import { useProtectedPage } from '../../hooks/useProtectPage'

const PainelAdmin = () => {

    useProtectedPage()
    const [viagens, setViagens] = useState([])

    const navigate = useNavigate()

    const goToCriarViagem = () => {
        navigate("/CriarViagem")
    }

    const goToLogout = () => {
        navigate("/Login")
        localStorage.clear()
    }

    const goBack = () => {
        navigate("/")
    }


    // A função do axios para essa requisição retornar todas as viagens.
    const retornaViagens = () => {
        axios
            .get(`${url_base}/trips`)
            .then(res => {
                // console.log(res.data)
                setViagens(res.data.trips)
            })
            .catch(err => alert(`Problemas de conexão, tente novamente em instantes.`))
    }

    useEffect(() => {
        retornaViagens()
    }, [])

    const listaViagens = viagens.map((trip) => {
        const deletaViagens = (id) => {
            const token = localStorage.getItem("token")
            axios
                .delete(`${url_base}/trips/${id}`,
                    {
                        headers: {
                            auth: token
                        }
                    }
                )
                .then((res) => {
                    alert("Viagem deletada!")
                    retornaViagens()
                })
                .catch((err) => {
                    alert("Problemas de conexão, tente novamente em instantes.")
                })
        }
        const deletar = (id) => {
            if (window.confirm(`Deseja mesmo deletar a viagem ${trip.name}?`)) {
                deletaViagens(trip.id)
            }
        }
        return (
            <StyleListaViagens key={trip.id}

            >
                <p onClick={() => navigate("/DetalhesViagens", trip.id)}>{trip.name}</p>
                <button onClick={() => deletar(trip.id)}>X</button>
            </StyleListaViagens>
        )
    })


    return (
        <div>
            <Escopo>
                <Tudao>
                    <h3>Painel Administrativo</h3>
                    <h4>Lista de viagens:</h4>
                    {listaViagens}
                    <Botoes>
                        <BotãoEstiloso onClick={goBack}>Voltar</BotãoEstiloso>
                        <BotãoEstiloso onClick={goToCriarViagem}>Criar Viagem</BotãoEstiloso>
                        <BotãoEstiloso onClick={goToLogout}>Logout</BotãoEstiloso>
                    </Botoes>
                </Tudao>
            </Escopo>
        </div >
    )
}

export default PainelAdmin