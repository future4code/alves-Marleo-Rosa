import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TelaInicial from '../pages/TelaInicial/TelaInicial'
import TelaMatches from '../pages/TelaMatches/TelaMatches'

function Home() {
    const [trocaTela, setTrocaTela] = useState(true)
    function escolherTela() {
        switch (trocaTela) {
            case true:
                return (
                    <TelaInicial
                        trocarTela={trocarTela}
                    />
                )

            case false:
                return <TelaMatches
                    trocarTela={trocarTela}
                />

            default:
                return <TelaInicial />

        }
    }

    function trocarTela() {
        setTrocaTela(!trocaTela)
    }

    const TelaInicial = () => {

        axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marleo-piber-alves/person`)
            .then(res => console.log(res.data.profile.name))
            .catch(err => alert('Problemas de conexão'))
    }

    useEffect(() => {
        console.log("useEffect")
        TelaInicial()
        TelaMatches()
    }, [])

    return (
        <div
            trocaTela={trocaTela}
            trocarTela={trocarTela}
        >
            <h3>Astro Match</h3>
            <h4>Perfis</h4>
            <p>perfil.name</p>
            <p>perfil.age</p>
            <p>perfil.bio</p>
            {escolherTela()}
        </div>
    )
}

export default Home