import React from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1"
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
export default class App extends React.Component {
  state = {
    tela: ""
  }
  exibeTela = () => {
    if (this.state.tela === 'inicio') {
      return <button>Iniciar qustionário</button>
    } else if (this.state.tela === 'Etapa1') {
      return <Etapa1 mudaTela={this.mudaTela} />
    } else if (this.state.tela === 'Etapa2') {
      return <Etapa2 />
    } else if (this.state.tela === 'Etapa3') {
      return <Etapa3 />
    } else {
      return <Final />
    }
  }
  mudaTela = (telaEscolhida) => {
    this.setState({ tela: telaEscolhida })
  }
  render() {
    return (
      <div>
        {this.state.tela}
        {/* <Etapa1 mudaTela={this.tela}/> */}
        <button onClick={() => this.props.mudaTela("Etapa1")}> Iniciar </button>

      </div >
    );
  }
}
