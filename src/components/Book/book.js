import React, { Component } from "react";
import { Button, Select, TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import servicesList from '../Services/servicesList';
import axios from "axios";
import "./book.css";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "lorem ipsum",
      email: "lorem@mail.com",
      service: "ipsum service",
      phone: "7777888859",
      description: "this is from website",
    };
  }
  onchange = (e, type) => {
    console.log("type: ", type);
    console.log("value: ", e.target.value);
    var currData = this.state;
    currData[type] = e.target.value;
    this.setState({ currData });
  };
  onsubmit = () => {
    let data = this.state;
    axios
      .post("/users.php", {
        name: data.name,
        email: data.email,
        service: data.service,
        phone: data.phone,
        description: data.description,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  renderServices = () => {
      let arr = []
          for(let i=0; i<servicesList.length; i++){
              arr.push(
                <MenuItem value={servicesList[i]["title"]}>{servicesList[i]["title"]}</MenuItem>
              )
          }
      return arr
  }
  render() {
    console.log(this.state);
    return (
      <div className="book_root">
        <div className="book_main">
          <div className="book_image">
            <div className="book_heading">Contact us</div>
            <div className="book_content">
              Reach out to us at
              <span className="book_email">
              {" "}<a href="mailto:contact@zeeroad.com"> contact@zeeroad.com </a>{" "}
              </span>
              or fill the form and <br />
              we will get back to you shortly. <br />
              <br />
              +91 8919 880 116 <br />
              +971 58 922 9610 <br />
              +1 647 806 5468
            </div>
          </div>
          <div className="book_form">
            <div className="book_form_container">
              <TextField
                className="book_input"
                label="Name"
                onChange={(e) => this.onchange(e, "name")}
              />
              <TextField
                className="book_input"
                label="Email"
                onChange={(e) => this.onchange(e, "email")}
              />

              <FormControl fullWidth className="book_input">
                <InputLabel id="select-label">Service</InputLabel>
                <Select
                  labelId="select-label"
                  id="select"
                  label="Service"
                  onChange={(e) => this.onchange(e, "service")}
                >
                  {this.renderServices()}
                </Select>
              </FormControl>

              <TextField
                className="book_input"
                label="Phone"
                onChange={(e) => this.onchange(e, "phone")}
              />

              <TextField
                className="book_input"
                label="Description"
                onChange={(e) => this.onchange(e, "description")}
                multiline
                rows={4}
              />
              <Button onClick={this.onsubmit}>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
