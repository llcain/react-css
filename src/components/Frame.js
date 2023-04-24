import React  from "react";

class Frame extends React.Component {

    constructor() {
        super();
        this.state = {color: "red"};
    }

    // const getPokemonSpecies = async (PokemonNumber) => 
    // fetch(`https://pokeapi.co/api/v2/pokemon-species/${PokemonNumber}/`)
    //     .then(res => res.json())
    //     .then(data => data)
    //     .catch(err => console.error(err));
    
    render() { 
        return (
            <>
            <div className='frame' data-bg-color="green">
                <div className="description">
                    <h2>I am a {this.state.color} Car!</h2>
                    Clique sur l'image pour entendre le nom
                </div>
            
            </div>
            </>
        );
    }
}
 
export default Frame;