import { Routes, Route } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import AdminLayout from "../Layouts/AdminLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";

import CitizenDashboard from "../pages/CitizenDashboard/CitizenDashboard";
import ReportIssue from "../pages/ReportIssue/ReportIssue";
import MyComplaints from "../pages/MyComplaints/MyComplaints";
import Profile from "../pages/Profile/Profile";
import TrackComplaint from "../pages/TrackComplaint/TrackComplaint";

import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import AdminComplaints from "../pages/AdminComplaints/AdminComplaints";
import AdminUsers from "../pages/AdminUsers/AdminUsers";
import AdminReports from "../pages/AdminReports/AdminReports";
import AdminSettings from "../pages/AdminSettings/AdminSettings";

import NotFound from "../pages/NotFound/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<CitizenDashboard />} />
        <Route path="/citizen-dashboard" element={<CitizenDashboard />} />
        <Route path="/report" element={<ReportIssue />} />
        <Route path="/my-complaints" element={<MyComplaints />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/track/:id" element={<TrackComplaint />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="complaints" element={<AdminComplaints />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
