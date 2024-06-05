import UserSidebar from "@/app/(withDashboardLayout)/components/Sidebar";
import React from "react";

const UserDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <UserSidebar>{children}</UserSidebar>
    </div>
  );
};

export default UserDashboardLayout;
