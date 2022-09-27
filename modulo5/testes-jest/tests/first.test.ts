//ex00
const checkIfEven = (n: number): boolean => {
    if (n % 2 === 0) {
        return true
    }
    return false
}

//ex01
const toUpper = (texto: string): string => {
    return texto.toUpperCase()
}

//ex02
const stringToArray = (str: string): string[] => {
    return str.split('')
}

//ex 03
const stringToNumber = (str: string): number => {
    return Number(str)
}

//ex04
const stringToNumberLength = (str: string): number => {
    return str.length
}

//ex05
const numberRandom = (): number => {
    const min = 1
    const max = 10
    const result = Math.floor(Math.random() * (max - min + 1)) + min

    return result
}

//ex06
interface IUser {
    id: string,
    name: string,
    age: number
}
const procuraAstrodev = () => {
    const users: IUser[] = [
        {
            id: "1",
            name: "Renato",
            age: 60
        },
        {
            id: "2",
            name: "Goku",
            age: 50
        },
        {
            id: "3",
            name: "Astrodev",
            age: 22
        }
    ]
    return users
}

describe("Testando a função checkIfEven", () => {
    //ex00
    test("A entrada 10 deve retornar true", () => {
        const input = 10
        const result = checkIfEven(input)
        expect(result).toBe(true)
    })
    test("A entrada 5 deve retornar false", () => {
        const input = 5
        const result = checkIfEven(input)
        expect(result).toBe(false)
    })

    //ex01
    test("Retorna tudo maiuscula", () => {
        expect(toUpper("grêmio")).toBe("GRÊMIO")
    })

    //ex02
    test("Retorna array de strings", () => {
        const str = "dev"
        const result = stringToArray(str)
        expect(result).toEqual(["d", "e", "v"])
    })

    //ex03
    test("Retorna number", () => {
        const str = "22"
        const result = stringToNumber(str)
        expect(result).toBe(22)
    })

    //ex04
    test("Retorna número de caracteres", () => {
        const str = "22"
        const result = stringToNumberLength(str)
        expect(result).toEqual(2)
    })

    //ex05
    test("Retorna entre 1 e 10", () => {
        const result = numberRandom()
        expect(result).toBeGreaterThanOrEqual(1)
        expect(result).toBeLessThanOrEqual(10)
    })

    //ex06
    test("Retorna Astrodev", () => {
        const users: IUser = {
            id: "3",
            name: "Astrodev",
            age: 22
        }

        const result = procuraAstrodev()
        expect(result).toContainEqual(users)
    })
})