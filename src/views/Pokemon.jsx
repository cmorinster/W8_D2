import React, {useEffect, useState} from 'react'
import PokemonForm from '../components/PokemonForm';


export default function Pokemon() {

    const [pokemon, setPokemon] = useState('pikachu');
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data);

            })



    }, [pokemon]);

    const updatePokemon = (mewPokemon) => {
        setPokemon(mewPokemon);

    }



  return (
    <div className='container'>
        <PokemonForm updatePokemon = {updatePokemon} />
        <div className="row">
            <div className="col">
                <div className="card">
                <div className="card-body">
                    
                    <p className = "card-text">Name: {data.name}</p>
                    <p className = "card-text">Height: {data.height}</p>
                    <p className = "card-text">Weight: {data.weight}</p>
                </div>
                </div>
            </div>

        </div>
    </div>
  )
}
