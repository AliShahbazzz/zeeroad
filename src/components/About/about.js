import { Button } from '@mui/material';
import React, { Component } from 'react';
import "./about.css";

class About extends Component {

    render() { 
        return (
          <div className="about_root">
            <div className="about_main">
              <div className="about_image"></div>
              <div className="about_content font_color_secondary">
                <div className="about_heading">About us</div>
                <p>
                  We're zeeroad. A Web Design and Digital Branding Agency with a
                  bold mission.
                  <br />
                  <br />
                  We have started this business to help businesses grow and tell
                  their story to the entire world. Our mission is to help 10000
                  businesses in achieving their goals without changing who they
                  are.
                  <br />
                  <br />
                  We believe in the power of design &amp; creativity. Our team of
                  experts can help you understand the design concepts and
                  strategies so you can connect with your target market
                  seamlessly with a touch of emotion.
                  <br />
                  <br />
                  We motivate you to join our mission and be a part of the
                  change.
                  <br />
                  <br />
                  <Button variant="outlined" className="about_button">Register Here</Button>
                </p>
              </div>
            </div>
          </div>
        );
    }
}
 
export default About;