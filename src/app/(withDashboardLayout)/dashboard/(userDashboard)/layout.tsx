import React from "react";
import UserDashboardLayout from "./layout/UserLayout";

const GlobalDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <UserDashboardLayout>{children}</UserDashboardLayout>
    </div>
  );
};

export default GlobalDashboardLayout;
