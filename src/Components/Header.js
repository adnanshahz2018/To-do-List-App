import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>
                TodoList React
            </h1>
            <Link to='/'>       Home  </Link> {'|'}
            <Link to='/about'>  About </Link>{'|'}
            <Link to='/uses'>   Uses  </Link>
        </header>
    )
}

const headerStyle = {
    textAlign: 'center',
    color: 'indigo',

} 
