import type { Metadata } from "next";
import React from "react";
import UserDashboardLayout from "./layout/UserLayout";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "User dashboard to CARING PETS site. To manage the user profile, personal pet collections and password update.",
};

const UserDashboardServerLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <UserDashboardLayout>{children}</UserDashboardLayout>
    </div>
  );
};

export default UserDashboardServerLayout;
