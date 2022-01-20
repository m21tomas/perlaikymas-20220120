package it.akademija.dao;

import java.util.Collections;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import org.springframework.stereotype.Repository;

import it.akademija.model.Train;

@Repository
public class InMemoryTrainDAO implements trainDAO {
	private final List<Train> trains = new CopyOnWriteArrayList<>();
	@Override
	public List<Train> getTrains() {
		return Collections.unmodifiableList(trains);
	}

	@Override
	public void createTrain(Train train) {
		trains.add(train);
	}

	@Override
	public void deleteTrain(Integer number) {
		for(Train train:trains) {
			if(number == train.getTrainNumber()) {
				trains.remove(train);
				break;
			}
		}

	}

}
