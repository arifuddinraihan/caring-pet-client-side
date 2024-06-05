import React from "react";
import AdminDashboardLayout from "./layout/AdminLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description:
    "Admin dashboard to CARING PETS site. To manage the users and pets list.",
};

const AdminDashboardServerLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <AdminDashboardLayout>{children}</AdminDashboardLayout>
    </div>
  );
};

export default AdminDashboardServerLayout;
