import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { goToDetailsPage } from "../../routes/coordinator"
import {BASE_URL} from "../../constants/BASE_URL"
import { BASE_IMG } from "../../constants/BASE_IMG";
import * as s from "./styled";

export default function HomePage() {
    const navigate = useNavigate();

    const [movie, setMovie] = useState([])

    const getMovies = () => {
        axios.get(`${BASE_URL}3/movie/popular?c&language=en-US&page=1`)
            .then((res) => {
                setMovie(res.data.result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <s.Body>
            {
                movie.map((movie) => {
                    return (
                        <s.CardMovies onClick={() => goToDetailsPage(navigate, movie.id)}>
                            <s.ImagesPoster>
                                <s.PosterPath src={`${BASE_IMG}${movie.poster_patch}`} />
                            </s.ImagesPoster>
                            <s.Title>{movie.title}</s.Title>
                        </s.CardMovies>
                    )
                })
            }
        </s.Body>
    )
}