import React, { Component } from 'react';
import "./footer.css";

class Footer extends Component {
    state = {  } 
    render() { 
        return (
          <div className="footer_root">
            <div className="footer_main font_color_secondary">
                <span>Copyright © 2021 Zeeroad All Rights Reserved.</span>
            </div>
          </div>
        );
    }
}
 
export default Footer;