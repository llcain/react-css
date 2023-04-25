import React  from "react";
import axios from "axios";

class Frame extends React.Component {

    

    constructor(props) {
        super(props)
        this.state = {
            name: null
            
        };
    };

    componentDidMount() {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then(response => {
            this.setState({
                name: response.data.results.name
                
            })
            // console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    };

    // const getPokemonSpecies = async (PokemonNumber) => 
    // fetch(`https://pokeapi.co/api/v2/pokemon-species/${PokemonNumber}/`)
    //     .then(res => res.json())
    //     .then(data => data)
    //     .catch(err => console.error(err));
    
    render() { 
        return (
            <>
            <h2>{this.state.name}</h2>
            <div className='frame' data-bg-color="green">
                <div className="description">
                    
                    Clique 
                    
                    
                </div>
                
            
            </div>
            </>
        );
    }
}
 
export default Frame;