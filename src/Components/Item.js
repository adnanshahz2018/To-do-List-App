
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Item extends Component {

    getStyle = () => {
        return {
            padding: '4px 2px 0px 0px',
            borderBottom: '2px black outset',
            backgroundColor: this.props.todo.done ? 'lightgreen' : 'lightblue',
            textDecoration: this.props.todo.done ? 'line-through' : 'none'
        }
    }

    getdescription = (todo) => {
        if(!todo.done){
            return todo.description;
        }
    }

    render() {
        const {id, title} = this.props.todo
        return (
            <div style={this.getStyle()}>
                <input type='checkbox' onChange={this.props.markComplete.bind(this,id)} /> {' '} 
                 {title} 
                <button style={buttontStyle}  onClick={this.props.delete.bind(this,id)}>
                     Delete
                </button>
                <p> {this.getdescription(this.props.todo)} </p>
            </div>
        )
    }
}

Item.propTypes = {
    todo: PropTypes.object.isRequired
}

const buttontStyle = {
    background: 'red',
    color: 'white',
    padding: '5px 5px ',
    border: 'none',
    cursor: 'pointer',
    float: 'right'
}

export default Item


/*
    ---------   HELP FOR if() in render() ----------  

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
  this.toggleVisibility = this.toggleVisibility.bind(this)
    // change code above this line
  }
  // change code below this line
toggleVisibility() {
  if(this.state.visibility){
    this.setState({visibility:false})
  }
  else{
    this.setState({visibility:true})
  }
}
  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};

*/