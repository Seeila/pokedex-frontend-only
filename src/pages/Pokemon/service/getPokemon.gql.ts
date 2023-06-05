import { gql } from "@apollo/client";

export const GET_POKEMON = gql`
  query GetPokemon($pokemonId: Int!) {
    pokemon_v2_pokemon(where: { id: { _eq: $pokemonId } }) {
      height
      id
      name
      weight
      pokemon_v2_pokemontypes {
        id
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonspecy {
        gender_rate
      }
    }
  }
`;
