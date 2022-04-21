package net.javaguides.springboot.service;

import java.util.List;
import java.util.Optional;

import net.javaguides.springboot.InvitationsDao.InvitationsDao;
import net.javaguides.springboot.model.Invitados;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ServiceImpl implements InvitationsService {

    @Autowired
    private InvitationsDao invitationsDao;

    @Override
    @Transactional(readOnly = true)
    // get all invitations
    public List<Invitados>  getAllInvitations() {
        return (List<Invitados>) invitationsDao.findAll();
    }
    public String guardar(Invitados invitados){
        invitationsDao.save(invitados);
        return "redirect:/";
    }
    @Transactional(readOnly = true)
    public Optional<Invitados> buscarPorId(Long id){

        return invitationsDao.findById(id);
    }
    //Importamos la notacion para hacer commit o rollback
    @Transactional
    public Invitados almacenar(Invitados invitados){
        return invitationsDao.save(invitados);
    }
    @Transactional
    public String eliminar(Invitados invitados){
        invitationsDao.delete(invitados);
        return "redirect:/";
    }
}
