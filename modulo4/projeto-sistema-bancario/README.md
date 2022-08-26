### Projeto IWFS: Sistema Bancário

O mínimo do projeto consiste nas funcionalidades de: Criar conta, pegar as contas e adicionar uma validação de idade. Para isto, estamos propondo um conjunto de etapas de desenvolvimento.

#### A documentação do projeto encontra-se no seguinte endereço:
https://documenter.getpostman.com/view/21555670/VUqptJ6B

#### Autor:
Márleo Piber da Rosa

#### Funcionalidades implementadas e funcionais:

1. Criado um **tipo** para representar uma conta para o usuário

2. Criado um array global que armazene usuários na aplicação. 

3. Criado mais um **tipo**: para representar as **transações** que serão salvas no extrato

4. Dentro da definição do usuário, foi criado um array que armazene as transações de um cliente.

5. Criado um endpoint que utilize o método `POST` da entidade `users` que será responsável por cadastrar um usuário em um array de usuários.

6. Crie um método `GET` na entidade `users` função que será responsável por pegar todos os usuários existentes no array de usuários.

7. Adicionada validação no item 1 (Criar conta): o usuário deve possuir mais do que 18 anos para conseguir se cadastrar. Caso não possua, exiba uma mensagem de erro.

8. O usuário deve conseguir verificar o saldo da sua conta, passando o seu nome e o seu CPF.

9. O usuário deve conseguir adicionar saldo à sua conta, passando seu nome, o CPF e o valor que desejar.
