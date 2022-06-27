// import React, { Component } from 'react'
// import axios from 'axios'
// import { CardMusicas } from '../assets/styled'
// export class AddMusicas extends React.Component {

//     state = {
//         musica: "",
//         artista: "",
//         endereco: ""
//     }

//     handleMusica = (event) =>
//         this.setState({ musica: event.target.value })

//     handleArtista = (event) => {
//         this.setState({ artista: event.target.value })
//     }

//     handleEndereco = (event) => {
//         this.setState({ endereco: event.target.value })
//     }

//     componentDidMount() {
//         this.listarMusicas()
//         console.log("Componente montou")
//     }

//     listarMusicas = (id) => {
//         const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
//         const headers =
//         {
//             headers: {
//                 Authorization: "marleo-piber-alves"
//             }
//         }
//         axios.get(url, headers)
//             .then((res) => {
//                 this.setState({ musica: res.data.result.list })
//                 console.log(this.state.musica)
//                 /* this.listarPlaylists() */
//             }).catch((err) => {
//                 console.log(err)
//             })

//     }

//     AddMusica = () => {
//         const id = this.props.id
//         const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks/${id}`
//         const body = {
//             name: this.state.musica,
//             artist: this.state.artista,
//             url: this.state.endereco
//         }

//         axios.post(url, body, {
//             headers: {
//                 Authorization: "marleo-piber-alves"
//             }
//         })
//             .then(response => {
//                 alert("Música adicionada com sucesso!")
//                 this.setState({ musica: "" })
//                 this.setState({ artista: "" })
//                 this.setState({ endereco: "" })
//             })
//             .catch(error => {
//                 alert("Ocorreu um problema, tente novamente")
//             })
//     }

//     render() {

//         return (
//             <div>
//                 <CardMusicas>
//                     <input
//                         placeholder={"Digite o nome da música"}
//                         value={this.state.musica}
//                         onChange={this.handleMusica}
//                     />
//                     <input
//                         placeholder={"Artista"}
//                         value={this.state.artista}
//                         onChange={this.handleArtista}
//                     />
//                     <input
//                         placeholder={"Endereço da música"}
//                         value={this.state.endereco}
//                         onChange={this.handleEndereco}
//                     />
//                     <button onClick={this.AddMusica}>Adicionar Música</button>
//                 <listarMusicas></listarMusicas>
//                 </CardMusicas>
//             </div>
//         )
//     }
// }
