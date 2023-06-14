import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material/";

import { routes } from "./routes.tsx";
import pokedexTheme from "./theming/theme.js";
import "./index.css";

const client = new ApolloClient({
    uri: `${import.meta.env.VITE_API_URL}`,
    cache: new InMemoryCache(),
});

const router = createBrowserRouter(routes, {
    future: {
        v7_normalizeFormMethod: true,
    },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <CssVarsProvider theme={pokedexTheme}>
                <CssBaseline />
                <RouterProvider router={router} />
            </CssVarsProvider>
        </ApolloProvider>
    </React.StrictMode>
);
