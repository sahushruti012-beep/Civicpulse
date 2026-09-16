package com.example.springbootexe.controller;

import com.example.springbootexe.model.Student;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentRegistrationController {

    @PostMapping("/student")
    public Student registerStudent(@RequestBody Student student) {

        return student;

    }

}
