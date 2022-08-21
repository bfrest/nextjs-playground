import styled from 'styled-components';

const PokeMonImg = styled.img`
  height: 500px;
`;

export default function Pokemon({ character }) {
  console.log(character);
  return (
    <div>
      <PokeMonImg src={character.sprites.front_default} alt={character.name} />
      <h1>{character.name}</h1>
      <h2>Pokedex Number: {character.id}</h2>

      <h3>Games</h3>
      <ul>
        {/* loops over the each game the pokemon is in */}
        {character.game_indices.map((item) => (
          <p>{item.version.name}</p>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const results = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`
  ).then((resp) => resp.json());

  return {
    props: {
      character: results,
    },
  };
}

export async function getStaticPaths() {
  let allPokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=700`
  ).then((res) => res.json());

  return {
    // loops over each result to get create a path for each pokemon
    paths: allPokemon.results.map((pokemon) => {
      const pokemonId = pokemon.name.toLowerCase().replace(/ /g, '-');
      return {
        // This is the parameter for the url you use in static props
        params: {
          // so nextjs knows all routes ahead of time
          pokemonId: pokemon.name,
        },
      };
    }),
    fallback: false,
  };
}
