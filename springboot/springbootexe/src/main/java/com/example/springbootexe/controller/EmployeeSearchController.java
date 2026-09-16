package com.example.springbootexe.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeSearchController {

    @GetMapping("/employee/{id}")
    public String getEmployee(@PathVariable int id) {

        return "Employee ID : " + id + "\nEmployee Name : Shruti";

    }

}
