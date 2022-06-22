import React, { Component } from 'react'
import axios from 'axios'
export class PrimeiraTela extends Component {

    state = {
        inputUser: "",
        inputEmail: ""
    }
    adicionaUsuario = (event) => {
        this.setState({ inputUser: event.target.value })
    }
    adicionaEmail = (event) => {
        this.setState({ inputEmail: event.target.value })
    }

    criarUser = () => {
        const body = {
            name: this.state.inputUser,
            email: this.state.inputEmail
        }

        const headers = {
            headers: {
                Authorization: "marleo-piber-alves"
            }
        }

        axios.post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, headers

        )
            .then((resposta) => {
                console.log(resposta.data);
                alert("Usuário cadastrado com sucesso!")
                console.log(body)
            })
            .catch((erro) => {
                console.log(body)
                console.log(erro);
                alert("Usuário inválido ou já cadastrado!")
            });
    }
    render() {
        return (
            <div>
                <body>
                    <input
                        value={this.state.inputUser}
                        onChange={this.adicionaUsuario}
                        placeholder="Usuário" />
                    <input
                        value={this.state.inputEmail}
                        onChange={this.adicionaEmail}
                        placeholder="E-mail"
                        type="email"
                    />
                    <button onClick={this.criarUser}>Criar Usuário</button>
                </body>
            </div>
        )
    }
}