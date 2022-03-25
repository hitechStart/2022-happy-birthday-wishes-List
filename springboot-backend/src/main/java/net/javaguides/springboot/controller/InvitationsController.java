package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.extern.slf4j.Slf4j;
import net.javaguides.springboot.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.Invitados;
import net.javaguides.springboot.service.InvitationsService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
@Slf4j
public class InvitationsController {

	@Autowired
        private InvitationsService invitationsService;
	
	// get all invitations
	@GetMapping("/invitations")
	public List<Invitados> inicio(){
		//return invitationsRepository.findAll();
		log.info("ejecutando el controlador rest");
		log.debug("mas detalle del controlador");
                return invitationsService. getAllInvitations();
	}
	// create invitations rest api
	@PostMapping("/invitations")
	public String createInvitations(@RequestBody Invitados invitados) {
		//return invitationsRepository.save(invitados);
		return invitationsService. guardar(invitados);
	}

	// get invitations by id rest api
	@GetMapping("/invitations/{id}")
	public ResponseEntity<Invitados> getInvitationsById(@PathVariable Long id) {
		//Invitados invitados = invitationsRepository.findById(id)
		Invitados invitados = invitationsService.buscarPorId(id)
				.orElseThrow(() -> new ResourceNotFoundException("guest not exist with id :" + id));
		return ResponseEntity.ok(invitados);
	}

	// update invitations rest api

	@PutMapping("/invitations/{id}")
	public ResponseEntity<Invitados> updateInvitations(@PathVariable Long id, @RequestBody Invitados invitadosDetails){
		//Invitados invitados = invitationsRepository.findById(id)
		Invitados invitados = invitationsService.buscarPorId(id)
				.orElseThrow(() -> new ResourceNotFoundException("guest not exist with id :" + id));

		invitados.setFirstName(invitadosDetails.getFirstName());
		invitados.setLastName(invitadosDetails.getLastName());
		invitados.setEmailId(invitadosDetails.getEmailId());

		//Invitados updatedInvitados = invitationsRepository.save(invitados);
		Invitados updatedInvitados = invitationsService.almacenar(invitados);
		return ResponseEntity.ok(updatedInvitados);
	}

	// delete invitations rest api
	@DeleteMapping("/invitations/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		//Invitados invitados = invitationsRepository.findById(id)
		Invitados invitados = invitationsService.buscarPorId(id)
				.orElseThrow(() -> new ResourceNotFoundException("guest not exist with id :" + id));

		invitationsService.eliminar(invitados);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
