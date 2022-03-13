import axios from 'axios';

const INVITATIONS_API_BASE_URL = "http://localhost:8080/api/v1/invitations";

class InvitationsService {

    getInvitations(){
        return axios.get(INVITATIONS_API_BASE_URL);
    }

    createInvitations(invitations){
        return axios.post(INVITATIONS_API_BASE_URL, invitations);
    }

    getInvitationsById(invitationsId){
        return axios.get(INVITATIONS_API_BASE_URL + '/' + invitationsId);
    }

    updateInvitations(invitations, invitationsId){
        return axios.put(INVITATIONS_API_BASE_URL + '/' + invitationsId, invitations);
    }

    deleteInvitations(invitationsId){
        return axios.delete(INVITATIONS_API_BASE_URL + '/' + invitationsId);
    }
}

export default new InvitationsService()