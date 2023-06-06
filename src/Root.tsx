import React from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileMenu from "@pokedex-graphql/layouts/MobileMenu/components/MobileMenu";
import ThemeToggle from "./components/ThemeToggle";

const Root : React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const menu = isMobile ? <MobileMenu /> : <p>Desktop Menu</p>;

    return (
        <>
            {menu}
            <ThemeToggle />
            <Outlet />
        </>
    )

};

export default Root;