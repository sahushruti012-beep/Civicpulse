package com.civicpulse.civicpulse.service;

import com.civicpulse.civicpulse.entity.Complaint;
import com.civicpulse.civicpulse.entity.User;
import com.civicpulse.civicpulse.repository.ComplaintRepository;
import com.civicpulse.civicpulse.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ComplaintService {

    @Autowired
    private ComplaintRepository complaintRepository;

    @Autowired
    private UserRepository userRepository;

    // ================= REGISTER COMPLAINT =================

    public Complaint registerComplaint(Complaint complaint, Long userId) {

        User user = userRepository.findById(userId).orElse(null);

        if (user == null) {
            return null;
        }

        complaint.setUser(user);
        complaint.setStatus("Pending");

        return complaintRepository.save(complaint);
    }

    // ================= USER COMPLAINTS =================

    public List<Complaint> getComplaintsByUser(Long userId) {

        return complaintRepository.findByUser_Id(userId);

    }

    // ================= GET SINGLE COMPLAINT =================

    public Complaint getComplaintById(Long id) {

        return complaintRepository.findById(id).orElse(null);

    }

    // ================= ADMIN =================

    public List<Complaint> getAllComplaints() {

        return complaintRepository.findAll();

    }

    public Complaint updateComplaintStatus(Long complaintId, String status) {

        Complaint complaint = complaintRepository.findById(complaintId).orElse(null);

        if (complaint == null) {
            return null;
        }

        complaint.setStatus(status);

        return complaintRepository.save(complaint);

    }

    public String deleteComplaint(Long complaintId) {

        if (!complaintRepository.existsById(complaintId)) {

            return "Complaint Not Found";

        }

        complaintRepository.deleteById(complaintId);

        return "Complaint Deleted Successfully";

    }

    // ================= ADMIN DASHBOARD =================

    public long getTotalComplaints() {

        return complaintRepository.count();

    }

    public long getPendingComplaints() {

        return complaintRepository.countByStatus("Pending");

    }

    public long getResolvedComplaints() {

        return complaintRepository.countByStatus("Resolved");

    }

    public long getTotalUsers() {

        return userRepository.count();

    }

    // ================= USER DASHBOARD =================

    public Map<String, Long> getUserDashboardStats(Long userId) {

        Map<String, Long> stats = new HashMap<>();

        long total = complaintRepository.countByUser_Id(userId);

        long pending = complaintRepository.countByUser_IdAndStatus(
                userId,
                "Pending"
        );

        long inProgress = complaintRepository.countByUser_IdAndStatus(
                userId,
                "In Progress"
        );

        long resolved = complaintRepository.countByUser_IdAndStatus(
                userId,
                "Resolved"
        );

        stats.put("total", total);
        stats.put("pending", pending);
        stats.put("inProgress", inProgress);
        stats.put("resolved", resolved);

        return stats;

    }

    // ================= RECENT COMPLAINTS =================

    public List<Complaint> getRecentComplaints(Long userId) {

        return complaintRepository.findTop5ByUser_IdOrderByIdDesc(userId);

    }

    // ================= RATE COMPLAINT =================

    public Complaint rateComplaint(Long complaintId,
                                   Integer rating,
                                   String feedback) {

        Complaint complaint =
                complaintRepository.findById(complaintId).orElse(null);

        if (complaint == null) {
            return null;
        }

        // Allow rating only if complaint is resolved
        if (!complaint.getStatus().equalsIgnoreCase("Resolved")) {
            return null;
        }

        complaint.setRating(rating);
        complaint.setFeedback(feedback);

        return complaintRepository.save(complaint);

    }

    // ================= GET ALL RATED COMPLAINTS =================

    public List<Complaint> getRatedComplaints() {

        return complaintRepository.findByRatingNotNull();

    }

}