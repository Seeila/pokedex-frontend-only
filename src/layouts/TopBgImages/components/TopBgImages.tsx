import { useMemo } from "react";
import { useLocation } from "react-router-dom";

import Box from "@mui/material/Box";

import PokeballIcon from "@pokedex-graphql/components/Icons/PokeballIcon";
import PointsHeaderIcon from "@pokedex-graphql/components/Icons/PointsHeaderIcon";
import defaultClasses from "./TopBgImages.module.css";
import { useStyle } from "@pokedex-graphql/helpers/classify";

interface ITopBgImagesProps {
    classes?: React.CSSProperties;
}

const TopBgImages: React.FC<ITopBgImagesProps> = ({
    classes: propsCLasses,
}) => {
    const { pathname } = useLocation();
    const classes = useStyle(defaultClasses, propsCLasses);

    const imageBg = useMemo(() => {
        if (pathname == "/" || pathname == "/pokedex") {
            return (
                <Box className={classes.pokeballContainer}>
                    <PokeballIcon
                        htmlColor="var(--pokedex-palette-secondary-light)"
                        className={classes.pokeballIcon}
                    />
                </Box>
            );
        }

        if (pathname.startsWith("/pokemon")) {
            return (
                <Box className={classes.pokemonPageBg}>
                    <span className={classes.square}></span>
                    <PointsHeaderIcon
                        className={classes.pointsIcon}
                        htmlColor="rgba(255,255,255, 0.2)"
                    />
                </Box>
            );
        }

        return null;
    }, [pathname, classes]);

    return imageBg;
};

export default TopBgImages;
