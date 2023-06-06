import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import {
  PaletteOptions,
  PaletteColor,
  useTheme,
} from "@mui/material/styles";

import { GET_POKEMON } from "@pokedex-graphql/pages/Pokemon/service/getPokemon.gql.ts";
import Pill from "@pokedex-graphql/components/Pills/Pill";

import defaultClasses from "./pokemon.module.css";

interface IPokemonType {
  pokemon_v2_type: {
    name: string;
  };
}
const Pokemon = () => {
  const { id } = useParams();
  const pokemonId: number = id ? parseInt(id) : 1;

  const theme = useTheme();

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { pokemonId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const {
    name,
    height,
    weight,
    pokemon_v2_pokemontypes: types,
    pokemon_v2_pokemonspecy,
  } = data.pokemon_v2_pokemon[0];


  let style;
  const defaultColor= `--mui-palette-${types[0].pokemon_v2_type.name}`;

  if (types && types[0]) {
    style = Object.assign({}, style, {
      "--pokemon-bg": `var(${defaultColor}-main)`,
      "--pokemon-bg-dark": `var(${defaultColor}-dark)`,
    });
  }
  const pokemonPills = types?.map((pokemonType: IPokemonType) => {
    const typeName: string = pokemonType.pokemon_v2_type.name;
    return (
      <li className={defaultClasses.type} key={`pokemon-pill-${typeName}`}>
        <Pill text={typeName} />
      </li>
    );
  });

  return (
    <section className={defaultClasses.root} style={style}>
      <h1>{name}</h1>
      <ul className={defaultClasses.typeList}>{pokemonPills}</ul>
    </section>
  );
};

export default Pokemon;
