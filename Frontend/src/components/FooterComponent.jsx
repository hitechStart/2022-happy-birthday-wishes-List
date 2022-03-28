import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
         currentYear : new Date().getFullYear(),       
        }
    }

    render() {
        return (
           
            <div>
                <footer className = "footer">
                    <span className="text-muted">Copyright © Maximiliano Di Ludovico {this.state.currentYear}</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
