import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: "",
    description: "",
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value });
  }

  render() {
    return (
        <div style={{ position: 'relative', padding: "10px 0px 10px 0px" }}>
              <div><input
              type="text"
              style={{ 
                padding: '2px',
                position: 'relative',
                height: "20px", 
                border: "1px solid blue" 
              }}
              name="title"
              placeholder=" TITLE"
              value = {this.state.title}
              onChange={this.onChange}
              required = 'required'
            /></div>
            {" "}
            <div><input
              type="text"
              style={{
                padding: '2px',
                position: 'relative',
                height: "20px",
                border: "1px solid blue",
              }}
              name="description"
              placeholder=" Description"
              value = {this.state.description}
              onChange={this.onChange}
            /></div>
            {"  "}
            <div><button 
              style={addButton}  
              onClick={this.props.onClick.bind(this,this.state.title, this.state.description)}>
              ADD ITEM
            </button></div>
        </div>
    );
  }
}



const addButton = {
  background: "indigo",
  color: "white",
  textAlign: "center",
  position: 'relative',
  border: "None",
  height: "20px",
  alignItem: "left"
};

export default AddTodo;
