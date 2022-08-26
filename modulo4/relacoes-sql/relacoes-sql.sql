CREATE TABLE
    Rating (
        id VARCHAR(255) PRIMARY KEY,
        comment TEXT NOT NULL,
        rate FLOAT NOT NULL,
        movie_id VARCHAR(255),
        FOREIGN KEY (movie_id) REFERENCES Movie(id)
    );

-- Exercício 1

-- a) Explique o que é uma chave estrangeira

-- Serve para relacionarmos (ou referenciarmos) uma tabela com outra.

-- b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes

INSERT INTO
    Rating (id, comment, rate, movie_id)
VALUES ("001", "Muito bom", 7, "004");

INSERT INTO
    Rating (id, comment, rate, movie_id)
VALUES ("001", "Muito bom", 7, "002");

INSERT INTO
    Rating (id, comment, rate, movie_id)
VALUES ("003", "Bom", 6, "002");

INSERT INTO
    Rating (id, comment, rate, movie_id)
VALUES ("003", "Bom", 6, "002");

-- c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.

INSERT INTO
    Rating (id, comment, rate, movie_id)
VALUES ("050", "Bom", 6, "049");

-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails

-- (`alves-marleo-rosa`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

-- A chave não deixa criar algo que não exista ou esteja relacionada a ela.

-- d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.

ALTER TABLE Movie DROP COLUMN rating;

-- Exercício 2

CREATE TABLE
    MovieCast (
        movie_id VARCHAR(255),
        actor_id VARCHAR(255),
        FOREIGN KEY (movie_id) REFERENCES Movie(id),
        FOREIGN KEY (actor_id) REFERENCES Actor(id)
    );
    
-- a) Explique, com as suas palavras, essa tabela
-- Ela relaciona as ids dos filmes com as ids dos atores.

-- b) Crie, ao menos, 6 relações nessa tabela 

INSERT INTO MovieCast(movie_id, actor_id)
VALUES("004", "001");
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("001", "002");
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("002", "007");
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("003", "004");
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("004", "002");
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("003", "001");

-- c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("006", "006");
-- Da erro pois ele não encontra a chave, que é inexistente.

-- d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query

DELETE FROM Actor WHERE id="001";

-- Da erro pois a chave estrangeira não deixa deletar.

-- Exercício 3

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

-- a) Explique, com suas palavras, a query acima. O que é o operador ON?
-- O operador ON serve como condição para retorno da tabela

-- b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.

SELECT Movie.id, title, rate FROM Movie
INNER JOIN Rating
ON Movie.id = Rating.movie_id;