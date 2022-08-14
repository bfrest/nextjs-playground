import Link from 'next/link';
import styled from 'styled-components';

const PokemonList = styled.ul`
  display: flex;
  flex-direction: column;

  a {
    color: black;
    text-decoration: none;
    padding: 2rem;
  }
`;

export default function Pokemon({ pokemonList }) {
  return (
    <PokemonList>
      {pokemonList.results.map((item) => {
        return (
          // List of all pokemon with a dynamic url to load right one
          <Link href={`/pokemon/${item.name}`} key={item.url}>
            {item.name}
          </Link>
        );
      })}
    </PokemonList>
  );
}

export async function getStaticProps() {
  const pokemonList = await fetch(
    'https://pokeapi.co/api/v2/pokemon/?limit=700'
  ).then((resp) => resp.json());

  // Allows the data from request to be available in props
  return {
    props: {
      pokemonList,
    },
  };
}
