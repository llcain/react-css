import React from 'react';


class About extends React.Component {
     
    render() {
        const books = ["Sunrise", "Moonstruck", "Rainfall"];
        return (
            <>
                <section className='wrapper-container'>
                   <h2>About Me!</h2>

                    <section className='section-container'> 
                        
                       
                        <ul>
                            {books.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>
                </section>
            </>
        );
    }
}
 
export default About;