package com.example.demo.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Employee;
import com.example.demo.services.EmployeeServices;

@RestController
public class Controller {
	
	@Autowired
	private EmployeeServices employeeServices;
	
	@GetMapping("/home")
	public String home() {
		return "this is home page";
	}
	
	@GetMapping("/home/employees")
	public List<Employee> getEmployees(){
		return this.employeeServices.getEmployees();
	}
	
	@GetMapping("/home/employees/{empId}")
	public Employee getEmployee(@PathVariable long empId){
		return this.employeeServices.getEmployee(empId);
	}
	
	@PostMapping("/home/employees")
	public Employee addEmployee(@RequestBody Employee emp){
		return this.employeeServices.addEmployee(emp);
	}
	
	@PutMapping("/home/employees")
	public Employee updateEmployee(@RequestBody Employee emp){
		return this.employeeServices.updateEmployee(emp);
	}
	
	@DeleteMapping("/home/employees/{empId}")
	public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long empId){
		try {
			this.employeeServices.deleteEmployee(empId);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
