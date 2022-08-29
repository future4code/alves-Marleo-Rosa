Exercício 1
*a) Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.*

VARCHAR(255): Strings de no máximo 255 caracteres;
PRIMARY KEY: Cada item deve possuir um identificador único, chamado de
chave primária (Primary Key - PK);
NOT NULL: O nome não pode ser nulo;
DATE: Representa uma data (YYYY-MM-DD)

*b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*

O comando SHOW nos mostra na tela uma tabela, no caso a SHOW DATABASES me trouxe a tabela contendo os dados do meu usuário do mySQL e a SHOW TABLE me mostrou todas as tabelas que eu tenho criadas.

*c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.*

O comando DESCRIBE Actor me trouxe uma tabela contendo o type de cada coisa da minha tabela Actor.

Exercício 2
*a) Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963*

b) *Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*
Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'
Erro pois tentei adicionar um ID já existente.

c)
Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1
Na requisição fala que vai uma coisa e mandamos outras.
d)
Error Code: 1364. Field 'name' doesn't have a default value
Está faltando o nome.
e)
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
A data não estava entre aspas.

Exercício 3
a) Escreva uma query que retorne todas as informações das atrizes
SELECT * from Actor WHERE gender = "female";

b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos
SELECT salary from Actor WHERE name = "Tony Ramos";

c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
O retorno foi vazio pois não constam atores que não estejam com o sexo especificado na tabela.

d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
SELECT id, name, salary from Actor WHERE salary <= 500000;

e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta
Error Code: 1054. Unknown column 'nome' in 'field list'
Estava escrito 'nome' e a tabela está 'name'.

Exercício 4
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
a) Explique com as suas palavras a query acima
Ela está mandando procurar na tabela Actor, nomes que contenham a letra A ou a letra J e que tenham salários superiores a 300000.

b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 
WHERE name LIKE "%G%" OR name LIKE "%g%";

d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00
SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%" ) AND salary BETWEEN 350000 AND 900000;

Exercício 5
a) Todos os valores são obrigatórios nesta tabela Movie.

Exercício 6
a) Retorne o id, título e avaliação a partir de um id específico;
SELECT id, title, rating FROM Movie WHERE id = "004";

b) Retorne um filme a partir de um nome específico;
SELECT * FROM Movie WHERE title =  "A Batalha dos Aflitos";

c) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7
SELECT id, title, synopsis FROM Movie WHERE rating >= 7;

Exercício 7
a) Retorna um filme cujo título contenha a palavra vida
SELECT * FROM Movie
WHERE title LIKE "%vida%"

b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA para exemplificar.
