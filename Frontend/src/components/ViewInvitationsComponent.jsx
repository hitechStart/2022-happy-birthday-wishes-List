import React, { Component } from 'react'
import InvitationsService from '../services/InvitationsService'

class ViewInvitationsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            invitations: {}
        }
    }

    componentDidMount(){
        InvitationsService.getInvitationsById(this.state.id).then( res => {
            this.setState({invitations: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View invitations Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Invitations First Name: </label>
                            <div> { this.state.invitations.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Invitations Last Name: </label>
                            <div> { this.state.invitations.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Invitations Email ID: </label>
                            <div> { this.state.invitations.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewInvitationsComponent
