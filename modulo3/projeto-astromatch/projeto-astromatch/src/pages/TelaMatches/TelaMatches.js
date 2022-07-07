import React from 'react'
import { Header, ImagemLogo, ParteEsquerda } from './Style'

const TelaMatches = (props) => {
  return (
    <div>
      <Header>
        <ParteEsquerda>
          <ImagemLogo />
          <button onClick={props.trocarTela}>Troca tela</button>
          Tela de Matchs
        </ParteEsquerda>
      </Header>
    </div>
  )
}

export default TelaMatches