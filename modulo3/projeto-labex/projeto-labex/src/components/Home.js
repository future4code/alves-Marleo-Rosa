import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PaginaMenu from '../pages/PaginaMenu/PaginaMenu'

function Home() {
    const [listaViagens, setListaViagens] = useState({})
    const [trocaTela, setTrocaTela] = useState(true)
    const [lista, setLista] = useState([])
    //Essa função é para eu fazer as trocas de tela (Inicial e de matches) \/
    function escolherTela() {
        switch (trocaTela) {
            case true:
                return (
                    <PaginaPublica
                        //É assim que passamos as props \/
                        verViagens={verViagens}
                        telaInscrever={telaInscrever}
                        botaoVoltar={botaoVoltar}
                    />
                )
            case false:
                return <PaginaPrivada
                    criarViagem={criarViagem}
                    botaoLogout={botaoLogout}
                    botaoVoltar={botaoVoltar}
                />

            default:
                return <PaginaPublica
                    botaoVoltar={botaoVoltar}
                />
        }
    }
    //A função de troca de tela \/
    // function trocaTela() {
    //     setTrocaTela(!trocaTela)
    // }

    // useEffect(() => {
    //     console.log("UseEffect")
    //     retornaViagens()
    // }, [])

    return (
        <div>
            <PaginaMenu />
        </div>
    )
}

export default Home