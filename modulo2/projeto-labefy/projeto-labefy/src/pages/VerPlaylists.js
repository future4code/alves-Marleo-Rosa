import React, { Component } from 'react'
import axios from 'axios'

export default class VerPlaylists extends Component {
    state = {
        playlist: [], //aqui tá puxando a lista da outra pagina
        detalhes: false, //nao entendi
        playlistId: "",
        playlistName: ""  //esses dois campos sao do output da API??
    }

        componentDidMount(){
            this.chamarPlaylists
        }
        listaPlaylists = () => {
            const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
            axios.get(url = {
                headers: {
                    Authorization: "marleo-piber-alves"
                }
            }).then((res) => {
                console.log(res.data)
                this.setState({ verPlaylists: "" })
            }).catch((err) => {
                console.log(err)
            })
        }
    }
    render() {
        return (
            <div>
                {listaPlaylists}
            </div>
        )
    }
}
