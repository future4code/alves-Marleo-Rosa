import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { CardPlaylists } from "./../assets/styled"
import { CardMusicas } from '../assets/styled'
export class VerPlaylists extends React.Component {
    state = {
        playlists: [],
        name: "",
        musica: "",
        musicas: [],
        artista: "",
        endereco: ""
    }

    componentDidMount() {
        this.listarPlaylists()
        console.log("Componente montou")
    }

    handleMusica = (event) =>
        this.setState({ musica: event.target.value })

    handleArtista = (event) => {
        this.setState({ artista: event.target.value })
    }

    handleEndereco = (event) => {
        this.setState({ endereco: event.target.value })
    }

    listarMusicas = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const headers =
        {
            headers: {
                Authorization: "marleo-piber-alves"
            }
        }
        axios.get(url, headers)
            .then((res) => {
                this.setState({ musicas: res.data.result.tracks })

                console.log(res.data)
                console.log(this.state.musicas)
                /* this.listarPlaylists() */
            }).catch((err) => {
                console.log(err)
            })

    }

    AddMusica = () => {
        const id = this.props.id
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks/${id}`
        const body = {
            name: this.state.musica,
            artist: this.state.artista,
            url: this.state.endereco
        }

        axios.post(url, body, {
            headers: {
                Authorization: "marleo-piber-alves"
            }
        })
            .then(response => {
                alert("Música adicionada com sucesso!")
                this.setState({ musica: "" })
                this.setState({ artista: "" })
                this.setState({ endereco: "" })
            })
            .catch(error => {
                alert("Ocorreu um problema, tente novamente")
            })
    }

    listarPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const headers =
        {
            headers: {
                Authorization: "marleo-piber-alves"
            }
        }
        axios.get(url, headers)
            .then((res) => {
                this.setState({ playlists: res.data.result.list })
                /* this.listarPlaylists() */
            }).catch((err) => {
                console.log(err)
            })

    }

    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "marleo-piber-alves"
            }
        })
            .then(response => {
                alert("Playlist removida com sucesso!")
                this.listarPlaylists()
            })
            .catch(error => {
                alert("Ocorreu um problema, tente novamente")
            })
    }

    render() {
        const listaPlaylists = this.state.playlists.map((item) => {

            // const irListaMusicas = () => {

            // }
            return (
                <CardPlaylists
                    key={item.id}
                    name={item.name}
                >

                    {item.name}

                    <button onClick={() => this.listarMusicas(item.id)}>Listar músicas</button>
                    <button onClick={() => this.deletarPlaylist(item.id)}>X</button>

                </CardPlaylists>
            )
        })

        const listaMusicas = this.state.musicas.map((item) => {
            return (
                <CardMusicas
                    key={item.id}
                >
                    {item.name}
                </CardMusicas>
            )
        })
        console.log(listaPlaylists)
        console.log(listaMusicas)
        return (
            <div>
                <h2>Playlists</h2>
                {listaPlaylists}
                <CardMusicas>
                    <input
                        placeholder={"Digite o nome da música"}
                        value={this.state.musica}
                        onChange={this.handleMusica}
                    />
                    <input
                        placeholder={"Artista"}
                        value={this.state.artista}
                        onChange={this.handleArtista}
                    />
                    <input
                        placeholder={"Endereço da música"}
                        value={this.state.endereco}
                        onChange={this.handleEndereco}
                    />
                    <button onClick={this.AddMusica}>Adicionar Música</button>
                </CardMusicas>
                    {listaMusicas}
            </div>
        )
    }
}
