package it.akademija;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

import it.akademija.Products;

/*
import net.sf.log4jdbc.sql.jdbcapi.DataSourceSpy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;

import javax.sql.DataSource;
*/

@Configuration
@ImportResource({"classpath*:application-context.xml"})
@ComponentScan("it.akademija")
public class AppConfig {
	
	@Bean
	public Products prod() {
		
		Products product1 = new Products();
		product1.setTitle("CORSAIR ONE a200 Compact Gaming PC");
		product1.setImageUrl("https://m.media-amazon.com/images/I/51n8ojvVX8L._AC_SL1500_.jpg");
		product1.setDescription("Experience uncompromising performance with the CORSAIR ONE a200 Compact Gaming PC, powered by an AMD Ryzen™ 5000 Series CPU, NVIDIA® GeForce RTX™ 30 Series graphics, and award-winning CORSAIR components.");
		product1.setPrice("3800");
		product1.setQuantity("1");
		
		return product1;
	}
	
	@Bean
	public Products product2() {
		
		Products product2 = new Products();
		product2.setTitle("Alienware Aurora R12 Gaming Desktop");
		product2.setImageUrl("https://picfit.topocentras.lt/xcdn-cgi/image/fit=contain,format=auto,quality=80/media/catalog/product/1/1/111_351360_1607328715.jpg");
		product2.setDescription("Powerhouse desktop with 11th Gen Intel® Core™ processors in a chassis designed for high-performance gaming and tool-less upgradability features.");
		product2.setPrice("1800");
		product2.setQuantity("1");
		
		return product2;
	}
}
