import React from 'react'

const PaginaPrivada = (props) => {
    return (
        <div>
            <button onClick={props.botaoVoltar}>Voltar</button>
            <button onClick={props.criarViagem}>Criar viagem</button>
            <button onClick={props.logout}>Logout</button>
        </div >
    )
}

export default PaginaPrivada