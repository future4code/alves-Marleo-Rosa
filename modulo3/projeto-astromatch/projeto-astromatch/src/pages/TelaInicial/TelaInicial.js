import React from 'react'
import { Descricao, Description, Escopo, EstiloBotoes, EstiloDislike, EstiloLike, EstiloReset, EstiloTroca, Header, ImagemLogo, ImgUser, Tudao } from './Style'
import logo from '../../assets/img/astromatch-logo.png'
import like from '../../assets/img/like.png'
import dislike from '../../assets/img/dislike.png'
import reset from '../../assets/img/reset.png'
import troca from '../../assets/img/troca.png'

const TelaInicial = (props) => {
  return (
    <div>
      <Escopo>
      <Tudao>
        <Header>
          <EstiloReset onClick={props.limpar} src={reset} />
          <ImagemLogo src={logo} />
          {/* Aqui está recebendo a props para o botão de trocar a tela funcionar */}
          <EstiloTroca onClick={props.listarMatches} src={troca} />
        </Header>
        < ImgUser src={props.listaPerfis.photo} />
        <Description>
          {props.listaPerfis.name}, {props.listaPerfis.age}
        </Description>
        <Descricao>{props.listaPerfis.bio}</Descricao>
        {/* Aqui está recebendo a props das funções dos botões de dislike, like e reset */}
        <EstiloBotoes>
          <EstiloDislike onClick={props.botaoDislike} src={dislike} />
          <EstiloLike onClick={props.botaoLike} src={like} />
        </EstiloBotoes>
      </Tudao>
      </Escopo>
    </div>
  )
}

export default TelaInicial