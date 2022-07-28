import React from 'react'
import useProtectPage from '../../hooks/useProtectPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from "../../constants/urls"
import { AddPost, Card, CurtidaCard, Geral, Grid, Main, TextoCard, TituloCard } from './styled'
import AddRecipesPage from '../AddRecipesPages/AddRecipesPage'
import { goToRecipeDetail } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'

const RecipeListPage = () => {
    useProtectPage()
    const navigate = useNavigate()

    const recipes = useRequestData([], `${BASE_URL}/posts`)
    // console.log(recipes)

    const recipeCards = recipes.map((recipe) => {
        return (
            <Geral>
                <Main>
                    <AddPost>
                        <AddRecipesPage />
                    </AddPost>
                    <Card onClick={() => goToRecipeDetail(navigate)}>
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
    return (
        <div>
            {recipeCards}
        </div>
    )
}

export default RecipeListPage