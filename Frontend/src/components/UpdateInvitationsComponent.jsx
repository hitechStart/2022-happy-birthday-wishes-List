import React, { Component } from 'react'
import InvitationsService from '../services/InvitationsService';

class UpdateInvitationsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateInvitations = this.updateInvitations.bind(this);
    }

    componentDidMount(){
        InvitationsService.getInvitationsById(this.state.id).then( (res) =>{
            let invitations = res.data;
            this.setState({firstName: invitations.firstName,
                lastName: invitations.lastName,
                emailId : invitations.emailId
            });
        });
    }

    updateInvitations = (e) => {
        e.preventDefault();
        let invitations = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('invitations => ' + JSON.stringify(invitations));
        console.log('id => ' + JSON.stringify(this.state.id));
        InvitationsService.updateEmployee(invitations, this.state.id).then( res => {
            this.props.history.push('/invitations');
        });
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/invitations');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Invitations</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateInvitations}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateInvitationsComponent
