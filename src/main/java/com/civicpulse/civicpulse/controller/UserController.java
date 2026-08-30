package com.civicpulse.civicpulse.controller;

import com.civicpulse.civicpulse.dto.LoginResponse;
import com.civicpulse.civicpulse.entity.User;
import com.civicpulse.civicpulse.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    // ================= REGISTER API =================

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {

        return userService.registerUser(user);
    }

    // ================= LOGIN API =================

    @PostMapping("/login")
    public LoginResponse loginUser(@RequestBody User user) {

        User loggedInUser =
                userService.loginUser(
                        user.getEmail(),
                        user.getPassword()
                );

        if (loggedInUser != null) {

            return new LoginResponse(
                    loggedInUser.getId(),
                    loggedInUser.getFullName(),
                    loggedInUser.getEmail(),
                    loggedInUser.getRole(),
                    "Login Successful"
            );
        }

        return new LoginResponse(
                null,
                null,
                null,
                null,
                "Invalid Email or Password"
        );
    }

    // ================= GET USER BY ID =================

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {

        return userService.getUserById(id);
    }

    // ================= GET ALL USERS =================

    @GetMapping("/all")
    public List<User> getAllUsers() {

        return userService.getAllUsers();
    }

    // ================= DELETE USER =================

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id) {

        return userService.deleteUser(id);
    }

    // ================= UPDATE PROFILE =================

    @PutMapping("/update/{id}")
    public User updateProfile(
            @PathVariable Long id,
            @RequestBody User user) {

        return userService.updateProfile(id, user);
    }

    // ================= FORGOT PASSWORD =================

    @PutMapping("/forgot-password")
    public String forgotPassword(
            @RequestParam String email,
            @RequestParam String phone,
            @RequestParam String newPassword) {

        return userService.resetPassword(
                email,
                phone,
                newPassword
        );
    }
}