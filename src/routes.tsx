import { RouteObject } from "react-router-dom";
import App from './App.tsx';
import Pokedex from "./pages/Pokedex.tsx";
import Pokemon from "./pages/Pokemon.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

export const routes: RouteObject[] = [ {
    path: "/",
    element:  <App />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "pokedex",
            element: <Pokedex />
        },
        {
            path: "pokemon/:id",
            element: <Pokemon />
        }
    ]
  }];