package com.civicpulse.civicpulse.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Welcome to CivicPulse Backend!";
    }

    @GetMapping("/test")
    public String test() {
        return "Backend is working successfully!";
    }
}
