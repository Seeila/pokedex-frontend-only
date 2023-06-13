import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import { useHeader } from "@pokedex-graphql/layouts/Header/hooks/useHeader";
import MobileMenu, {
    MobileMenuButton,
} from "@pokedex-graphql/layouts/MobileMenu";

import BackButton from "@pokedex-graphql/components/Buttons/backButton";
import TopBgImages from "@pokedex-graphql/layouts/TopBgImages";

const ANCHOR = "left";

const Header = () => {
    const theme = useTheme();
    const { pathname } = useLocation();

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const { isDrawerOpen, toggleDrawer, menuItems, handleBackButtonClick } =
        useHeader();

    const menu = useMemo(() => {
        if (isMobile) {
            return (
                <MobileMenu
                    menuItems={menuItems}
                    toggleDrawer={toggleDrawer}
                    isDrawerOpen={isDrawerOpen}
                    anchor={ANCHOR}
                />
            );
        }

        return <p>Desktop Menu</p>;
    }, [isDrawerOpen, isMobile, menuItems, toggleDrawer]);

    const menuColor = pathname.startsWith("/pokemon") ? "secondary" : "primary";

    const appBar = useMemo(() => {
        if (pathname !== "/") {
            return (
                <AppBar
                    position="sticky"
                    elevation={0}
                    color="transparent"
                    sx={{
                        padding: `${theme.spacing(3.5)}  0 ${theme.spacing(
                            1.75
                        )}`,
                    }}
                >
                    <Toolbar
                        sx={{
                            justifyContent: "space-between",
                            paddingX: theme.spacing(1.5),
                        }}
                    >
                        <BackButton
                            onClick={handleBackButtonClick}
                            color={menuColor}
                        />
                        <MobileMenuButton
                            toggleDrawer={toggleDrawer}
                            anchor={ANCHOR}
                            color={menuColor}
                        />
                        {menu}
                    </Toolbar>
                </AppBar>
            );
        }

        return null;
    }, [pathname, handleBackButtonClick, menu, theme, toggleDrawer, menuColor]);

    return (
        <>
            {appBar}
            <TopBgImages />
        </>
    );
};

export default Header;
