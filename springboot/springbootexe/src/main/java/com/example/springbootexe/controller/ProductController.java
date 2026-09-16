package com.example.springbootexe.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    @GetMapping("/total")
    public double calculateTotal(
            @RequestParam double price,
            @RequestParam int quantity) {

        return price * quantity;

    }
}
