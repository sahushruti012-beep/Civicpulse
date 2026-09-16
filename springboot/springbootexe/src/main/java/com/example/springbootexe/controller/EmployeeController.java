package com.example.springbootexe.controller;

import com.example.springbootexe.model.Employee;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {

    @GetMapping("/employee")
    public Employee getEmployee() {

        return new Employee(
                101,
                "Shruti",
                50000
        );

    }

}