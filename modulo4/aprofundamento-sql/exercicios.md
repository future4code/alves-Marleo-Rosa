Exercício 1

a) ALTER TABLE Actor DROP COLUMN salary;
Quando precisamos alterar a estrutura de uma tabela já existente usamos o comando ALTER TABLE
para remover uma coluna, o
comando é: ALTER TABLE Actor
DROP COLUMN hometown

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
Está alterando a tabela de genero para 6 caracteres.

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
Mudou o tamanho da tabela de genero para 255 caracteres.

d) Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

Exercício 2

d) Se tentar adicionar alguma coluna da  abela que não está definido, "Coluna desconhecida"

Exercício 5
a) Releia a última query. Teste-a. Explique o resultado com as suas palavras
Essa query faz uma separação por genereo e retorna em duas colunas com o número de atores do sexo masculino e feminino.