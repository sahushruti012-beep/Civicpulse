package com.example.springbootexe.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {

    @GetMapping("/student")
    public String student() {

        return "Name : Shruti\nCourse : AIML\nCollege : HIT";

    }

}