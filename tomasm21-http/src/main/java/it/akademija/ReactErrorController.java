package it.akademija;

//import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;

public class ReactErrorController /*implements ErrorController */{
	
	@RequestMapping("/error")
	public String index() {
	return "index.html"; // paprastai kol be security
	}

//	@Override
//	public String getErrorPath() {
//		
//		return "index.html";
//	}
	
	
}
