package net.javaguides.springboot.InvitationsDao;

import net.javaguides.springboot.model.Invitados;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvitationsDao extends JpaRepository<Invitados, Long> {
}
