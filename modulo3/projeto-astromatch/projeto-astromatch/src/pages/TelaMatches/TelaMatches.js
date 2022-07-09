import React from 'react'
import { Escopo, EstiloImagemMatch, EstiloListaMatches, EstiloNomeMatch, EstiloReset, Header, ImagemLogo, ParteEsquerda, Tudao } from './Style'
import logo from '../../assets/img/astromatch-logo.png'
import { EstiloTroca } from '../TelaInicial/Style'
import troca from '../../assets/img/troca.png'
import reset from '../../assets/img/reset.png'

const TelaMatches = (props) => {

  const listagem = props.lista.map((item) => {

    return (
      <EstiloListaMatches>
        <EstiloImagemMatch img src={item.photo}>
        </EstiloImagemMatch>
        <EstiloNomeMatch>
          {item.name}
        </EstiloNomeMatch>
      </EstiloListaMatches>
    )
  })
  return (
    <div>
      <Escopo>
        <Tudao>
          <Header>
            <EstiloReset onClick={props.limpar} src={reset} />
            <ImagemLogo src={logo} />
            {/* Aqui está recebendo a props para o botão de trocar a tela funcionar */}
            <EstiloTroca onClick={props.mudarTela} src={troca} />
          </Header>
          {/* Aqui está exibindo a lista dos matches */}
          {/* <EstiloListaMatches> */}
          {listagem}
          {/* </EstiloListaMatches> */}
        </Tudao>
      </Escopo>
    </div>
  )
}

export default TelaMatches