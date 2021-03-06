import React from 'react'
import axios from "axios"
import { PrimeiraTela } from './components/PrimeiraTela';
import { SegundaTela } from './components/SegundaTela';
import {CriarUserButton} from './components/PrimeiraTela'
class App extends React.Component {

  state = {
    inputUser: "",
    inputEmail: "",
    paginaAtual: "cadastro"
  }


  mudaPagina = () => {
    if (this.state.paginaAtual === "cadastro") {
      this.setState({ paginaAtual: "listaUsuarios" })
    } else {
      this.setState({ paginaAtual: "cadastro" })
    }
  }
  render() {
    return (
      <div>
        {/* <button onClick={this.mudaPagina}>Trocar de tela</button> */}
        <CriarUserButton onClick={this.mudaPagina}>Trocar de tela</CriarUserButton>
        {this.state.paginaAtual === "cadastro" ? <PrimeiraTela /> : <SegundaTela />}
      </div>
    )
  }

}

export default App