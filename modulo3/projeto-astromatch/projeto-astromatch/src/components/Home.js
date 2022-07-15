import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TelaInicial from '../pages/TelaInicial/TelaInicial'
import TelaMatches from '../pages/TelaMatches/TelaMatches'

//Aqui é os estados \/
function Home() {
    const [listaPerfis, setListaPerfis] = useState({})
    const [trocaTela, setTrocaTela] = useState(true)
    const [lista, setLista] = useState([])
    //Essa função é para eu fazer as trocas de tela (Inicial e de matches) \/
    function escolherTela() {
        switch (trocaTela) {
            case true:
                return (
                    <TelaInicial
                    //É assim que passamos as props \/
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
                    limpar={limpar}
                />

            default:
                return <TelaInicial
                    mudarTela={trocarTela}
                />


        }
    }
//A função de troca de tela \/
    function trocarTela() {
        setTrocaTela(!trocaTela)
    }
//A função do axios para pegar os perfis na API \/
    const pegaPerfil = () => {

        axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marleo-piber-alves/person`)
            .then(res => {
                // console.log(res.data.profile)
                setListaPerfis(res.data.profile)
            })

            .catch(err => alert('Problemas de conexão'))
    }
//A função do axios para dar like nos perfis da API \/
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
                if (res.data.isMatch) {
                    alert("Deu Match! 💖")
                  }
                // console.log(res.data)
            })

            .catch(err => alert('Problemas de conexão'))
    }
//A função do axios para exibir os perfis que eu dei like e a API me deu like também \/
    const listarMatches = () => {

        axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marleo-piber-alves/matches`)

            .then(res => {
                // console.log(res)
                setLista(res.data.matches)
                setTrocaTela(false)
            })

            .catch(err => alert('Problemas de conexão'))
    }
//A função do axios para limpar a lista de matches na API \/
    const limpar = () => {

        axios
            .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marleo-piber-alves/clear`)

            .then(res => {
                alert("Foi resetado! 🔃")
                listarMatches()
            })

            .catch(err => alert('Problemas de conexão'))
    }

    useEffect(() => {
        pegaPerfil()
        // < TelaMatches />
    }, [])

    const botaoDislike = () => {
        pegaPerfil()
        // console.log("Botão dislike")
    }

    const botaoLike = () => {
        deiLike()
        // console.log("Botão Like")
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