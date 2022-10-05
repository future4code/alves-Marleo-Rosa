import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { API_KEY } from "../../constants/API_KEY"
import { BASE_IMG } from "../../constants/BASE_IMG"
import { BASE_URL } from "../../constants/BASE_URL"
import { convertDate, getYear } from "../../hooks/convertDate"
import { convertTime } from "../../hooks/converTime"
import { goToHomePage } from "../../routes/coordinator"

export default function DetailsPage() {
    const navigate = useNavigate()
    const params = useParams()
    const [movie, setMovie] = useState({})
    const [duration, setDuration] = useState()
    const [dateBr, setDateBr] = useState()
    const [year, setYear] = useState()
    const id = window.location.pathname.split('/')[2]


    const getDetails = () => {
        axios.get(`${BASE_URL}movie/${id}?${API_KEY}&language=pt-BR`)
            .then((res) => {            
                setMovie(res.data)
                setDuration(convertTime(res.data.runtime))
                setDateBr(convertDate(res.data.release_date))
                setYear(getYear(res.data.release_date))
            })
            .catch((error) => {
                alert(`Erro de solicitação ${error.response}`)
            })
    }

    useEffect(() => {
        getDetails()
        // getCredits()
    }, [params.id])

    return (
        <div>
            <h2>DetailsPage</h2>
            <img
                src={`${BASE_IMG}${movie.poster_path}`}
                title={`${movie.title}`}
                alt={`Poster ${movie.title}`}
            ></img>
            <button onClick={() => goToHomePage(navigate)}>Home</button>
        </div>
    )
}