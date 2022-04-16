// import { Button } from "@mui/material";
import Button from '@mui/material/Button';
import React ,{ Component } from "react";
import logo from '../../assests/logo/SVG/logo_white.svg';
import "./sectionOne.css";

class SectionOnce extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="sectionOne_root">
                <div className="sectionOne_main">
                    <div className="sectionOne_header">
                        <div className="section_header_image_section">
                            <img src={logo} alt="" className="sectionOne_header_logo" />
                        </div>
                        <div className="sectionOne_header_links_section">
                            <ul className="sectionOne_header_lists font_color_secondary">
                                <li>ABOUT US</li>
                                <li>SERVICES</li>
                                <li>OUR WORK</li>
                                <Button variant="outlined">BOOK</Button>
                            </ul>
                        {/* <button>BOOK</button> */}
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default SectionOnce;