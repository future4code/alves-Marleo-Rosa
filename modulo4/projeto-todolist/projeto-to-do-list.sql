CREATE TABLE TodoListUser (
		id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NOT NULL, 
    nickname VARCHAR(255) UNIQUE NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL
);
CREATE TABLE TodoListTask (
	id VARCHAR(255) PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL, 
	deadline DATE NOT NULL,
    status VARCHAR(255) NOT NULL DEFAULT "to_do",
    authorId varchar(255) NOT NULL,
    FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
);
CREATE TABLE TodoListResponsibleUserTaskRelation (
		task_id VARCHAR(255),
    responsible_user_id VARCHAR(255),
    FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
    FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
);
DESCRIBE TodoListTask;
SELECT * FROM TodoListUser;
SELECT * FROM TodoListTask;