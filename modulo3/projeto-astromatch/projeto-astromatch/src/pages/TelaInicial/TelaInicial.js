import React from 'react'
import { Header, ImagemLogo, ParteEsquerda } from './Style'

const TelaInicial = (props) => {
  return (
    <div>
      <Header>
        <ParteEsquerda>
          <ImagemLogo />
          <button onClick={props.trocarTela}>Troca tela</button>
          Tela inicial
        </ParteEsquerda>
      </Header>
    </div>
  )
}

export default TelaInicial