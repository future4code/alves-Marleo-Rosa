import axios from 'axios'
// import React, { useEffect, useState } from 'react'

const MostrarComentarios = (url, body) => {
    console.log("Mostrei o MostrarComentarios")
    console.log(body)
    const token = localStorage.getItem("token")
    console.log(token)
    console.log(url)
    // useEffect(() => {
        axios
            .get(url,
                body,
                {
                    headers: {
                        Authorization: token
                    }
                })
            .then((response) => {
                console.log("Deu certo o comentário", response)
            })
            .catch((error) => {
                console.log(error)
                alert("Erro na página MostrarComentarios")
            })
    // }, [url])

}
// const usePostData = (initialData, url, a) => {
//     console.log("Entrei aqui", a)
//     const [data, setData] = useState(initialData)
//     useEffect(() => {
//         axios
//             .post(url, {
//                 headers: {
//                     Authorization: localStorage.getItem("token")
//                 }
//             })
//             .then((response) => {
//                 setData(response.data)
//                 console.log("Deu certo")
//             })
//             .catch((error) => {
//                 console.log(error)
//                 alert("Erro em usePostData na página usePostData")
//             })
//     }, [url])

//     return (data)
// }

export default MostrarComentarios