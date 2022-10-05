import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { goToDetailsPage } from "../../routes/coordinator"
import { BASE_URL } from "../../constants/BASE_URL"
import { BASE_IMG } from "../../constants/BASE_IMG";
import * as s from "./styled";
import { API_KEY } from "../../constants/API_KEY";
import { convertDate } from "../../hooks/convertDate";

export default function HomePage() {
    const navigate = useNavigate();

    const [movie, setMovie] = useState([])

    const getMovies = () => {
        axios.get(`${BASE_URL}3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
            .then((res) => {
                setMovie(res.data.results)
            })
            .catch((error) => {
                console.log({ error })
            })
    }

    useEffect(() => {
        getMovies()
    }, [])

    // let dateBr = convertDate(movie.release_date)

    return (
        <s.Body>
            {
                movie.map((movie) => {
                    return (
                        <s.CardMovies onClick={() => goToDetailsPage(navigate, movie.id)}>
                            <s.ImagesPoster>
                                <s.PosterPath src={`${BASE_IMG}${movie.poster_path}`}
                                    title={`${movie.title}`}
                                    alt={`Poster ${movie.title}`}
                                />
                            </s.ImagesPoster>
                            <s.Title>{movie.title}
                                {/* {dateBr} */}
                            </s.Title>
                        </s.CardMovies>
                    )
                })
            }
        </s.Body>
    )
}