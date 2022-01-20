package it.akademija;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestServisas {
	@Autowired
	private List<Products> prod;
	
	@RequestMapping("/productsCollection")
	public List<Products> getProductsCollection() {
		System.out.println("In \"AppConfig\" are these bean products:");
		System.out.println(prod);
		return prod;
	}
}
