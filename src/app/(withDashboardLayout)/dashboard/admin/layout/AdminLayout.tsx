import AdminSidebar from "@/app/(withDashboardLayout)/components/adminSidebar";
import React from "react";

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminSidebar>{children}</AdminSidebar>
    </div>
  );
};

export default AdminDashboardLayout;
