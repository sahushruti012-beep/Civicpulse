package com.civicpulse.civicpulse.service;

import com.civicpulse.civicpulse.entity.User;
import com.civicpulse.civicpulse.repository.UserRepository;
import com.civicpulse.civicpulse.enums.UserRole;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    // ================= REGISTER USER =================

    public User registerUser(User user) {

        if (user.getRole() == null) {
            user.setRole(UserRole.USER);
        }

        return userRepository.save(user);
    }


    // ================= LOGIN USER =================

    public User loginUser(String email, String password) {

        User user = userRepository
                .findByEmail(email)
                .orElse(null);

        if (user != null &&
                user.getPassword() != null &&
                user.getPassword().equals(password)) {

            return user;
        }

        return null;
    }


    // ================= GET ALL USERS =================

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }


    // ================= GET USER BY ID =================

    public User getUserById(Long id) {

        return userRepository
                .findById(id)
                .orElse(null);
    }


    // ================= UPDATE PROFILE =================

    public User updateProfile(Long id, User updatedUser) {

        User user = userRepository
                .findById(id)
                .orElse(null);

        if (user == null) {
            return null;
        }

        if (updatedUser.getFullName() != null &&
                !updatedUser.getFullName().isBlank()) {

            user.setFullName(updatedUser.getFullName());
        }

        if (updatedUser.getPhone() != null) {
            user.setPhone(updatedUser.getPhone());
        }

        // Update password only when a new password
        // is actually provided.
        if (updatedUser.getPassword() != null &&
                !updatedUser.getPassword().isBlank()) {

            user.setPassword(updatedUser.getPassword());
        }

        return userRepository.save(user);
    }


    // ================= FORGOT PASSWORD =================

    public String resetPassword(
            String email,
            String phone,
            String newPassword
    ) {

        User user = userRepository
                .findByEmailAndPhone(email, phone)
                .orElse(null);

        if (user == null) {
            return "Invalid email or phone number";
        }

        if (newPassword == null ||
                newPassword.isBlank()) {

            return "Password cannot be empty";
        }

        user.setPassword(newPassword);

        userRepository.save(user);

        return "Password Reset Successfully";
    }


    // ================= DELETE USER =================

    public String deleteUser(Long id) {

        if (!userRepository.existsById(id)) {
            return "User Not Found";
        }

        userRepository.deleteById(id);

        return "User Deleted Successfully";
    }


    // ================= CHANGE PASSWORD =================

    public String changePassword(
            Long id,
            String currentPassword,
            String newPassword
    ) {

        User user = userRepository
                .findById(id)
                .orElse(null);

        if (user == null) {
            return "User not found";
        }

        if (currentPassword == null ||
                !currentPassword.equals(user.getPassword())) {

            return "Current password is incorrect";
        }

        if (newPassword == null ||
                newPassword.isBlank()) {

            return "New password cannot be empty";
        }

        user.setPassword(newPassword);

        userRepository.save(user);

        return "Password changed successfully";
    }
}