import React from "react";

export default class Etapa2 extends React.Component {
    state = {
        valorInputNome: "",
        valorInputIdade: "",
        pessoa: {}
    }
    onChangeNome = (event) => {
        this.setState({ valorInputNome: event.target.value })
    }
    onChangeIdade = (event) => {
        this.setState({ valorInputIdade: event.target.value })
    }
    onClickBotao = () => {
        const novaPessoa = {
            nome: this.state.valorInputNome,
            idade: this.state.valorInputIdade
        }
        this.setState({
            pessoa: novaPessoa,
            valorInputIdade: "",
            valorInputNome: ""
        })
    }
    render() {
        console.log("pessoa", this.state.pessoa)
        return (
            <div>
                <h1>Etapa 2</h1>
                <section>
                    <input value={this.state.valorInputNome} onChange={this.onChangeNome} />
                    <input value={this.state.valorInputIdade} onChange={this.onChangeIdade} />
                    <button onClick={this.onClickBotao}> Enviar </button>
                </section>
                <button onClick={() => this.props.mudaTela("Etapa3")}> =Mudar tela </button>
            </div>
        )
    }
}

