import React from 'react';

class Footer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            color: "purple",
            backgroundColor: "green",
            padding: "10px"       }
    }
    render() { 
        return (
            <>
            <div className='footer'>
                <h1 style={this.state}>Created by LaQuisha Cain</h1>
            </div>
            </>
        );
    }
}
 
export default Footer;