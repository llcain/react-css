import React  from "react";
import axios from "axios";

class Users extends React.Component {

    

    constructor(props) {
        super(props)
        this.state = {
            name: null,
            email: null
        };
    };

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users/1")
        .then(response => {
            this.setState({
                name: response.data.name,
                email: response.data.email
            })
            // console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    };

    
    
    render() { 
        return (
            <>
            <span style={{color: "white", fontsize: "20px"}}>{this.state.name}</span>
                
                <span>{this.state.email}</span>
            </>
        );
    }
}
 
export default Users;