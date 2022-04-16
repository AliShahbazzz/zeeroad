import React, { Component } from "react";
import servicesList from "./servicesList";
import "./services.css";

class Services extends Component {
  renderBoxes = () => {
    let arr = [];
    for (let i = 0; i < servicesList.length; i++) {
      arr.push(
        <div className="services_box" key={i}>
          <div className="services_box_header">
            <div className="services_box_image"><img alt="" src={servicesList[i].image} /></div>
            <div className="services_box_title">{servicesList[i].title}</div>
          </div>
          <div className="services_box_content">{servicesList[i].content}</div>
        </div>
      );
    }
    return arr;
  };
  render() {
    return (
      <div className="services_root">
        <div className="services_main">
          <div className="services_heading">Services</div>
          <div className="services_boxes">
              {this.renderBoxes()}
              </div>
        </div>
      </div>
    );
  }
}

export default Services;
