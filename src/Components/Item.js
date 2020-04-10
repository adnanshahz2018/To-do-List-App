
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Item extends Component {

    getStyle = () => {
        return {
            padding: '4px 2px 10px 0px',
            borderBottom: '2px black outset',
            backgroundColor: this.props.todo.done ? 'lightgreen' : 'lightblue',
            textDecoration: this.props.todo.done ? 'line-through' : 'none'
        }
    }

    getdescription = (todo) => {

        if(!todo.done){
            return <p> {todo.description}</p>
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
                 {this.getdescription(this.props.todo)}
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
    padding: '5px 10px',
    border: 'none',
    // borderRadius: '40%',
    cursor: 'pointer',
    float: 'right'
}

export default Item
