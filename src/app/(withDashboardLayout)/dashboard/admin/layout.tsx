import React from "react";
import AdminDashboardLayout from "./layout/AdminLayout";

const GlobalDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminDashboardLayout>{children}</AdminDashboardLayout>
    </div>
  );
};

export default GlobalDashboardLayout;
