import React from 'react'
import useProtectPage from '../../hooks/useProtectPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from "../../constants/urls"
import { AddPost, Card, CurtidaCard, Geral, Main, TextoCard, TituloCard } from './styled'
import AddRecipesPage from '../AddRecipesPages/AddRecipesPage'
import { goToRecipeDetail } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import NovaPostagem from "../../components/NovaPostagem"

const RecipeListPage = () => {
    useProtectPage()
    const navigate = useNavigate()
    const recipes = useRequestData([], `${BASE_URL}/posts`)

    const onClickCard = (id) => {
        goToRecipeDetail(navigate, id)
    }



    const recipeCards = recipes.map((recipe) => {
        return (
            <Geral>
                <Main>
                    <AddPost>
                        <NovaPostagem />
                        {/* <AddRecipesPage /> */}
                    </AddPost>
                    <Card
                        key={recipe.id}
                        onClick={() => onClickCard(recipe.id)}>
                        <TituloCard>
                            {recipe.username}
                        </TituloCard>
                        <TextoCard>
                            {recipe.body}
                        </TextoCard>
                        <CurtidaCard>
                            {recipe.voteSum}
                        </CurtidaCard>
                    </Card>
                </Main>
            </Geral>
        )
    })
    console.log(recipeCards)

    return (
        <div>
            {recipeCards}
        </div>
    )
}

export default RecipeListPage