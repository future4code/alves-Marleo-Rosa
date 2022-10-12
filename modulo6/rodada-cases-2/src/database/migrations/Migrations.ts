import { BaseDatabase } from "../BaseDatabase"
import { OrderDatabase } from "../OrderDatabase"
import { PizzaDatabase } from "../PizzaDatabase"
import { ingredientsSeed, pizzaIngredientsSeed, pizzasSeed } from "./data"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${OrderDatabase.TABLE_ORDER_ITEMS};
        DROP TABLE IF EXISTS ${OrderDatabase.TABLE_ORDERS};
        DROP TABLE IF EXISTS ${PizzaDatabase.TABLE_PIZZAS_INGREDIENTS};
        DROP TABLE IF EXISTS ${PizzaDatabase.TABLE_INGREDIENTS};
        DROP TABLE IF EXISTS ${PizzaDatabase.TABLE_PIZZAS};
        
        CREATE TABLE IF NOT EXISTS ${PizzaDatabase.TABLE_PIZZAS} (
            name VARCHAR(255) PRIMARY KEY,
            price DECIMAL(4,2) NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS ${PizzaDatabase.TABLE_INGREDIENTS} (
            name VARCHAR(255) PRIMARY KEY
        );
        
        CREATE TABLE IF NOT EXISTS ${PizzaDatabase.TABLE_PIZZAS_INGREDIENTS} (
            pizza_name VARCHAR(255) NOT NULL,
            ingredient_name VARCHAR(255) NOT NULL,
            FOREIGN KEY (pizza_name) REFERENCES Amb_Pizzas (name),
            FOREIGN KEY (ingredient_name) REFERENCES Amb_Ingredients (name)
        );
        
        DROP TABLE IF EXISTS ${OrderDatabase.TABLE_ORDERS};
        
        CREATE TABLE IF NOT EXISTS Amb_Orders (
            id VARCHAR(255) PRIMARY KEY
        );
        
        CREATE TABLE IF NOT EXISTS ${OrderDatabase.TABLE_ORDER_ITEMS} (
            id VARCHAR(255) PRIMARY KEY,
            pizza_name VARCHAR(255) NOT NULL,
            quantity TINYINT,
            FOREIGN KEY (pizza_name) REFERENCES Amb_Pizzas (name)
        );
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(PizzaDatabase.TABLE_PIZZAS)
            .insert(pizzasSeed)

        await BaseDatabase
            .connection(PizzaDatabase.TABLE_INGREDIENTS)
            .insert(ingredientsSeed)

        await BaseDatabase
            .connection(PizzaDatabase.TABLE_PIZZAS_INGREDIENTS)
            .insert(pizzaIngredientsSeed)
    }
}

const migrations = new Migrations()
migrations.execute()