import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://hitechstart.github.io/2021-Biografia/" className="navbar-brand">Invitations Management App</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
