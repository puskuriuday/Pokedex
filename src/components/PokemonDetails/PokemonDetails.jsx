import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PokemonDetails(){
    const { Id } = useParams();
    const [Pokemon , SetPokemon] = useState({});
    async function download() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Id}`);
        console.log(response.data.types.map((t) => t.type.name))
        SetPokemon({
            name : response.data.name,
            Image : response.data.sprites.other.dream_world.front_default,
            weight : response.data.weight,
            height : response.data.height,
            types : response.data.types.map((t) => t.type.name)
        });

    }
    useEffect(()=>{
        download();
    },[]);
    return(
        <div className="PokemonDetails-wrapper">
            <div className="Pokemon-Name">Name : {Pokemon.name}</div>
            <img className="Pokemon-Image" src = {Pokemon.Image}/>
            <div>Height : {Pokemon.height}</div>
            <div>Weight : {Pokemon.weight}</div>
            <div className="pokemon-types">
                {/* {Pokemon.types.map((t) => <div key = {t} >{t} </div> )} */}
            </div>
        </div>
    );
}