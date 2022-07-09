import React from 'react'
import { Header, ImagemLogo, ParteEsquerda } from './Style'

const TelaMatches = (props) => {

  const listagem = props.lista.map((item) => {
    return item.name
  })
  return (
    <div>
      <Header>
        <ParteEsquerda>
          <ImagemLogo />
            {/* Aqui está recebendo a props para o botão de trocar a tela funcionar */}
          <button onClick={props.mudarTela}>Troca tela</button>
          Tela de Matchs
        </ParteEsquerda>
      </Header>
      {/* Aqui está exibindo a lista dos matches */}
      {listagem}
    </div>
  )
}

export default TelaMatches