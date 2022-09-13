// class User {
//     private id: string;
//     private email: string;
//     private name: string;
//     private password: string;

//     constructor(
//         id: string,
//         email: string,
//         name: string,
//         password: string
//     ) {
//         console.log("Chamando o construtor da classe User")
//         this.id = id
//         this.email = email
//         this.name = name
//         this.password = password
//     }

//     public getId(): string {
//         return this.id
//     }

//     public getEmail(): string {
//         return this.email
//     }

//     public getName(): string {
//         return this.name
//     }
// }

// // Exercício 1

// const user = new User("1", "marleopr@hotmail.com", "Grêmio", "123456")
// console.log(user.getId(), user.getEmail(), user.getName())

// // a) Seria possível imprimir a senha (password) atrelada a essa instância?
// // Não pois não existe get para senhas.

// // b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
// // 1 vez

// // Exercício 2

// class Customer extends User {
//     public purchaseTotal: number = 0;
//     private creditCard: string;


//     constructor(
//         id: string,
//         email: string,
//         name: string,
//         password: string,
//         creditCard: string
//     ) {
//         super(id, email, name, password);
//         console.log("Chamando o construtor da classe Customer");
//         this.creditCard = creditCard;
//     }

//     public getCreditCard(): string {
//         return this.creditCard;
//     }
//     public introduceYourself(): string{
//         return `Olá, sou a ${this.getName()}, bom dia!`
//     }
// }

// const newClient = new Customer("2", "julie@dog.au", "Julie", "123456", "Master")
// console.log(newClient.getCreditCard())

// console.log(newClient.introduceYourself())

// Polimorfismo
// Exercício 1
export interface Client {
    name: string;
    // Refere-se ao nome do cliente

    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id

    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês

    calculateBill(): number;
    // Retorna o valor da conta em reais
}

const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,

    calculateBill: () => {
        return 2;
    }
}
console.log(client)

// Exercício 2
export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}
// a) Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)). Qual foi o erro que o Typescript gerou?

// const newPlace = new Place()
// Não é possível criar uma instancia de uma classe abstrata

// Exercício 3

export class Residence extends Place {
    constructor(
        private residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    }
    public getResidentsQuantity(): number {
        return this.residentsQuantity
    }
}

export class Commerce extends Place {
    constructor(
        private floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    }
    public getFloorsQuantity(): number {
        return this.floorsQuantity
    }
}

export class Industry extends Place {
    constructor(
        private machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 

        cep: string
    ) {
        super(cep);
    }
    public getMachinesQuantity(): number {
        return this.machinesQuantity
    }
}

// Exercício 4

class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep);
    }

    public getCpf(): string {
        return this.cpf;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75;
    }
}