package com.example.springbootexe.controller;

import com.example.springbootexe.model.Book;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookController {

    @GetMapping("/book")
    public Book getBook() {

        return new Book(
                1,
                "Java Programming",
                "James Gosling",
                599.0
        );

    }
}
