import React from 'react'
import axios from 'axios'

const PaginaPublica = (props) => {

    //A função do axios para essa requisição retornar todas as viagens.
    const retornaViagens = () => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/marleo-piber-alves/trips`)
            .then(res => {
                console.log(res.data)
                setListaViagens(res.data)
            })
            .catch(err => alert(`Problemas de conexão`))
    }

    return (
        <div>
            <button onClick={props.botaoVoltar}>Voltar</button>
            <button onClick={props.telaInscrever}>Inscrever-se</button>
            {/* <button onClick={props.verViagens}>Ver viagens</button> */}
        </div>
    )
}

export default PaginaPublica