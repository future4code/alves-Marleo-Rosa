type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

//b) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um arquivo javascript?
// Usando o comando TSC

// c) E se este arquivo estivesse dentro de uma pasta chamada `src`. O processo seria diferente? Se sim, descreva as diferenças.
//Estou usando o comando TSC na raiz mesmo e da dando certo, vou verificar no gabarito depois.

// d) Existe alguma maneira de **transpilar** múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.

// - Dicas
    
//     a) o comando `tsc` seguido do nome do arquivo executa a transpilação de arquivos.
    
//     b) Esse comando funciona de forma parecida com o `cd` do terminal, então podemos descrever não apenas nomes de arquivo, mas também seus caminhos.
    
//     c) Crie outros arquivos .ts na pasta. Podemos rodar o comando `tsc` para transpilar vários arquivos ao colocar seus nomes separados por um espaço.
    
//     ```bash
//     tsc arquivo1.ts arquivo2.ts arquivo3.ts
//     ```
    
//     Ou ainda, o comando `tsc` sem parâmetros, que converte todos os arquivos com a extensão `.ts` que encontrar.