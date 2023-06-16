import React from "react";
import Cloud1 from '../images/cloud1.jpg';
import Cloud2 from '../images/cloud2.jpg';
import Cloud3 from '../images/cloud3.jpg';
import Cloud4 from '../images/cloud4.jpg';
import Cloud5 from '../images/cloud5.jpg';
import Cloud6 from '../images/cloud6.jpg';

class Gallery extends React.Component {
     
    render() { 
        return (
            <>
                <h1>Clouds</h1>
                <div className="gallery-container">
                    <img src={Cloud1} alt="Cloud 1"/>
                    <img src={Cloud2} alt="Cloud 2"/>
                    <img src={Cloud3} alt="Cloud 3"/>
                    <img src={Cloud4} alt="Cloud 4"/>
                    <img src={Cloud5} alt="Cloud 5"/>
                    <img src={Cloud6} alt="Cloud 6"/>
                </div>
            </>
        );
    }
}
 
export default Gallery;