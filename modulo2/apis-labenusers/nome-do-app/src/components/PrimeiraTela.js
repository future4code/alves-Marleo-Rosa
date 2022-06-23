import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

export const CriarUserButton = styled.button`
  margin: 0 auto;
  background-color: hsl(236, 32%, 26%);
  color: white;
  border: none;
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  

  overflow: hidden;
  cursor: pointer;

  &::after {
    content: "";
    z-index: -1;
    background-color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    top: -50%;
    bottom: -50%;
    width: 1.25em;
    transform: translate3d(-525%, 0, 0) rotate(35deg);
  }

  &:hover::after {
    transition: transform 0.45s ease-in-out;
    transform: translate3d(200%, 0, 0) rotate(35deg);
  }
`

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
                    <CriarUserButton onClick={this.criarUser}>Criar Usuário</CriarUserButton>
                        
                </body>
            </div>
        )
    }
}