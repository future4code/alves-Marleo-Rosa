import React from 'react'

const PaginaMenu = () => {

    return (
        <div>
            <button onClick={props.botaoVoltar}>Página Pública</button>
            <button onClick={props.telaInscrever}>Página Privada</button>
        </div>
    )
}

export default PaginaMenu