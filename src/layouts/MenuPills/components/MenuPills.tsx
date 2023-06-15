import { useTheme } from "@mui/material/styles";
import { List, Palette, PaletteColorOptions, Grid, Box } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Link from "@pokedex-graphql/components/Link/Link";
import { IMenuItems } from "@pokedex-graphql/layouts/MobileMenu/components/MobileMenu";
import PokeballIcon from "@pokedex-graphql/components/Icons/PokeballIcon";

import defaultStyles from "./MenPills.module.css";

interface IMenuPillsProps {
    menuItems: IMenuItems[];
}

const MenuPills: React.FC<IMenuPillsProps> = ({ menuItems }) => {
    const theme = useTheme();
    if (!menuItems) {
        return null;
    }
    const items: React.ReactElement[] = menuItems.map((item: IMenuItems) => {
        const color: string =
            theme.palette[item.color as keyof Palette][
                "main" as keyof PaletteColorOptions
            ];
        const style = Object.assign(
            {},
            {
                "--pill-color": `var(--pokedex-palette-${item.color}-main)`,
                "--pill-color-light": `var(--pokedex-palette-${item.color}-light)`,
                "--pill-color-shadow": `${color}80`,
            }
        );
        return (
            <Grid
                key={`${item.name}-menu`}
                item
                component={ListItem}
                xs={6}
                sx={{ ...style, position: "relative", zIndex: 1 }}
                disablePadding
            >
                <Link
                    variant="textPill"
                    href={item.url}
                    className={defaultStyles.pillLink}
                >
                    {item.name}
                    <div className={defaultStyles.pokeballContainer}>
                        <PokeballIcon
                            htmlColor={`#ffffff20`}
                            className={defaultStyles.pokeBallIcon}
                        />
                    </div>
                </Link>
            </Grid>
        );
    });
    return (
        <Grid container component={List} rowSpacing={2.25} columnSpacing={1.5}>
            {items}
        </Grid>
    );
};

export default MenuPills;
