import React from "react";

export default class Etapa1 extends React.Component {
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
                <h3>Etapa 1 - Dados gerais</h3>
                <section>
                    <p>1. Qual o seu  nome?</p>
                    <input value />
                    <p>2. Qual a sua idade?</p>
                    <input value />
                    <p>3. Qual seu email?</p>
                    <input value />
                    <p>4. Qual a sua escolaridade?</p>
                    <select>
                        <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                        <option value="Ensino médio completo">Ensino médio completo</option>
                        <option value="Ensino médio completo">Ensino médio completo</option>
                        <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                        <option value="Ensino superior completo">Ensino superior completo</option>
                    </select>
                    <input value={this.state.valorInputNome} onChange={this.onChangeNome} />
                    <input value={this.state.valorInputIdade} onChange={this.onChangeIdade} />
                    <button onClick={this.onClickBotao}> Enviar </button>
                </section>
                <button onClick={() => this.props.mudaTela("Etapa2")}> Próxima etapa </button>
            </div>
        )
    }
}

