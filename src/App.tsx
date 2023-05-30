import { useQuery, gql } from "@apollo/client";
import reactLogo from "./assets/react.svg";
import { Outlet } from "react-router-dom";
import viteLogo from "/vite.svg";

import ThemeToggle from "./components/ThemeToggle.jsx";
import "./App.css";

const GET_PIKACHU = gql`
  query GetPikachu {
    pokemon_v2_pokemon(where: { id: { _eq: 25 } }) {
      base_experience
      height
      id
      is_default
      name
      order
      pokemon_species_id
      weight
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_PIKACHU);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <Outlet />
    </>
  );
}

export default App;
