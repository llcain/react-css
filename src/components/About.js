import React from 'react';
import Sunset1 from "../images/sunset1.jpg";
import Sunset2 from "../images/sunset2.jpg";

class About extends React.Component {
     
    render() { 
        return (
            <>
                <section className='wrapper-container'>
                    <h1>About Page</h1>

                    <section className='section-container'> 
                        <h2>About Section</h2>
                        <div className="left">
                            <img src={Sunset1} alt="Sunset photo 1"/>
                        </div>
                        <div className="right">
                        <img src={Sunset2} alt="Sunset photo 2"/>
                        </div>
                    </section>
                </section>
            </>
        );
    }
}
 
export default About;