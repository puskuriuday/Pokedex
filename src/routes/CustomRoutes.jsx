import { Route, Routes } from "react-router-dom";
import Pokedex from "../components/Pokedex/Pokedex";
import PokemonDetails from "../components/PokemonDetails/PokemonDetails";

export default function CustomRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Pokedex/>} />
            <Route path="/Pokemon/:Id" element={<PokemonDetails />} />
        </Routes>
    )
}