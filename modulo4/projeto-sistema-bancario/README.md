### Requisitos Mínimos

O mínimo do projeto consiste nas funcionalidades de: Criar conta, pegar as contas e adicionar uma validação de idade. Para isto, estamos propondo um conjunto de etapas de desenvolvimento. OK

OK 1. Crie um **tipo** para representar uma conta para o usuário
OK 2. Crie um array global que armazene usuários na aplicação. Caso queira, pode iniciar este array com valores pré-definidos.
OK 3. Crie mais um **tipo**: para representar as **transações** que serão salvas no extrato
OK 4. Dentro da definição do usuário, crie um array que armazene as transações de um cliente.
OK 5. Crie um endpoint que utilize o método `POST` da entidade `users` que será responsável por cadastrar um usuário em um array de usuários. Neste momento, não se preocupe, com as validações descritas nas funcionalidades.
OK 6. Crie um método `GET` na entidade `users` função que será responsável por pegar todos os usuários existentes no array de usuários.
OK 7. Adicione, uma validação no item 1 (Criar conta): o usuário deve possuir mais do que 18 anos para conseguir se cadastrar. Caso não possua, exiba uma mensagem de erro.

OK O usuário deve conseguir verificar o saldo da sua conta, passando o seu nome e o seu CPF.
OK O usuário deve conseguir adicionar saldo à sua conta, passando seu nome, o CPF e o valor que desejar.
