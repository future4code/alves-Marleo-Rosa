-- Entities
-- -- Amb_Pizzas
-- -- Amb_Ingredients
-- -- Amb_Pizzas_Ingredients
-- -- Amb_Order_Item

-- DROP TABLE IF EXISTS Amb_Orders_Order_Items;
DROP TABLE IF EXISTS Amb_Order_Items;
DROP TABLE IF EXISTS Amb_Orders;
DROP TABLE IF EXISTS Amb_Pizzas_Ingredients;
DROP TABLE IF EXISTS Amb_Ingredients;
DROP TABLE IF EXISTS Amb_Pizzas;

CREATE TABLE IF NOT EXISTS Amb_Pizzas (
	name VARCHAR(255) PRIMARY KEY,
    price DECIMAL(3,2) NOT NULL
);

CREATE TABLE IF NOT EXISTS Amb_Ingredients (
	name VARCHAR(255) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS Amb_Pizzas_Ingredients (
	pizza_name VARCHAR(255) NOT NULL,
    ingredient_name VARCHAR(255) NOT NULL,
	FOREIGN KEY (pizza_name) REFERENCES Amb_Pizzas (name),
    FOREIGN KEY (ingredient_name) REFERENCES Amb_Ingredients (name)
);

DROP TABLE IF EXISTS Amb_Orders_Item;

CREATE TABLE IF NOT EXISTS Amb_Orders (
	id VARCHAR(255) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS Amb_Order_Items (
	id VARCHAR(255) PRIMARY KEY,
    pizza_name VARCHAR(255) NOT NULL,
    quantity TINYINT,
    order_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (pizza_name) REFERENCES Amb_Pizzas (name),
	FOREIGN KEY (order_id) REFERENCES Amb_Orders (id)
);

CREATE TABLE IF NOT EXISTS Amb_Orders_Order_Items (
	order_id VARCHAR(255) NOT NULL,
    item_id VARCHAR(255) NOT NULL, 
    FOREIGN KEY (order_id) REFERENCES Amb_Orders (id),
	FOREIGN KEY (item_id) REFERENCES Amb_Orders_Items (id)
);

INSERT INTO Amb_Pizzas VALUES (
	"Margherita",
    5
);

INSERT INTO Amb_Pizzas VALUES (
	"Bufala",
    6
);

INSERT INTO Amb_Ingredients VALUES (
      "tomato"
);

INSERT INTO Amb_Ingredients VALUES (
      "mozzarella"
);

INSERT INTO Amb_Ingredients VALUES (
      "mozzarella di bufala"
);

INSERT INTO Amb_Pizzas_Ingredients VALUES (
	"Margherita",
    "tomato"
);

INSERT INTO Amb_Pizzas_Ingredients VALUES (
	"Margherita",
    "mozzarella"
);

INSERT INTO Amb_Pizzas_Ingredients VALUES (
	"Bufala",
    "tomato"
);

INSERT INTO Amb_Pizzas_Ingredients VALUES (
	"Bufala",
    "mozzarella di bufala"
);

SELECT * FROM Amb_Pizzas;

SELECT * FROM Amb_Pizzas
JOIN Amb_Pizzas_Ingredients ON Amb_Pizzas_Ingredients.pizza_name = Amb_Pizzas.name
WHERE name = "Margherita";

SELECT * FROM Amb_Pizzas
JOIN Amb_Pizzas_Ingredients ON Amb_Pizzas_Ingredients.pizza_name = Amb_Pizzas.name
WHERE name = "Bufala";

SELECT * FROM Amb_Pizzas;

INSERT INTO Amb_Orders VALUES (
	"p1"
);

RENAME TABLE Amb_Order_Item TO Amb_Order_Items;

INSERT INTO Amb_Orders_Items VALUES (
	"order-item-2",
    "Bufala",
    1
);

INSERT INTO Amb_Orders_Order_Items VALUES (
	"p1",
    "order-item-1"
);

INSERT INTO Amb_Orders_Order_Items VALUES (
	"p1",
    "order-item-2"
);

SELECT * FROM Amb_Orders
JOIN Amb_Orders_Order_Items ON Amb_Orders.id = Amb_Orders_Order_Items.order_id
JOIN Amb_Order_Items ON Amb_Order_Items.id = Amb_Orders_Order_Items.item_id
JOIN Amb_Pizzas ON Amb_Order_Items.pizza_name = Amb_Pizzas.name
WHERE Amb_Orders.id = "p1";