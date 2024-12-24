package com.example.demo.services;

import java.util.*;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.EmployeeDao;
import com.example.demo.entities.Employee;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Service
public class EmployeeServicesImpl implements EmployeeServices {
	
	@Autowired
	EmployeeDao employeeDao;
	
	List<Employee> list;
	
	public EmployeeServicesImpl() {
		list = Arrays.asList(new Employee(1,"Saurabh", "Quality Engineer"), new Employee(2,"Subhash", "Software Engineer"), new Employee(3,"Yash", "Peak Developer"));
	}

	@Override
	public List<Employee> getEmployees() {
		return employeeDao.findAll();
	}

	@SuppressWarnings("deprecation")
	@Override
	public Employee getEmployee(long id) {
//		for(Employee emp: list) {
//			if(emp.getId()==id) {
//				return emp;
//			}
//		}
//		return null;
		return employeeDao.findById(id).get();
	}

	@Override
	public Employee addEmployee(Employee emp) {
//		list.add(emp);
		employeeDao.save(emp);
		return emp;
	}

	@Override
	public void deleteEmployee(long id) {
//		list = this.list.stream().filter(e->e.getId()!=id).collect(Collectors.toList());
		employeeDao.delete(employeeDao.getOne(id));
	}

	@Override
	public Employee updateEmployee(Employee emp) {
//		list.forEach(e->{
//			if(e.getId()==emp.getId()) {
//				e.setName(emp.getName());
//				e.setRole(emp.getRole());
//			}
//		});
//		return emp;
		employeeDao.save(emp);
		return emp;
	}
}
