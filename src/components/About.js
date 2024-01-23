import React from 'react';
import Sunset1 from "../images/sunset1.jpg";
import Sunset2 from "../images/sunset2.jpg";

class About extends React.Component {
     
    render() { 
        return (
            <>
                <section className='wrapper-container'>
                   <h2>About Me!</h2>

                    <section className='section-container'> 
                        
                        <div className="left">
                            <img src={Sunset1} alt="Sunset 1"/>
                        </div>
                        <div className="right">
                        <img src={Sunset2} alt="Sunset 2"/>
                        </div>
                    </section>
                </section>
            </>
        );
    }
}
 
export default About;