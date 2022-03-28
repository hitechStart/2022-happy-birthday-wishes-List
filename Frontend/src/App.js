import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListInvitationsComponent from './components/ListInvitationsComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateInvitationsComponent from './components/CreateInvitationsComponent';
import UpdateInvitationsComponent from './components/UpdateInvitationsComponent';
import ViewInvitationsComponent from './components/ViewInvitationsComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListInvitationsComponent}></Route>
                          <Route path = "/invitations" component = {ListInvitationsComponent}></Route>
                          <Route path = "/add-invitations/:id" component = {CreateInvitationsComponent}></Route>
                          <Route path = "/view-invitations/:id" component = {ViewInvitationsComponent}></Route>
                    </Switch>
                </div>         
        </Router>
  <div className="deadSpace">
    
  </div>
        <FooterComponent />
    </div>
    
  );
}

export default App;
