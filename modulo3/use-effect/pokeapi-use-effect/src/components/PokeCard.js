import axios from "axios";
import { useEffect } from "react";

function PokeCard(props) {
  // Passo 4b
  // Implementa suas variáveis de estado aqui.
  const [pokemon, setPokemon] = useState({})

  // Passo 4c
  useEffect(() => {
    pegaPokemon(props.pokeName);
  }, [])

  // Passo 4c
  useEffect(() => {
    pegaPokemon(props.pokeName)
  }, [pokemon])

  // Passo 4c
  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <figure>
      {/* Passo 4d */}
      <strong>Nome do Pokémon</strong>
      {/* Passo 4d */}
      <p>Peso: 1000 Kg</p>
      {/* Passo 4d */}
      <p>Tipo: Fire</p>
      {/* Passo 4d */}
      {true && (
        <img src={""} alt={"Nome do Pokémon"} />
      )}
    </figure>
  );
};

export default PokeCard;
