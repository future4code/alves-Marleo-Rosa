import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TelaInicial from '../pages/TelaInicial/TelaInicial'
import TelaMatches from '../pages/TelaMatches/TelaMatches'

function Home() {
    const [listaPerfis, setListaPerfis] = useState({})
    const [trocaTela, setTrocaTela] = useState(true)
    const [lista, setLista] = useState([])
    function escolherTela() {
        switch (trocaTela) {
            case true:
                return (
                    <TelaInicial
                        listarMatches={listarMatches}
                        listaPerfis={listaPerfis}
                        botaoDislike={botaoDislike}
                        botaoLike={botaoLike}
                        limpar={limpar}
                    />
                )

            case false:
                return <TelaMatches
                    mudarTela={trocarTela}
                    lista={lista}
                />

            default:
                return <TelaInicial
                    mudarTela={trocarTela}
                />


        }
    }

    function trocarTela() {
        setTrocaTela(!trocaTela)
    }

    const pegaPerfil = () => {

        axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marleo-piber-alves/person`)
            .then(res => {
                console.log(res.data.profile)
                setListaPerfis(res.data.profile)
            })

            .catch(err => alert('Problemas de conexão'))
    }

    const deiLike = () => {

        axios
            .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marleo-piber-alves/choose-person`,
                {
                    "id": listaPerfis.id,
                    "choice": true
                }
            )

            .then(res => {
                pegaPerfil()
                console.log(res.data)
            })

            .catch(err => alert('Problemas de conexão'))
    }

    const listarMatches = () => {

        axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marleo-piber-alves/matches`)

            .then(res => {
                console.log(res)
                setLista(res.data.matches)
                setTrocaTela(false)
            })

            .catch(err => alert('Problemas de conexão'))
    }

    const limpar = () => {

        axios
            .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marleo-piber-alves/clear`)

            .then(res => {
                alert("Foi resetado!")
            })

            .catch(err => alert('Problemas de conexão'))
    }

    useEffect(() => {
        console.log("useEffect")
        pegaPerfil()
        // < TelaMatches />
    }, [])

    const botaoDislike = () => {
        pegaPerfil()
        console.log("Botão dislike")
    }

    const botaoLike = () => {
        deiLike()
        console.log("Botão Like")
    }
    return (
        <div
            // trocaTela={trocaTela}
            trocarTela={trocarTela}
        >

            {escolherTela()}
        </div>
    )
}

export default Home