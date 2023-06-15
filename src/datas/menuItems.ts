export interface IMenuItems {
    name: string;
    url: string;
    color: string;
}

export const menuItems: IMenuItems[] = [
    {
        name: "Pokedex",
        url: "/pokedex",
        color: "grass",
    },
    {
        name: "Moves",
        url: "/",
        color: "fire",
    },
    {
        name: "Abilities",
        url: "/",
        color: "water",
    },
    {
        name: "Items",
        url: "/",
        color: "electric",
    },
    {
        name: "Locations",
        url: "/",
        color: "ghost",
    },
    {
        name: "Type Charts",
        url: "/",
        color: "rock",
    },
];
