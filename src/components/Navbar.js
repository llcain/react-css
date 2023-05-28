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
                    <li className='list-item'>Home</li>
                    <li className='list-item'>About</li>
                    <li className='list-item'>Contact</li>
                </ul>
            </div>
            </>
        );
    }
}
 
export default Navbar ;