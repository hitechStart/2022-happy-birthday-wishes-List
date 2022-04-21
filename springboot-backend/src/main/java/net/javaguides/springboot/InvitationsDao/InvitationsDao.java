package net.javaguides.springboot.InvitationsDao;

import net.javaguides.springboot.model.Invitados;
import org.springframework.data.jpa.repository.JpaRepository;

//-Recuperamos el listado de personas
public interface InvitationsDao extends JpaRepository<Invitados, Long> {

    /*
    * Si necesitaramos regresar la informacion procesada por algun requisito,
    * aqui sobre escribimos los cambios segun el metodo elegido
    * */
}
