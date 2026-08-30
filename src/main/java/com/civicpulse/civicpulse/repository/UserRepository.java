package com.civicpulse.civicpulse.repository;

import com.civicpulse.civicpulse.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    Optional<User> findByEmailAndPhone(String email, String phone);

}
