import React  from "react";
// import axios from "axios";

class Frame extends React.Component {

    

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         name: null
            
    //     };
    // };

    // componentDidMount() {
    //     axios.get("https://pokeapi.co/api/v2/pokemon/")
    //     .then(response => {
    //         this.setState({
    //             name: response.data.results.id.name
                
    //         })
    //         // console.log(response.data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // };

    // const getPokemonSpecies = async (PokemonNumber) => 
    // fetch(`https://pokeapi.co/api/v2/pokemon-species/${PokemonNumber}/`)
    //     .then(res => res.json())
    //     .then(data => data)
    //     .catch(err => console.error(err));
    
    render() { 
        return (
            <>
            <h1>Using axios to get Pokemon Data </h1>
            <div>
                <b>Pickashu is number 25</b><br/>
                Please Enter an ID:
                <input type="number" className="pokemon-input"></input>
            </div>
            </>
        );
    }
}
 
export default Frame;