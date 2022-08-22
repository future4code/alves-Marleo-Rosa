type colaboradores = {
    name: string,
    email: string,
    role: string
}

const listaDeFuncionario =
    [
        { name: "Rogério", email: "roger@email.com", role: "user" },
        { name: "Ademir", email: "ademir@email.com", role: "admin" },
        { name: "Aline", email: "aline@email.com", role: "user" },
        { name: "Jéssica", email: "jessica@email.com", role: "user" },
        { name: "Adilson", email: "adilson@email.com", role: "user" },
        { name: "Carina", email: "carina@email.com", role: "admin" }
    ]

function retornaFuncionarios(list: colaboradores[]): string[] {
    return list.filter((colaboradores) => {
        return colaboradores.role === "admin"
    }).map((colaboradores) => {
        return colaboradores.email
    })
}
console.log(retornaFuncionarios(listaDeFuncionario))