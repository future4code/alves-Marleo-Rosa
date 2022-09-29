import { response } from "express"
import { PostBusiness } from "../src/business/PostBusiness"
import { BaseError } from "../src/errors/BaseError"
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

    //GET POSTS
    test("Deve retornar uma lista de posts", async () => {
        const input: IGetPostsInputDTO = {
            token: "token-mock-normal"
        }

        const response = await postBusiness.getPosts(input)
        expect(response.posts.length).toBe(3)
        expect(response.posts[0]).toBeInstanceOf(Post)
    })

    test("Erro de token não encontrado", async () => {
        expect.assertions(2)
        try {
            const input: IGetPostsInputDTO = {
                token: "token-invalido"
            }

            await postBusiness.getPosts(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas")
            }
        }
    })

    //CREATE POST

    test("Deve ser possível criar um novo post", async () => {
        const input: ICreatePostInputDTO = {
            token: "token-mock-normal",
            content: "Teste do mock"
        }

        const response = await postBusiness.createPost(input)

        expect(response.message).toBe("Post criado com sucesso")
        expect(response.post).toBeInstanceOf(Post)
        expect(response.post.getId()).toBe("id-mock")
        expect(response.post.getContent()).toBe("Teste do mock")
        expect(response.post.getLikes()).toBe(0)
        expect(response.post.getUserId()).toBe("id-mock")
    })

    test("Erro de token não encontrado", async () => {
        expect.assertions(2)
        try {
            const input: ICreatePostInputDTO = {
                token: "token-invalido",
                content: "Teste do mock"
            }

            await postBusiness.createPost(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas")
            }
        }
    })

    //DELETE POST

    test("Erro ao deletar um post", async () => {
        const input: IDeletePostInputDTO = {
            token: "token-mock-admin",
            postId: "201"
        }

        const response = await postBusiness.deletePost(input)
        expect(response.message).toBe("Post deletado com sucesso") //Verifica se a mensagem de post é a mesma da requisição
    })

    //ADD LIKE

    test("Erro ao dar like", async () => {
        const input: IAddLikeInputDTO = {
            token: "token-mock-normal",
            postId: "203"
        }

        const response = await postBusiness.addLike(input)
        expect(response.message).toBe("Like realizado com sucesso")
    })

    //DISLIKE

    test("Erro ao dar dislike", async () => {
        const input: IRemoveLikeInputDTO = {
            token: "token-mock-normal",
            postId: "201"
        }

        const response = await postBusiness.removeLike(input)
        expect(response.message).toBe("Like removido com sucesso")
    })
})