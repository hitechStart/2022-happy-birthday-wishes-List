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
                    <nav className="navbar navbar-expand-md header">
                    <div><a href="https://hitechstart.github.io/2021-Biografia/" className="navbar-brand" style={{color:"white"}}>Invitations Management App</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
