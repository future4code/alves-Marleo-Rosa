import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Botoes, DivLoading, Escopo, Tudao } from './styled-admin'
import viagens from "./../PaginaPublica/VerViagens"
import { url_base } from '../../constants/url_base'
import axios from 'axios'

const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token === null) {
            console.log("Não está logado!")
            navigate("/Login")
        }

    })
}

const PainelAdmin = () => {
    useProtectedPage()
    const [viagens, setViagens] = useState([])

    const navigate = useNavigate()

    const goToCriarViagem = () => {
        navigate("/CriarViagem")
    }

    // const goToLogin = () => {
    //     navigate("/Login")
    // }

    const goToLogout = () => {
        navigate("/Login")
        localStorage.clear()
    }

    const goBack = () => {
        navigate(-1)
    }

//     useEffect(() => {
//         pegarViagens()
//     })
//     const pegarViagens = () => {
//         axios.get(`${url_base}/trips`).then((res) => {
//             setViagens(res.data.trips)
//         }).catch((err) => {
//             console.log(err.data)
//         })
//     }

//     const listaViagensAdmin = viagens && viagens.map((trip) => {
//         return navigate("/VerViagens")

//     })
//     const deletarViagem = () => {
//         const token = window.localStorage.getItem("token")
//         const headers = { auth: token }
//         axios.delete(`${url_base}/trips/${trip.id}`, headers)
//             .then((res) => {
//                 alert('Viagem deletada')
//             })
//             .catch((err) => {
//                 alert("Sua internet está instável, tente novamente em instantes.")
//             })
//     }
//     const deletar = () => {
//         if (window.confirm(`Quer mesmo deletar a viagem ${trip.name}?`)) {
//             deletarViagem(trip.id)
//         }
//     }
//     return (
//         <CardNomeViagem
//             key={trip.id}
//             onClick={() => irParaDetalhes(navigate("/"), trip.id)}
//         >
//             <p>{trip.name}</p>
//             <button onClick={() => deletar(trip.id)}>X</button>
//         </CardNomeViagem>
//     )
// }
return (
    <div>
        <Escopo>
            <Tudao>
                <h3>Painel Administrativo</h3>
                {/* {listaViagensAdmin} */}

                <Botoes>
                    <button onClick={goBack}>Voltar</button>
                    <button onClick={goToCriarViagem}>Criar Viagem</button>
                    {/* <button onClick={goToLogin}>Login</button> */}
                    <button onClick={goToLogout}>Logout</button>
                </Botoes>
            </Tudao>
        </Escopo>
    </div >
)
}

export default PainelAdmin