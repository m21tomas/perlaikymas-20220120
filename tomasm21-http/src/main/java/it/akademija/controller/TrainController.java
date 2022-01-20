package it.akademija.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import it.akademija.dao.trainDAO;
import it.akademija.model.CreateTrainCommand;
import it.akademija.model.Train;
import it.akademija.model.User;

@RestController
@RequestMapping(value = "/api/trains")
public class TrainController {
	private final trainDAO tdao;
	
	@Autowired
	public TrainController(trainDAO tdao) {
		//super();
		this.tdao = tdao;
	}

	/* Apdoros užklausas: GET /api/trains */
	@RequestMapping(method = RequestMethod.GET)
	public List<Train> getUsers() {
		return tdao.getTrains(); // skaitome per DAO
	}
	
	/* Sukurs traukini ir grąžins atsakymą su HTTP statusu 201 */
	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createTrain(@RequestBody final CreateTrainCommand cmd) {
		int size = tdao.getTrains().size();
		System.out.println(cmd);
		Train train = new Train();
		train.setTrainNumber(cmd.getTrainNumber());
		train.setManufacturer(cmd.getManufacturer());
		train.setYearManufacture(cmd.getYearManufacture());
		train.setArrivalCity(cmd.getArrivalCity());
		train.setDepartureCity(cmd.getDepartureCity());
		tdao.createTrain(train);
		
		if(tdao.getTrains().size() > size)
			System.out.println("New train: " + cmd.getTrainNumber() + " is created.");
	}
	
	/* Apdoros užklausas: DELETE /api/trains/<numeris> */
	@RequestMapping(path = "/{username}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteUser( @PathVariable final Integer number ) {
		int size = tdao.getTrains().size();
		System.out.println("Deleting train: " + number);
		tdao.deleteTrain(number);
		
		if(tdao.getTrains().size() < size)
			System.out.println("Train number " + number + " is deleted.");
	}
}
