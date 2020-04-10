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
      <div>
        <div style={{ padding: "10px 0px 10px 0px" }}>
            <input
              type="text"
              style={{ 
                padding: '2px',
                height: "20px", 
                border: "1px solid blue" 
              }}
              name="title"
              placeholder=" Title"
              value = {this.state.title}
              onChange={this.onChange}
              required
            />{" "}
            <input
              type="text"
              style={{
                padding: '2px',
                width: "280px",
                height: "20px",
                border: "1px solid blue",
              }}
              name="description"
              placeholder=" Descriotion"
              value = {this.state.description}
              onChange={this.onChange}
            />
            {"  "}
            <button 
              style={addButton} 
              onClick={this.props.onClick.bind(this,this.state.title, this.state.description)}>
              Add Item 
            </button>
        </div>
      </div>
    );
  }
}

const addButton = {
  background: "indigo",
  color: "white",
  textAlign: "center",
  border: "None",
  height: "20px",
  alignItem: "left",
};

export default AddTodo;
