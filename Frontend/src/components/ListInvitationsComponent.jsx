import React, { Component } from 'react'
import InvitationsService from '../services/InvitationsService'

class ListInvitationsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                invitations: []
        }
        this.addInvitations = this.addInvitations.bind(this);
        this.editInvitations = this.editInvitations.bind(this);
        this.deleteInvitations = this.deleteInvitations.bind(this);
    }

    deleteInvitations(id){
        InvitationsService.deleteInvitations(id).then( res => {
            this.setState({invitations: this.state.invitations.filter(invitations => invitations.id !== id)});
        });
    }
    viewInvitations(id){
        this.props.history.push(`/view-invitations/${id}`);
    }
    editInvitations(id){
        this.props.history.push(`/add-invitations/${id}`);
    }

    componentDidMount(){
        InvitationsService.getInvitations().then((res) => {
            this.setState({ invitations: res.data});
        });
    }

    addInvitations(){
        this.props.history.push('/add-invitations/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Invitations List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addInvitations}> Add Invitations</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Invitations First Name</th>
                                    <th> Invitations Last Name</th>
                                    <th> Invitations Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.invitations.map(
                                        invitations => 
                                        <tr key = {invitations.id}>
                                             <td> { invitations.firstName} </td>   
                                             <td> {invitations.lastName}</td>
                                             <td> {invitations.emailId}</td>
                                             <td>
                                                 <button onClick={ () => this.editInvitations(invitations.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteInvitations(invitations.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewInvitations(invitations.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListInvitationsComponent
