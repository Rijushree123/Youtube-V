package com.example.demo.services;

import java.util.List;

import com.example.demo.entities.Employee;

public interface EmployeeServices {
	
	public List<Employee> getEmployees();

	public Employee getEmployee(long empId);
	
	public Employee addEmployee(Employee emp);
	
	public Employee updateEmployee(Employee emp);
	
	public void deleteEmployee(long empId);
}
