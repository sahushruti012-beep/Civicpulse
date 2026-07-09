import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import CitizenDashboard from "../pages/CitizenDashboard/CitizenDashboard";
import ReportIssue from "../pages/ReportIssue/ReportIssue";
import MyComplaints from "../pages/MyComplaints/MyComplaints";
import Profile from "../pages/Profile/Profile";

import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import AdminComplaints from "../pages/AdminComplaints/AdminComplaints";
import AdminUsers from "../pages/AdminUsers/AdminUsers";
import AdminReports from "../pages/AdminReports/AdminReports";
import AdminSettings from "../pages/AdminSettings/AdminSettings";

import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <Routes>

      {/* Public Pages */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<CitizenDashboard />} />
        <Route path="/report" element={<ReportIssue />} />
        <Route path="/my-complaints" element={<MyComplaints />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* Admin Pages */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="complaints" element={<AdminComplaints />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;