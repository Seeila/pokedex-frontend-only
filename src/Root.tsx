import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@pokedex-graphql/layouts/Header/components/header";
import ThemeToggle from "./components/ThemeToggle";

const Root: React.FC = () => {
    return (
        <>
            <Header />
            <ThemeToggle />
            <Outlet />
        </>
    );
};

export default Root;
