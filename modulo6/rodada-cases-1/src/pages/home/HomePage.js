import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { goToDetailsPage } from "../../routes/coordinator"
import { BASE_URL } from "../../constants/BASE_URL"
import { BASE_IMG } from "../../constants/BASE_IMG";
import * as s from "./styled";
import { API_KEY } from "../../constants/API_KEY";
import { convertDate } from "../../hooks/convertDate";
import dmdb from "../../assets/img/tmdb-logo.png"
import dmdbFooter from "../../assets/img/tmdb-logo-footer.png"

export default function HomePage() {
    const navigate = useNavigate();

    const [page, setPage] = useState(1)
    const [movie, setMovie] = useState([])
    const [pageAtualization, setPageAtualization] = useState(0)

    const getMovies = () => {
        axios.get(`${BASE_URL}3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page}`)
            // axios.get(`${BASE_URL}3/movie/popular?api_key=${API_KEY}&language=pt-BR`)
            .then((res) => {
                setMovie(res.data.results)
            })
            .catch((error) => {
                console.log({ error })
            })
    }

    useEffect(() => {
        getMovies()
    }, [pageAtualization])

    // let dateBr = convertDate(movie.release_date)

    const goToFirstPage = () => {
        setPage(page===1)
        setPageAtualization(pageAtualization)
    }
    const goToNextPage = () => {
        setPage(page + 1)
        setPageAtualization(pageAtualization + 1)
    }
    const goToNextTwoPage = () => {
        setPage(page + 2)
        setPageAtualization(pageAtualization + 2)
    }
    const goToNextThreePage = () => {
        setPage(page + 3)
        setPageAtualization(pageAtualization + 3)
    }
    const goToNextFourPage = () => {
        setPage(page + 3)
        setPageAtualization(pageAtualization + 4)
    }
    const goToFinalPage = () => {
        setPage(page + 20)
        setPageAtualization(pageAtualization + 20)
    }

    const Pagination = () => {
        if (page === 1) {
            return <s.Proxima>
                <s.PaginationButtonStartEnd onClick={() => goToFirstPage()}>Primeira</s.PaginationButtonStartEnd>
                <s.PaginationButton onClick={() => goToNextPage()}>{page + 1}</s.PaginationButton>
                <s.PaginationButton onClick={() => goToNextTwoPage()}>{page + 2}</s.PaginationButton>
                <s.PaginationButton onClick={() => goToNextThreePage()}>{page + 3}</s.PaginationButton>
                <s.PaginationButton onClick={() => goToNextFourPage()}>{page + 4}</s.PaginationButton>
                <s.PaginationButtonStartEnd onClick={() => goToFinalPage()}>Última</s.PaginationButtonStartEnd>
            </s.Proxima>
        } else if (page === 2) {
            return <s.Proxima>
                <s.PaginationButtonStartEnd onClick={() => goToFirstPage()}>Primeira</s.PaginationButtonStartEnd>
                <s.PaginationButton onClick={() => goToNextPage()}>{page + 1}</s.PaginationButton>
                <s.PaginationButton onClick={() => goToNextTwoPage()}>{page + 2}</s.PaginationButton>
                <s.PaginationButton onClick={() => goToNextThreePage()}>{page + 3}</s.PaginationButton>
                <s.PaginationButton onClick={() => goToNextFourPage()}>{page + 4}</s.PaginationButton>
                <s.PaginationButtonStartEnd onClick={() => goToFinalPage()}>Última</s.PaginationButtonStartEnd>
            </s.Proxima>
        } else if (page === 3) {
            return <s.Proxima>
                <s.PaginationButtonStartEnd onClick={() => goToFirstPage()}>Primeira</s.PaginationButtonStartEnd>
                <s.PaginationButton onClick={() => goToNextPage()}>{page + 1}</s.PaginationButton>
                <s.PaginationButton onClick={() => goToNextTwoPage()}>{page + 2}</s.PaginationButton>
                <s.PaginationButton onClick={() => goToNextThreePage()}>{page + 3}</s.PaginationButton>
                <s.PaginationButton onClick={() => goToNextFourPage()}>{page + 4}</s.PaginationButton>
                <s.PaginationButtonStartEnd onClick={() => goToFinalPage()}>Última</s.PaginationButtonStartEnd>
            </s.Proxima>
        } else if (page === 4) {
            return <s.Proxima>
                <s.PaginationButtonStartEnd onClick={() => goToFirstPage()}>Primeira</s.PaginationButtonStartEnd>
                <s.PaginationButton onClick={() => goToNextPage()}>{page + 1}</s.PaginationButton>
                <s.PaginationButton onClick={() => goToNextTwoPage()}>{page + 2}</s.PaginationButton>
                <s.PaginationButton onClick={() => goToNextThreePage()}>{page + 3}</s.PaginationButton>
                <s.PaginationButton onClick={() => goToNextFourPage()}>{page + 4}</s.PaginationButton>
                <s.PaginationButtonStartEnd onClick={() => goToFinalPage()}>Última</s.PaginationButtonStartEnd>
            </s.Proxima>
        } else if (page === 5) {
            return <s.Proxima>
                <s.PaginationButtonStartEnd onClick={() => goToFirstPage()}>Primeira</s.PaginationButtonStartEnd>
                <s.PaginationButton onClick={() => goToNextPage()}>{page + 1}</s.PaginationButton>
                <s.PaginationButton onClick={() => goToNextTwoPage()}>{page + 2}</s.PaginationButton>
                <s.PaginationButton onClick={() => goToNextThreePage()}>{page + 3}</s.PaginationButton>
                <s.PaginationButton onClick={() => goToNextFourPage()}>{page + 4}</s.PaginationButton>
                <s.PaginationButtonStartEnd onClick={() => goToFinalPage()}>Última</s.PaginationButtonStartEnd>
            </s.Proxima>
        }
    }

    return (
        <s.Body>
            <s.Header>
                <s.Logo src={dmdb}></s.Logo>

            </s.Header>
            <s.Main>
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
            </s.Main>
            {/* <s.Paginacao onClick={} ></s.Paginacao> */}
            <s.PaginationStyle>
                {Pagination()}
            </s.PaginationStyle>
            <s.Footer>
                <s.LogoFooter src={dmdbFooter}></s.LogoFooter>
                {/* <s.TextFooter>• © 2022 by Márleo Piber •</s.TextFooter> */}
                {/* <s.TextFooter><a href="https://github.com/marleopr" target="_blank" rel="noopener noreferrer">© 2022 by Márleo Piber</a></s.TextFooter> */}
                <s.TextFooter>
                    <a href="https://github.com/marleopr" target="_blank" rel="noopener noreferrer">© 2022 by Márleo Piber</a>
                    </s.TextFooter>
            </s.Footer>
        </s.Body>
    )
}