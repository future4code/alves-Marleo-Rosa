import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { url_base } from '../../constants/url_base'
import { useProtectedPage } from '../../hooks/useProtectPage'
import { Botoes, BotãoEstiloso, Escopo, Tudao } from './styled-admin'

const DetalhesViagens = () => {
    useProtectedPage()

    const [detalhamento, setDetalhamento] = useState([])
    const parametro = useParams()
    const navigate = useNavigate()

    const goBack = () => {
        navigate("/PainelAdmin")
    }

    const detalhaViagens = () => {
        const token = localStorage.getItem("token")
        axios
            .get(`${url_base}/trips/${parametro.id}`,
                {
                    headers: {
                        auth: token
                    }
                }
            )
            .then((res) => {
                setDetalhamento(res.data.trip)
                alert("Sucesso!")
            })
            .catch((err) => {
                alert("Problemas de conexão, tente novamente em instantes.")
            })

    }

    useEffect(() => {
        detalhaViagens()
    }, [])

   

        return (
            <div>
                <Escopo>
                    <Tudao>
                        Página de detalhes
                        <Botoes>
                            <BotãoEstiloso onClick={goBack}>Voltar</BotãoEstiloso>
                        </Botoes>
                    </Tudao>
                </Escopo>
            </div >
        )
    }

export default DetalhesViagens