import UserSidebar from "@/app/(withDashboardLayout)/components/Sidebar";
import React from "react";

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <UserSidebar>{children}</UserSidebar>
    </div>
  );
};

export default AdminDashboardLayout;
