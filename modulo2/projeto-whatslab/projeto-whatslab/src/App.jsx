import React from "react";
import { BotaoEnviar, Quadradao, EscreveUsuario } from "./style";
class App extends React.Component {

  state = {
    inputUsuario: "",
    inputMensagem: "",
    mensagens: [
      { usuario: "", mensagem: "" }
    ]
  }
  adicionaUsuario = (event) => {
    this.setState({ inputUsuario: event.target.value })
  }
  adicionaMensagem = (event) => {
    this.setState({ inputMensagem: event.target.value })
  }
  adicionaMensagens = () => {
    const novasMensagens = {
      usuario: this.state.inputUsuario,
      mensagem: this.state.inputMensagem
    }
    let copiaMensagem = [...this.state.mensagens, this.adicionaMensagens]
    copiaMensagem.push(novasMensagens)
    this.setState({ mensagens: copiaMensagem })

    this.setState({ inputUsuario: "", inputMensagem: "" })
  }

  render() {
    const declararMensagens = this.state.mensagens.map((item) => {
      return (
        <div>
          <div>{item.usuario}</div>
          <div>{item.mensagem}</div>
        </div>
      )
    })
    return (
      <Quadradao>
        <div>{declararMensagens}</div>
        <EscreveUsuario>
          <input
            value={this.state.inputUsuario}
            onChange={this.adicionaUsuario}
            placeholder="Usuário"
          />
          <input
            value={this.state.inputMensagem}
            onChange={this.adicionaMensagem}
            placeholder="Texto da mensagem"
          />
          <BotaoEnviar onClick={this.adicionaMensagens}>Enviar</BotaoEnviar>
        </EscreveUsuario>
      </Quadradao>
    )
  }
}

export default App;
