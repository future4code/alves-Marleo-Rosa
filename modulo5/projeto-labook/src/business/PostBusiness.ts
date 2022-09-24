import { PostDatabase } from "../database/PostDatabase"
import { AuthenticationError } from "../errors/AuthenticationError"
import { ICreatePostInputDTO, ICreatePostOutputDTO, Post } from "../models/Post"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }
    // criar autenticação do post

    public createPost = async (input: ICreatePostInputDTO) => {
        const { token, content } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new AuthenticationError()
        }

        if (typeof content !== "string") {
            throw new Error("Parâmetro content inválido");
        }

        if (content.length < 1) {
            throw new Error("Parâmetro 'content' inválido: mínimo de 1 caracteres")
        }

        const id = this.idGenerator.generate()

        const post = new Post(
            id,
            content,
            payload.id
        )

        await this.postDatabase.createPost(post)
        
        const response: ICreatePostOutputDTO = {
            message: "Post criado com sucesso",
            post
        }
        return response
    }
}