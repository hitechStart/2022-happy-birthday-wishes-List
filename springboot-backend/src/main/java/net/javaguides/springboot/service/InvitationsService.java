
package net.javaguides.springboot.service;

import java.util.List;
import java.util.Optional;

import net.javaguides.springboot.model.Invitados;
public interface InvitationsService {
    
        public List<Invitados>  getAllInvitations();
        public String guardar(Invitados Invitados);
        public Invitados almacenar(Invitados Invitados);
        public Optional<Invitados> buscarPorId(Long id);
        public String eliminar(Invitados invitados);

}
