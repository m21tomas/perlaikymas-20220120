package it.akademija.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import it.akademija.dao.UserDAO;
import it.akademija.model.CreateUserCommand;
import it.akademija.model.User;

@RestController
@RequestMapping(value = "/api/users")
public class UserController {
	private final UserDAO userDao;
	
	@Autowired
	public UserController(UserDAO userDao) {
		super();
		this.userDao = userDao;
	}

	/* Apdoros užklausas: GET /api/users */
	@RequestMapping(method = RequestMethod.GET)
	public List<User> getUsers() {
		return userDao.getUsers(); // skaitome per DAO
	}
	
	/* Sukurs vartotoją ir grąžins atsakymą su HTTP statusu 201 */
	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createUser(@RequestBody final CreateUserCommand cmd) {
		int size = userDao.getUsers().size();
		System.out.println(cmd);
		User user = new User();
		user.setFirstName(cmd.getFirstName());
		user.setLastName(cmd.getLastName());
		user.setUsername(cmd.getUsername());
		user.setEmail(cmd.getEmail());
		userDao.createUser(user);
		
		if(userDao.getUsers().size() > size)
			System.out.println("New user: " + cmd.getUsername() + " is created.");
	}
	
	/* Apdoros užklausas: DELETE /api/users/<vartotojas> */
	@RequestMapping(path = "/{username}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteUser( @PathVariable final String username ) {
		int size = userDao.getUsers().size();
		System.out.println("Deleting user: " + username);
		userDao.deleteUser(username);
		
		if(userDao.getUsers().size() < size)
			System.out.println(username + " is deleted.");
	}
}
