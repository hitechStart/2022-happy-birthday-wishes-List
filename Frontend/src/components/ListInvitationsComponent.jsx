import React, { Component } from 'react'
import Board from './Board';
import Card from './Card';
import InvitationsService from '../services/InvitationsService'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

class ListInvitationsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            invitations: []
        }
        this.addInvitations = this.addInvitations.bind(this);
        this.editInvitations = this.editInvitations.bind(this);
        this.deleteInvitations = this.deleteInvitations.bind(this);
        this.removeAllInvitations = this.removeAllInvitations.bind(this);
    }
    deleteInvitations(id) {
        InvitationsService.deleteInvitations(id).then(res => {
            this.setState({ invitations: this.state.invitations.filter(invitations => invitations.id !== id) });
        });
    }
    removeAllInvitations() {
        const links = this.state.invitations
        links.map((index) => {
            if (index.id)
                this.deleteInvitations(index.id)
            else
                console.log("Cannot convert undefined or null to object")
        })
    }
    viewInvitations(id) {
        this.props.history.push(`/view-invitations/${id}`);
    }
    editInvitations(id) {
        this.props.history.push(`/add-invitations/${id}`);
    }
    componentDidMount() {
        InvitationsService.getInvitations().then((res) => {
            this.setState({ invitations: res.data });
        });
    }
    addInvitations() {
        this.props.history.push('/add-invitations/_add');
    }
    render() {
        return (
            <>
                <Container className="App">
                    <Row className="justify-content-md-center">
                        <Col>
                            <h2 className="text-center">Lista de Invitados</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <button className="botones" onClick={this.addInvitations}> Añadir invitados</button>
                        </Col>
                        <Col lg={4}>
                            <button className="botones" type="submit" onClick={this.removeAllInvitations}>Enviar</button>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col >
                            <div className="App">
                                <div className="row justify-content-md-center">
                                    <main className="flexbox">
                                        <Board id="board-1" className="board">
                                            <tbody>
                                                {
                                                    this.state.invitations.map(
                                                        invitations =>
                                                            <Card id="card-1" className="card" draggable="true">
                                                                <p key={invitations.id}>
                                                                    <pre align="left">{invitations.firstName} {invitations.lastName} <button onClick={() => this.editInvitations(invitations.id)} className="botonAzul">&#10679;</button> <button style={{ marginLeft: "10px" }} onClick={() => this.viewInvitations(invitations.id)} className="botonVerde">&#10689;</button> <button onClick={() => this.deleteInvitations(invitations.id)} className="botonRojo">&#8982;</button>
                                                                        <br />
                                                                        {invitations.emailId}</pre>
                                                                </p>
                                                            </Card>
                                                    )
                                                }
                                            </tbody>
                                        </Board>
                                        <Board id="board-2" className="board" >
                                        </Board>
                                    </main>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default ListInvitationsComponent
