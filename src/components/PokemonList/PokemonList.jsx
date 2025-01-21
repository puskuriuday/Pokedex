import axios from "axios";
import { useEffect, useState } from "react";
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";


export default function PokemonList(){

    const [PokemonList , SetPokemonList] = useState([]);
    const [Loader , SetLoder] = useState(true);
    const [pokedexurl , Setpokedexurl] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [next , setnext ] = useState('');
    const [ prev , setprev ] = useState('');

    async function Pokemons(){
        SetLoder(true);
        const response = await axios.get(pokedexurl);
        setnext(response.data.next);
        setprev(response.data.previous);
        const Data = response.data.results.map(async (Poke) => await axios.get(Poke.url));
        const PokeData = await axios.all(Data);
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
        SetLoder(false);
    }

    useEffect(()=>{
        Pokemons();
    },[pokedexurl]);

    return(
        <div className="PokemonList-wrapper">
            <br />
            <div className="Pokemon-wrapper">
                {(Loader) ? "loading....." : 
                    PokemonList.map((poke) => <Pokemon Name={poke.Name} image={poke.image} key={poke.id} id = {poke.id} />
                    )
                }
            </div>
            <div className="controls">
                <button disabled={prev === null} onClick={() => Setpokedexurl(prev)} >Prev</button>
                <button disabled={next === null} onClick={() => Setpokedexurl(next)} >Next</button>
            </div>
        </div>
    );
}