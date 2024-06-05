import React from "react";
import AdminDashboardLayout from "./layout/AdminLayout";

const AdminDashboardServerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminDashboardLayout>{children}</AdminDashboardLayout>
    </div>
  );
};

export default AdminDashboardServerLayout;
