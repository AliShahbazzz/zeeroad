import React, { Component } from 'react';
import "./about.css";

class About extends Component {

    render() { 
        return (
            <div className="about_root">
                <div className="about_main">
                    <div className='about_image'>

                    </div>
                    <div className='about_content font_color_secondary'>
                        <div className='about_heading'>About us</div>
                        <p>Zeeroad Marketing is a full-service digital marketing agency based in Dubai, UAE. 
We combine a data-driven approach with knowledge 
gained from years in digital marketing to deliver outstanding results to our clients.</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default About;