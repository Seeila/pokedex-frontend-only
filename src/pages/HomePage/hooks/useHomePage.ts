import { menuItems as links } from "@pokedex-graphql/datas/menuItems.js";
import { IMenuItems } from "@pokedex-graphql/layouts/MobileMenu/components/MobileMenu";

export const useHomePage = () => {
    const menuItems: IMenuItems[] = links;
    return { menuItems };
};
