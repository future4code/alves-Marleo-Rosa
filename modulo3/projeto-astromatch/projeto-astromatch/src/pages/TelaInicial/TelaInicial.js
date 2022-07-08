import React from 'react'
import { Descricao, Description, Header, ImagemLogo, ImgUser, ParteEsquerda } from './Style'

const TelaInicial = (props) => {
  return (
    <div>
      <Header>
        <ParteEsquerda>
          <ImagemLogo />
          <button onClick={props.listarMatches}>Troca tela</button>
          Tela inicial
        </ParteEsquerda>
      </Header>
      < ImgUser src={props.listaPerfis.photo} />
      <Description>
        {props.listaPerfis.name}
        {props.listaPerfis.age}

      </Description>
      <Descricao>{props.listaPerfis.bio}</Descricao>

      <button onClick={props.botaoDislike} >Dislike</button>
      <button onClick={props.botaoLike} >Like</button>
      <button onClick={props.limpar} >Reset</button>

    </div>
  )
}

export default TelaInicial