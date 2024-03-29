import { PostBusiness } from "../src/business/PostBusiness"
import { IAddLikeInputDTO, ICreatePostInputDTO, IDeletePostInputDTO, IGetPostsInputDTO, IRemoveLikeInputDTO, Post } from "../src/models/Post"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { PostDatabaseMock } from "./mocks/PostDatabaseMock"

describe("Testando a PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Deve retornar uma lista de posts", async () => {
        const input: IGetPostsInputDTO = {
            token: "token-mock-normal"
        }

        const response = await postBusiness.getPosts(input)
        expect(response.posts.length).toBe(3)
        expect(response.posts[0]).toBeInstanceOf(Post)
    })

    test("Deve ser possível criar um novo post", async () => {
        const input: ICreatePostInputDTO = {
            token: "token-mock-normal",
            content: "Teste do mock"
        }

        const response = await postBusiness.createPost(input)

        expect(response.message).toBe("Post criado com sucesso") // Mostra a resposta da requisição
        expect(response.post).toBeInstanceOf(Post) // Verifica se existe a classe Post na criação
        expect(response.post.getId()).toBe("id-mock") // Verifica se o id do post é o método getid e é id-mock
        expect(response.post.getContent()).toBe("Teste do mock") // Verifica qual é o conteúdo do post.
        expect(response.post.getLikes()).toBe(0) // Verifica os likes do post criado pela classe ele começa com 0.
        expect(response.post.getUserId()).toBe("id-mock") // Verifica o id do usuário do post
    })

    test("Deve ser possível deletar um post", async () => {
        const input: IDeletePostInputDTO = {
            token: "token-mock-admin",
            postId: "201"
        }

        const response = await postBusiness.deletePost(input)
        expect(response.message).toBe("Post deletado com sucesso") // Verifica se a mensagem de post é a mesma da requisição.
    })

    test("Deve ser possível dar um like", async () => {
        const input: IAddLikeInputDTO = {
            token: "token-mock-admin",
            postId: "201"
        }

        const response = await postBusiness.addLike(input)
        expect(response.message).toBe("Liked!")
    })

    test("Deve ser possível dar dislike", async () => {
        const input: IRemoveLikeInputDTO = {
            token: "token-mock-admin",
            postId: "201"
        }

        const response = await postBusiness.removeLike(input)
        expect(response.message).toBe("Like removido com sucesso")
    })
})