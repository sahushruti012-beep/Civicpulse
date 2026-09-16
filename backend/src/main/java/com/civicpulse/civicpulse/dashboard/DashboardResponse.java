package com.civicpulse.civicpulse.dashboard;

public class DashboardResponse {

    private long totalUsers;
    private long totalComplaints;
    private long pendingComplaints;
    private long resolvedComplaints;

    public DashboardResponse() {
    }

    public DashboardResponse(long totalUsers,
                             long totalComplaints,
                             long pendingComplaints,
                             long resolvedComplaints) {
        this.totalUsers = totalUsers;
        this.totalComplaints = totalComplaints;
        this.pendingComplaints = pendingComplaints;
        this.resolvedComplaints = resolvedComplaints;
    }

    public long getTotalUsers() {
        return totalUsers;
    }

    public void setTotalUsers(long totalUsers) {
        this.totalUsers = totalUsers;
    }

    public long getTotalComplaints() {
        return totalComplaints;
    }

    public void setTotalComplaints(long totalComplaints) {
        this.totalComplaints = totalComplaints;
    }

    public long getPendingComplaints() {
        return pendingComplaints;
    }

    public void setPendingComplaints(long pendingComplaints) {
        this.pendingComplaints = pendingComplaints;
    }

    public long getResolvedComplaints() {
        return resolvedComplaints;
    }

    public void setResolvedComplaints(long resolvedComplaints) {
        this.resolvedComplaints = resolvedComplaints;
    }
}
