package it.akademija.model;

public final class Train {
	private Integer trainNumber;
	private Integer yearManufacture;
	private String manufacturer;
	private String departureCity;
	private String arrivalCity;
	public Train() {}
	public Train(Integer trainNumber, Integer yearManufacture, String manufacturer, String departureCity,
			String arrivalCity) {
		super();
		this.trainNumber = trainNumber;
		this.yearManufacture = yearManufacture;
		this.manufacturer = manufacturer;
		this.departureCity = departureCity;
		this.arrivalCity = arrivalCity;
	}
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
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((arrivalCity == null) ? 0 : arrivalCity.hashCode());
		result = prime * result + ((departureCity == null) ? 0 : departureCity.hashCode());
		result = prime * result + ((manufacturer == null) ? 0 : manufacturer.hashCode());
		result = prime * result + ((trainNumber == null) ? 0 : trainNumber.hashCode());
		result = prime * result + ((yearManufacture == null) ? 0 : yearManufacture.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Train other = (Train) obj;
		if (arrivalCity == null) {
			if (other.arrivalCity != null)
				return false;
		} else if (!arrivalCity.equals(other.arrivalCity))
			return false;
		if (departureCity == null) {
			if (other.departureCity != null)
				return false;
		} else if (!departureCity.equals(other.departureCity))
			return false;
		if (manufacturer == null) {
			if (other.manufacturer != null)
				return false;
		} else if (!manufacturer.equals(other.manufacturer))
			return false;
		if (trainNumber == null) {
			if (other.trainNumber != null)
				return false;
		} else if (!trainNumber.equals(other.trainNumber))
			return false;
		if (yearManufacture == null) {
			if (other.yearManufacture != null)
				return false;
		} else if (!yearManufacture.equals(other.yearManufacture))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Train [trainNumber=" + trainNumber + ", yearManufacture=" + yearManufacture + ", manufacturer="
				+ manufacturer + ", departureCity=" + departureCity + ", arrivalCity=" + arrivalCity + "]";
	}
	
}
