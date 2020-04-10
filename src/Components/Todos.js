

import React, { Component} from 'react'
import PropTypes from 'prop-types'
import Item from './Item'


class Todos extends Component {
    render(){
        return this.props.todos.map((todo) =>(
            <Item key={todo.id} todo={todo} markComplete = {this.props.markComplete} delete={this.props.delete} />
        )
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;