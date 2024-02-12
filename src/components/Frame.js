import React from "react";
// import axios from "axios";



class Frame extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    

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
            <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>       
            
            </>
        );
    }
}
 
export default Frame;