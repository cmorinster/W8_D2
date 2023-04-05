import React from 'react'

export default function PokemonForm({ updatePokemon }) {

    const handleFormSubmit = event => {
        event.preventDefault();
        let newPokemon = event.target.pokemon.value;
        updatePokemon(newPokemon);
        event.target.pokemon.value = '';
        
    };



  return (
    <div>
        <form action ="" id="toDoForm" onSubmit={handleFormSubmit}>

            <div className="form-group">
                <input
                    type="text"
                    name="pokemon"
                    className="form-control"
                    placeholder="Enter a pokemon!"
                />
                <input
                    type="submit"
                    defaultValue="Submit"
                    className="btn btn-success w-100 mt-3"
                />
            </div>
        </form>
    </div>
  )
}
