package it.akademija.model;

public final class CreateTrainCommand {
	private Integer trainNumber;
	private Integer yearManufacture;
	private String manufacturer;
	private String departureCity;
	private String arrivalCity;
	public Integer getTrainNumber() {
		return trainNumber;
	}
	public void setTrainNumber(Integer trainNumber) {
		this.trainNumber = trainNumber;
	}
	public Integer getYearManufacture() {
		return yearManufacture;
	}
	public void setYearManufacture(Integer yearManufacture) {
		this.yearManufacture = yearManufacture;
	}
	public String getManufacturer() {
		return manufacturer;
	}
	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}
	public String getDepartureCity() {
		return departureCity;
	}
	public void setDepartureCity(String departureCity) {
		this.departureCity = departureCity;
	}
	public String getArrivalCity() {
		return arrivalCity;
	}
	public void setArrivalCity(String arrivalCity) {
		this.arrivalCity = arrivalCity;
	}
	
	
}
