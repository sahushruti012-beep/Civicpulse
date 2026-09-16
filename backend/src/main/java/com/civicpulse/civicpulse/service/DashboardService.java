package com.civicpulse.civicpulse.service;

import com.civicpulse.civicpulse.dashboard.DashboardResponse;
import com.civicpulse.civicpulse.repository.ComplaintRepository;
import com.civicpulse.civicpulse.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ComplaintRepository complaintRepository;

    public DashboardResponse getDashboardData() {

        long totalUsers = userRepository.count();
        long totalComplaints = complaintRepository.count();
        long pendingComplaints = complaintRepository.countByStatus("Pending");
        long resolvedComplaints = complaintRepository.countByStatus("Resolved");

        return new DashboardResponse(
                totalUsers,
                totalComplaints,
                pendingComplaints,
                resolvedComplaints
        );
    }
}
