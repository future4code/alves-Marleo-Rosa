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
          <button onClick={props.mudarTela}>Troca tela</button>
          Tela de Matchs
        </ParteEsquerda>
      </Header>
      {listagem}
    </div>
  )
}

export default TelaMatches