import Sidebar from "@/app/(withDashboardLayout)/components/Sidebar";
import React from "react";

const UserDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar>{children}</Sidebar>
    </div>
  );
};

export default UserDashboardLayout;
