import React from "react"
import { Outlet } from "react-router-dom";
import { useIsMobile } from "./helpers/useIsMobile";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import ThemeToggle from "./components/ThemeToggle";

const Root : React.FC = () => {
    const { isMobile } = useIsMobile();

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