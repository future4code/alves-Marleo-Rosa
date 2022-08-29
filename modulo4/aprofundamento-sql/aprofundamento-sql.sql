SET SQL_SAFE_UPDATES = 0;
ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- 2 a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003
UPDATE Actor
SET name = "Moacyr Franco",
birth_date = "1930-08-09"
WHERE id = "003" ;

-- b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

-- c) Escreva uma query que atualize todas as informações do ator com o id 005
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

DESCRIBE Actor;

-- d) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado. 
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salario = 600000,
gender = "male"
WHERE id = "212";

-- Exercício 3
-- a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

-- b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

-- Exercício 4

-- O MySQL permite que façamos queries cujo resultado final é alguma manipulação em relação aos dados salvos. 
-- Essa manipulação é dada através de uma função MySQL. O exemplo mais clássico é a função COUNT, que permite contar a quantidade de elementos. 
-- Por exemplo, se quisermos contar todos os atores, poderíamos fazer assim:
SELECT COUNT(*) FROM Actor;

-- Ou, então, poderíamos ver a quantidade de atrizes no nosso banco, colocando uma condição para entrar na contagem:
SELECT COUNT(*) FROM Actor WHERE gender = "female";

-- Para encerrar os nossos exemplos, vamos falar da função AVG ("Average" - média em inglês) que permite calcular a média de alguma das colunas dos nossos dados. 
-- Por exemplo, a query abaixo devolve a média dos salários dos atores
SELECT AVG(salary) FROM Actor;

-- Existem outras funções, tais como: MAX e MIN que permitem determinar os valores máximos e mínimos de uma coluna.

-- a) Escreva uma query que pegue o maior salário de todos os atores e atrizes
SELECT MAX(salary) FROM Actor;

-- b) Escreva uma query que pegue o menor salário das atrizes
SELECT MIN(salary) FROM Actor WHERE gender = "female";

-- c) Escreva uma query que pegue a quantidade de atrizes
SELECT COUNT(*) FROM Actor WHERE gender = "female";

-- d) Escreva uma query que pegue a soma de todos os salários
SELECT SUM(salary) FROM Actor;

-- Exercício 5

-- O LIMIT, limita a quantidade de dados retornados. Se quisermos somente 3 atores da tabela:
SELECT * FROM Actor LIMIT 3;

-- ORDER BY permite que ordenemos os dados dependendo de alguma coluna da tabela. Podemos dizer se queremos na ordem crescente (ASC) ou decrescente (DESC). 
-- A sintaxe é: ORDER BY coluna ASC/DESC. Se quisermos os atores em ordem alfabética:
SELECT * FROM Actor ORDER BY name ASC;

-- Podemos juntar com o LIMIT e pegarmos os 4 primeiros atores (em ordem alfabética):
SELECT * FROM Actor ORDER BY name ASC LIMIT 4;

-- Até pegar somente as 4 primeiras atrizes em ordem alfabética:
SELECT * FROM Actor
WHERE gender = 'female'
ORDER BY name ASC
LIMIT 4;

-- O último é um operador que permite agrupar os dados em relação a alguma coluna da tabela: 
-- GROUP BY. Ele normalmente é usado junto com algumas das funções que já vimos: AVG, COUNT, SUM, etc. 
-- A query abaixo retorna a quantidade de atores e atrizes na tabela (ou seja, em relação ao gender)
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

-- b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
SELECT id, name FROM Actor ORDER BY name DESC;

-- c) Faça uma query que retorne todos os atores ordenados pelo salário
SELECT * FROM Actor ORDER BY salary;

-- d) Faça uma query que retorne os atores com os três maiores salarios
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

-- e) Faça uma query que retorne a média de salário por gênero
SELECT AVG(salary), gender FROM Actor GROUP BY gender;