import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import Typography from "@mui/material/Typography";
import { GET_POKEMON } from "@pokedex-graphql/pages/Pokemon/service/getPokemon.gql.ts";
import Pill from "@pokedex-graphql/components/Pills/Pill";

import {
    getPokemonFromDatas,
    getPokemonDefaultColor,
} from "@pokedex-graphql/helpers/pokemons";

import defaultClasses from "./pokemon.module.css";

interface IPokemonType {
    pokemon_v2_type: {
        name: string;
    };
}

interface IColorsObject {
    "--pokemon-bg": string;
    "--pokemon-bg-dark": string;
}

const Pokemon = () => {
    const { id } = useParams();
    const pokemonId: number = id ? parseInt(id) : 1;

    const { loading, error, data } = useQuery(GET_POKEMON, {
        variables: { pokemonId },
    });

    const pokemon = useMemo(() => {
        return getPokemonFromDatas(data);
    }, [data]);

    const style = useMemo<IColorsObject>(() => {
        if (pokemon) {
            const defaultColor = getPokemonDefaultColor(pokemon);

            return Object.assign(
                {},
                {
                    "--pokemon-bg": `var(${defaultColor}-main)`,
                    "--pokemon-bg-dark": `var(${defaultColor}-dark)`,
                }
            );
        }

        return Object.assign(
            {},
            {
                "--pokemon-bg": `var(--pokedex-palette-grey-800)`,
                "--pokemon-bg-dark": `var(--pokedex-palette-grey-900)`,
            }
        );
    }, [pokemon]);

    useEffect(() => {
        if (pokemon) {
            const defaultColor = getPokemonDefaultColor(pokemon);

            document.documentElement.style.setProperty(
                "--pokedex-palette-common-background",
                `var(${defaultColor}-main)`
            );
        }

        return () => {
            document.documentElement.style.setProperty(
                "--pokedex-palette-common-background",
                `var(--pokedex-palette-grey-800)`
            );
        };
    }, [pokemon]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    const {
        name,
        height,
        weight,
        pokemon_v2_pokemontypes: types,
        pokemon_v2_pokemonspecy,
    } = data.pokemon_v2_pokemon[0];

    const pokemonPills = types?.map((pokemonType: IPokemonType) => {
        const typeName: string = pokemonType.pokemon_v2_type.name;
        return (
            <li
                className={defaultClasses.type}
                key={`pokemon-pill-${typeName}`}
            >
                <Pill text={typeName} />
            </li>
        );
    });

    return (
        <section className={defaultClasses.root} style={style}>
            <Typography variant="h1">{name}</Typography>
            <ul className={defaultClasses.typeList}>{pokemonPills}</ul>
        </section>
    );
};

export default Pokemon;
