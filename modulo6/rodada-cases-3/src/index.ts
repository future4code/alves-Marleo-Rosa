import app from "./app";
import getPokemons from "./endpoints/getPokemons";

app.get('/pokemon', getPokemons)