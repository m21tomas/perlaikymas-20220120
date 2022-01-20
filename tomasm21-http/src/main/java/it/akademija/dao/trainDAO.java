package it.akademija.dao;

import java.util.List;

import it.akademija.model.Train;

public interface trainDAO {
	List<Train> getTrains();
	void createTrain(Train train);
	void deleteTrain(Integer number);
}
