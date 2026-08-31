package com.civicpulse.civicpulse.repository;

import com.civicpulse.civicpulse.entity.Complaint;
import com.civicpulse.civicpulse.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComplaintRepository extends JpaRepository<Complaint, Long> {

    List<Complaint> findByUser(User user);

    List<Complaint> findByUser_Id(Long userId);

    long countByUser_Id(Long userId);

    long countByUser_IdAndStatus(Long userId, String status);

    List<Complaint> findTop5ByUser_IdOrderByIdDesc(Long userId);

    long countByStatus(String status);

    // New: Get all rated complaints
    List<Complaint> findByRatingNotNull();

}