import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useRequestData = (initialData, url) => {
    // console.log("Entrei aqui no useRequestData")
    const [data, setData] = useState(initialData)
    useEffect(() => {
        axios
            .get(url, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
                alert("Ocorreu um erro, tente novamente")
            })
    }, [url])

    return (data)
}

export default useRequestData