import React from 'react'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>
                TodoList React
            </h1>
        </header>
    )
}

const headerStyle = {
    textAlign: 'center',
    color: 'indigo'

} 