import React from 'react';

class Navbar extends React.Component {
    
    render() { 
        return (
            <>
            <div className='container'>
                <div className='logo'>
                    CSS
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            </>
        );
    }
}
 
export default Navbar ;