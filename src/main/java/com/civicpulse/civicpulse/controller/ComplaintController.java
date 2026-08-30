package com.civicpulse.civicpulse.controller;

import com.civicpulse.civicpulse.entity.Complaint;
import com.civicpulse.civicpulse.service.ComplaintService;
import com.civicpulse.civicpulse.service.ImageUploadService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/complaints")
@CrossOrigin(origins = "*")
public class ComplaintController {

    @Autowired
    private ComplaintService complaintService;

    @Autowired
    private ImageUploadService imageUploadService;

    // ================= REGISTER COMPLAINT =================

    @PostMapping("/register/{userId}")
    public Complaint registerComplaint(

            @PathVariable Long userId,

            @RequestParam("title") String title,

            @RequestParam("description") String description,

            @RequestParam("category") String category,

            @RequestParam("location") String location,

            @RequestParam(value = "image", required = false)
            MultipartFile image

    ) throws IOException {

        Complaint complaint = new Complaint();

        complaint.setTitle(title);
        complaint.setDescription(description);
        complaint.setCategory(category);
        complaint.setLocation(location);

        if (image != null && !image.isEmpty()) {

            String imageName = imageUploadService.uploadImage(image);

            complaint.setImage(imageName);

        }

        return complaintService.registerComplaint(complaint, userId);

    }

    // ================= USER COMPLAINTS =================

    @GetMapping("/user/{userId}")
    public List<Complaint> getComplaintsByUser(@PathVariable Long userId) {

        return complaintService.getComplaintsByUser(userId);

    }

    // ================= GET SINGLE COMPLAINT =================

    @GetMapping("/{id}")
    public Complaint getComplaintById(@PathVariable Long id) {

        return complaintService.getComplaintById(id);

    }

    // ================= ADMIN =================

    @GetMapping("/all")
    public List<Complaint> getAllComplaints() {

        return complaintService.getAllComplaints();

    }

    @PutMapping("/{complaintId}/{status}")
    public Complaint updateComplaintStatus(

            @PathVariable Long complaintId,

            @PathVariable String status

    ) {

        return complaintService.updateComplaintStatus(
                complaintId,
                status
        );

    }

    @DeleteMapping("/{complaintId}")
    public String deleteComplaint(

            @PathVariable Long complaintId

    ) {

        return complaintService.deleteComplaint(complaintId);

    }

    // ================= ADMIN DASHBOARD =================

    @GetMapping("/dashboard")
    public Map<String, Long> getAdminDashboardStats() {

        Map<String, Long> stats = new HashMap<>();

        stats.put(
                "totalComplaints",
                complaintService.getTotalComplaints()
        );

        stats.put(
                "pendingComplaints",
                complaintService.getPendingComplaints()
        );

        stats.put(
                "resolvedComplaints",
                complaintService.getResolvedComplaints()
        );

        stats.put(
                "totalUsers",
                complaintService.getTotalUsers()
        );

        return stats;

    }

    // ================= USER DASHBOARD =================

    @GetMapping("/dashboard/{userId}")
    public Map<String, Long> getUserDashboardStats(

            @PathVariable Long userId

    ) {

        return complaintService.getUserDashboardStats(userId);

    }

    @GetMapping("/recent/{userId}")
    public List<Complaint> getRecentComplaints(

            @PathVariable Long userId

    ) {

        return complaintService.getRecentComplaints(userId);

    }

    // ================= RATE COMPLAINT =================

    @PutMapping("/rate/{complaintId}")
    public Complaint rateComplaint(

            @PathVariable Long complaintId,

            @RequestParam Integer rating,

            @RequestParam String feedback

    ) {

        return complaintService.rateComplaint(
                complaintId,
                rating,
                feedback
        );

    }

    // ================= GET ALL RATED COMPLAINTS =================

    @GetMapping("/ratings")
    public List<Complaint> getRatedComplaints() {

        return complaintService.getRatedComplaints();

    }

}