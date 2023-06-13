import { useMemo } from "react";
import { useLocation } from "react-router-dom";

import Box from "@mui/material/Box";

import PokeballHeaderIcon from "@pokedex-graphql/components/Icons/pokeballHeaderIcon";
import PointsHeaderIcon from "@pokedex-graphql/components/Icons/PointsHeaderIcon";
import defaultClasses from "./TopBgImages.module.css";

const TopBgImages = () => {
    const { pathname } = useLocation();

    const imageBg = useMemo(() => {
        if (pathname == "/" || pathname == "/pokedex") {
            return (
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "39.5%",
                        height: "calc(100vw * 45 / 100)",
                    }}
                >
                    <PokeballHeaderIcon
                        viewBox="0 0 142 162"
                        htmlColor="var(--pokedex-palette-secondary-light)"
                        sx={{ width: "142px", height: "162px" }}
                    />
                </Box>
            );
        }

        if (pathname.startsWith("/pokemon")) {
            return (
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "100%",
                    }}
                >
                    <span className={defaultClasses.square}></span>
                    <PointsHeaderIcon
                        viewBox="0 0 54 30"
                        sx={{
                            position: "absolute",
                            top: "6px",
                            right: "92px",
                            width: "54px",
                            height: "30px",
                        }}
                        htmlColor="rgba(255,255,255, 0.2)"
                    />
                </Box>
            );
        }

        return null;
    }, [pathname]);

    return imageBg;
};

export default TopBgImages;
