import React from 'react'
import useProtectPage from '../../hooks/useProtectPage'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import PostComment from '../../hooks/PostComment'
import useForm from '../../hooks/useForm'
import { AddPost, BotaoComentario, CampoComentar, Card, Geral, Linha, Main } from './styled'

const RecipeDetailPage = () => {
    useProtectPage()
    const params = useParams()
    const recipes = useRequestData([], `${BASE_URL}/posts`)
    const { form, handleInputChange, clear } = useForm({ body: "" })
    // recipes && console.log(recipes)
    const detalhesPost = recipes.filter((posts) => {
        return posts.id === params.id
    })


    // usePostData(`${BASE_URL}/posts/${params.id}/comments`, form)
    // const comentariosPosts = usePostData([], `${BASE_URL}/posts/${params.id}/comments`, form)

    // const fazComentario = ()=>{

    // }

    const recipeCards = detalhesPost.map((recipe) => {
        return (
            <Geral>
                <Main>
                    <p>
                        {/* <NovaPostagem/> */}
                        {/* <AddRecipesPage /> */}
                    </p>
                    <Card key={recipe.id}>
                        <p>
                            {recipe.username}
                        </p>
                        <p>
                            {recipe.body}
                        </p>
                        <p>
                            {recipe.voteSum}
                        </p>
                    </Card>
                </Main>
            </Geral>
        )
    })
    console.log(recipeCards)

    const onSubmitForm = (event) => {
        event.preventDefault()
        // comentariosPosts()
        // fazComentario()
        PostComment(`${BASE_URL}/posts/${params.id}/comments`, form)

        clear()
    }

    return (
        <AddPost>
            {recipeCards}
            {/* <input onChange={handleInputChange} value={form.body} /> */}
            <form onSubmit={onSubmitForm}>
                <CampoComentar
                    placeholder='Adicionar comentário'
                    name="body"
                    value={form.body}
                    onChange={handleInputChange}
                    type="text"
                    required
                />
                </form>
            <BotaoComentario
                type='submit'
                >Responder
            </BotaoComentario>
            <Linha/>
        </AddPost>
    )
}

export default RecipeDetailPage