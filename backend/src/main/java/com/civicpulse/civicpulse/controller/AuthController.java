package com.civicpulse.civicpulse.controller;

import com.civicpulse.civicpulse.dto.LoginRequest;
import com.civicpulse.civicpulse.entity.User;
import com.civicpulse.civicpulse.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174"
})
public class AuthController {

    @Autowired
    private UserService userService;

    // ================= LOGIN =================

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        if (request.getEmail() == null ||
                request.getEmail().isBlank()) {

            return ResponseEntity
                    .badRequest()
                    .body("Email is required");
        }

        if (request.getPassword() == null ||
                request.getPassword().isBlank()) {

            return ResponseEntity
                    .badRequest()
                    .body("Password is required");
        }

        User user = userService.loginUser(
                request.getEmail(),
                request.getPassword()
        );

        if (user == null) {
            return ResponseEntity
                    .badRequest()
                    .body("Invalid email or password");
        }

        return ResponseEntity.ok(user);
    }
}
