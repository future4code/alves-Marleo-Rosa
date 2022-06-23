import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    color: #ffffff;
    /* background-color: silver; */
    background-image: linear-gradient(to right, #002a5a, white)
  `


export class SegundaTela extends Component {

    state = {
        usuarios: []
    }

    componentDidMount() {
        this.procurarUser()
    }

    // procurarUser = () => {
    //     const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    //     axios.get(url, {
    //         headers: {
    //             Authorization: "marleo-piber-alves"
    //         }
    //     })
    //         .then(response => {
    //             this.setState({ usuarios: response.data })
    //         })
    //         .catch(error => {
    //             alert("Ocorreu um problema, tente novamente")
    //         });
    // }

    // USANDO async/await:

    procurarUser = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: "marleo-piber-alves"
                }
            })
            this.setState({ usuarios: response.data })
        } catch (error) {
            alert("Ocorreu um problema, tente novamente")
        }
    }

    // =-=-=-=-=-=-=-=-

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "marleo-piber-alves"
            }
        })
            .then(response => {
                alert("Usuário(a) removido com sucesso!")
                this.procurarUser()
            })
            .catch(error => {
                alert("Ocorreu um problema, tente novamente")
            })
    }

    render() {
        const listaUsuarios = this.state.usuarios.map((user) => {
            return <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>X</button>
            </CardUsuario>
        })
        return (
            <div>
                <h2>Lista de usuários</h2>
                {listaUsuarios}
            </div>
        )
    }
}