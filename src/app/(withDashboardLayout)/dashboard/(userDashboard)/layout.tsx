import React from "react";
import UserDashboardLayout from "./layout/UserLayout";

const UserDashboardServerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <UserDashboardLayout>{children}</UserDashboardLayout>
    </div>
  );
};

export default UserDashboardServerLayout;
