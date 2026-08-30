package com.civicpulse.civicpulse.controller;

import com.civicpulse.civicpulse.entity.Complaint;
import com.civicpulse.civicpulse.service.ComplaintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
public class AdminController {

    @Autowired
    private ComplaintService complaintService;

    // Get all complaints
    @GetMapping("/complaints")
    public List<Complaint> getAllComplaints() {
        return complaintService.getAllComplaints();
    }

    // Update complaint status
    @PutMapping("/complaints/{id}")
    public Complaint updateComplaintStatus(
            @PathVariable Long id,
            @RequestParam String status) {

        return complaintService.updateComplaintStatus(id, status);
    }

    // Delete complaint
    @DeleteMapping("/complaints/{id}")
    public String deleteComplaint(@PathVariable Long id) {
        return complaintService.deleteComplaint(id);
    }

}
