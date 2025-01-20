import axios from "axios";
import { useEffect, useState } from "react";
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";

export default function PokemonList(){

    const [PokemonList , SetPokemonList] = useState([]);
    const [Loader , SetLoder] = useState(true);

    async function Pokemons(){
        SetLoder(true);
        const Poke_url = "https://pokeapi.co/api/v2/pokemon/"
        const response = await axios.get(Poke_url);
        const Data = response.data.results.map(async (Poke) => await axios.get(Poke.url));
        const PokeData = await axios.all(Data);
        console.log(PokeData);
        const res = PokeData.map((pokemon) => {
            const Pokemon = pokemon.data;
            return {
                Name : Pokemon.name,
                image : Pokemon.sprites.other.dream_world.front_default,
                types : Pokemon.types,
                id : Pokemon.id
            }
        });
        SetPokemonList(res);
        console.log(res);
        
        SetLoder(false);
    }

    useEffect(()=>{
        Pokemons();
    },[]);

    return(
        <div className="PokemonList-wrapper">
            <br />
            <div className="Pokemon-wrapper">
                {(Loader) ? "loading....." : 
                    PokemonList.map((poke) => <Pokemon Name={poke.Name} image={poke.image} key={poke.id} />
                    )
                }
            </div>
            <div className="controls">
                <button>Prev</button>
                <button>Next</button>
            </div>
        </div>
    );
}