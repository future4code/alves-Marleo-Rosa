// import { ShowBusiness } from "../../src/business/ShowBusiness"
// import { AuthenticatorMock } from ".././mocks/AuthenticatorMock"
// import { HashManagerMock } from ".././mocks/HashManagerMock"
// import { IdGeneratorMock } from ".././mocks/IdGeneratorMock"
// import { ShowDataBaseMock } from "../mocks/ShowDatabaseMock"
// describe("Testando o método os shows da ShowBusiness", () => {
//     const showBusiness = new ShowBusiness(
//         new ShowDataBaseMock(),
//         new IdGeneratorMock(),
//         new HashManagerMock(),
//         new AuthenticatorMock()
//     )
//     test("Sucesso ao criar um novo show", async () => {
//         const input: ICreateShowOutputDTO = {
//             token: "token-mock-admin"
//         }
//         const response = await showBusiness.createShow(output)
//         expect(response.message).toBe("Show criado com sucesso")
//         expect(response.token).toBe("token-mock-admin")
//     })
// })