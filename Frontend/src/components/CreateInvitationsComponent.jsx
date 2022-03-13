import React, { Component } from 'react'
import InvitationsService from '../services/InvitationsService';

class CreateInvitationsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateInvitations = this.saveOrUpdateInvitations.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            InvitationsService.getInvitationsById(this.state.id).then( (res) =>{
                let invitations = res.data;
                this.setState({firstName: invitations.firstName,
                    lastName: invitations.lastName,
                    emailId : invitations.emailId
                });
            });
        }        
    }
    saveOrUpdateInvitations = (e) => {
        e.preventDefault();
        let invitations = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('invitations => ' + JSON.stringify(invitations));

        // step 5
        if(this.state.id === '_add'){
            InvitationsService.createInvitations(invitations).then(res =>{
                this.props.history.push('/invitations');
            });
        }else{
            InvitationsService.updateInvitations(invitations, this.state.id).then( res => {
                this.props.history.push('/invitations');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Invitation</h3>
        }else{
            return <h3 className="text-center">Update Invitation</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
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

                                        <button className="btn btn-success" onClick={this.saveOrUpdateInvitations}>Save</button>
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

export default CreateInvitationsComponent
