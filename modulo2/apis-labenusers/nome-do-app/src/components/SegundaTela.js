import React, { Component } from 'react'
import axios from 'axios'
export class SegundaTela extends Component {

    state = {
        id: "string",
        name: "string",
        procuraUser: "pesquisar"
    }

    procurarUser = () => {
        axios.get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            // axiosConfig
            )
            .then(response => {
              this.setState({ procurarUser: response.data });
            })
            .catch(error => {
              alert("Erro ao criar o usuário");
              console.log(error);
            });
    }

    render() {
        return (
            <div>
                {this.state.procuraUser}
                    return console.log(item)
                {/* this.state.procuraUser.map((item) => {
                }) */}
            </div>
        )
    }
}