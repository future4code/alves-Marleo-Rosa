Exercício 1
a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
Ids maiores, com letras e números, diminuem bastante o risco de serem criados Ids iguais.

b) A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id. 
Está dentro do arquivo GenerateId.ts.

Exercício 2
a) Explique o código acima com as suas palavras.
Através do parametros da função, ele consegue fazer um insert na tabela do banco de dados.

b) Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

c) Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.

    public async createUser(user: User) {

        await this.getConnection().insert({
            id: user.getId(),
            email: user.getEmail(),
            password: user.getPassword()
        }).into("User")
    }

Exercício 3
a) O que a linha as string faz? Por que precisamos usar ela ali?
Força ele a ser uma string.

b) Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.
Arquivo Authenticator.ts.

Exercício 4 
