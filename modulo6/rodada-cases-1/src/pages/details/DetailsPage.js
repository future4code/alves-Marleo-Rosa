import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { API_KEY } from "../../constants/API_KEY"
import { BASE_IMG } from "../../constants/BASE_IMG"
import { BASE_URL } from "../../constants/BASE_URL"
import { convertDate, getYear } from "../../hooks/convertDate"
import { convertTime } from "../../hooks/converTime"
import { goToHomePage } from "../../routes/coordinator"
import * as s from "./styled"
import dmdb from "../../assets/img/tmdb-logo.png"

export default function DetailsPage() {
    const navigate = useNavigate()
    const params = useParams()
    const [movie, setMovie] = useState({})
    const [duration, setDuration] = useState()
    const [dateBr, setDateBr] = useState()
    const [year, setYear] = useState()
    // const [overview, setOverview] = useState()
    // const [genres, setGenres] = useState()
    const id = window.location.pathname.split('/')[2]

    // const DetailsMovie = () => {
    //     const [detailsMovie, setDetailsMovie] = useState({})
    //     const [genres, setGenres] = useState([])
    //     const params = useParams()
    // }

    const getDetails = () => {
        // axios.get(`${BASE_URL}movie/${id}?${API_KEY}&language=pt-BR`)
        axios.get(`${BASE_URL}3/movie/${id}?api_key=${API_KEY}&language=pt-BR`)
            .then((res) => {
                console.log(res)
                setMovie(res.data)
                setDuration(convertTime(res.data.runtime))
                setDateBr(convertDate(res.data.release_date))
                setYear(getYear(res.data.release_date))
            })
            .catch((error) => {
                alert(`Erro de solicitação ${error.response}`)
            })
    }

    const genreList = Array.isArray(movie.genres) && movie.genres.map((genre) => {
        console.log(genre.name)
        return (
            <s.InfoText>{genre.name}</s.InfoText>
            )
    })

    useEffect(() => {
        getDetails()
        // getCredits()
    }, [params.id])

    return (
        <s.Body>
            <s.Header>
                <s.Logo src={dmdb} onClick={() => goToHomePage(navigate)} alt={"Voltar ao início"}></s.Logo>
            </s.Header>
            <s.Horizon>
                <s.InfoFilm>
                    <s.TitleInfo>
                        <s.Title>{`${movie.title} (${year})`}</s.Title>
                        <s.InfoText>{genreList}</s.InfoText>
                        <br></br>
                        <br></br>
                        <s.InfoText>{`${duration} ${dateBr}`}</s.InfoText>
                        <br></br>
                        <s.InfoText>{`${movie.overview}`}</s.InfoText>
                        <s.Info>
                            <s.InfoText>{`${movie.vote_average}`}</s.InfoText>
                        </s.Info>
                    </s.TitleInfo>
                </s.InfoFilm>
                <s.ImagesPoster>
                    <s.PosterPath
                        src={`${BASE_IMG}${movie.poster_path}`}
                        title={`${movie.title}`}
                        alt={`Poster ${movie.title}`}
                    ></s.PosterPath>
                </s.ImagesPoster>
            </s.Horizon>
        </s.Body>
    )
}