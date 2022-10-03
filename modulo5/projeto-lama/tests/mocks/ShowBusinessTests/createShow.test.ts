import { ICreateShowInputDTO } from "../../../src/models/Show"
import { AuthenticatorMock } from "../AuthenticatorMock"
import { IdGeneratorMock } from "../IdGeneratorMock"
import { ShowDatabaseMock } from "../ShowDatabaseMock"
import { BaseError } from "../../../src/errors/BaseError"


describe("Testando createShow da ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Caso de sucesso", async () => {
        const input: ICreateShowInputDTO = {
            token: "token-astrodev",
            content: "ACDC"
        }

        const result = await showBusiness.createShow(input)

        expect(result.message).toEqual("Show criado com sucesso")
        expect(result.show.getId()).toEqual("id-mock")
        expect(result.show.getContent()).toEqual("ACDC")
    })

    test("Erro ao tentar criar show com conta não-admin", async () => {
        expect.assertions(2)
        try {
            const input: ICreateShowInputDTO = {
                token: "token-mock",
                content: "ACDC",
            }

            await showBusiness.createShow(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toEqual("Somente admins podem criar shows")
                expect(error.statusCode).toEqual(403)
            }
        }
    })
})