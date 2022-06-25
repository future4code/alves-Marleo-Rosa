import React, { Component } from 'react'
import axios from 'axios'
export default class CriarPlaylist extends Component {
    state = {
        playlist: ""
    }
    handlePlaylist = (event) =>
        this.setState({ playlist: event.target.value })

    novaPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.playlist
        }
        axios.post(url, body, {
            headers: {
                Authorization: "marleo-piber-alves"
            }
        }).then((res) => {
            alert("Playlist adicionada!")
            console.log(res.data)
            this.setState({ playlist: "" })
        }).catch((err) => {
            console.log(err)
            alert("Playlist já existente, tente outro nome")
        })

    }
    render() {
        return (
            <div>
                <input
                    placeholder={"Digite o nome da playlist"}
                    value={this.state.playlist}
                    onChange={this.handlePlaylist}
                />
                <button onClick={this.novaPlaylist}>Criar Playlist</button>
            </div>
        )
    }
}
