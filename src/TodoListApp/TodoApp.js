

import React, { Component} from 'react'
import Todos from '../Components/Todos'
import Header from '../Components/Header'
import AddTodo from '../Components/AddTodo'
import uuid from 'react-uuid'

class TodoApp extends Component {
    state = {
        todos: [
            {
                id: uuid(),
                title: 'Search React Course',
                description: 'Look for it excluding udemy and coursera',
                done: false
            },
            {
                id: uuid(),
                title: 'Install Node and npm',
                description: "You can't buid without environment setup",
                done: false
            },
            {
                id: uuid(),
                title: 'Create React App',
                description: 'React is One of the Top Tools in industry',
                done: false
            }
        
        ]
    }

    markComplete = (id) => {
        console.log('inside App')
        this.setState({
            todos: this.state.todos.map(todo => {
         if (todo.id === id){
             todo.done = !todo.done
         }   
            return todo;
        })   
    })

    }

    delete = (id) => {
        this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)] 
         })
    }

    outerdiv = () => {
        return {
            width: '50%',
            alignItem: 'center',
            margin: '0 auto',
            border: '2px solid green',
            justifyContent: 'center',
            padding: '10px 12px 20px',
            background: 'lightgrey'
        }
    }

    innerdiv = () => {
        return {
            // display: 'flex',
            width: '100%',
            border: '2px solid blue' ,
            alignItem: 'center',
            justifyContent: 'center'
        }
    }

    onClick = (title, description) => {
        const newTodo = {
            id: uuid(),
            title,
            description: description,
            done: false
        }
        this.setState({todos: [...this.state.todos,newTodo] });
        console.log(title, '  <==>   ', description)
    }

    render(){
        console.log(this.state.todos)
        return (
            <div style={this.outerdiv()} >
                <Header />
                <AddTodo onClick={this.onClick}/>
                <div style={this.innerdiv()}>
                    <Todos markComplete={this.markComplete} todos={this.state.todos} delete={this.delete} />
                </div>
           </div>
        );
    }
}

export default TodoApp;