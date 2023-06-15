import { RouteObject } from "react-router-dom";
import { lazy } from "react";
import Root from "../Root.tsx";

import HomePage from "@pokedex-graphql/pages/HomePage/components/HomePage.tsx";
import { lazyLoadRoutes } from "./lazyLoadRoutes.tsx";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Root />,
        errorElement: lazyLoadRoutes("ErrorPage"),
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "pokedex",
                element: lazyLoadRoutes("Pokedex"),
            },
            {
                path: "pokemon/:id",
                element: lazyLoadRoutes("Pokemon"),
            },
        ],
    },
];
