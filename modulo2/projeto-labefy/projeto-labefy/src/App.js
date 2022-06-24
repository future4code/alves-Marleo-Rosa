import React from "react";
import axios from "axios";
import { TelaInicial } from './pages/TelaInicial'

class App extends React.Component {

  state = {
    inputUser: "",
    InputEmail: "",
    paginaAtual: "cadastro"
  }


  mudaPagina = () => {
    if (this.state.paginaAtual === "cadastro") {
      this.setState({paginaAtual: "listaUsuarios"})      
    } else {
      this.setState({paginaAtual: "cadastro"})
    }
  }
  render() {
    return (
      <div>
        Projeto Labefy
      </div >
    );
  }
}
export default App;
