import {
    Query_Root,
    Pokemon_V2_Pokemon,
    Pokemon_V2_Pokemontype,
    Pokemon_V2_Type,
    Maybe,
} from "@pokedex-graphql/__generated__/graphql";

const getPokemonFromDatas = (data: Query_Root): Pokemon_V2_Pokemon | null =>
    data?.pokemon_v2_pokemon?.[0];

const getPokemonTypes = (
    pokemon: Pokemon_V2_Pokemon
): Pokemon_V2_Pokemontype[] => pokemon?.pokemon_v2_pokemontypes || [];

const getPokemonMainType = (pokemon: Pokemon_V2_Pokemon): string => {
    const pokemonTypes: Pokemon_V2_Pokemontype[] = getPokemonTypes(pokemon);
    if (pokemonTypes.length) {
        const types: Pokemon_V2_Pokemontype = pokemonTypes[0];
        const mainType: Maybe<Pokemon_V2_Type> = types?.pokemon_v2_type || null;
        return mainType?.name || "";
    }

    return "";
};

const getPokemonDefaultColor = (pokemon: Pokemon_V2_Pokemon): string =>
    `--pokedex-palette-${getPokemonMainType(pokemon)}`;

export { getPokemonFromDatas, getPokemonMainType, getPokemonDefaultColor };
