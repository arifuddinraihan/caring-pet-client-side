"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
} from "@nextui-org/react";

const statusColorMap: any = {
  ACTIVE: "success",
  DISABLED: "danger",
};

// {
//     id: '11bb12d3-7758-481b-b234-0616f2706088',
//     name: 'User 06',
//     email: 'user6@gmail.com',
//     role: 'USER',
//     profilePhoto: null,
//     activeStatus: 'ACTIVE',
//     createdAt: '2024-06-08T07:06:16.797Z',
//     updatedAt: '2024-06-08T07:06:16.797Z',
//     admin: null
//   }

const columns = [
  { name: "NAME", uid: "name" },
  { name: "Email", uid: "email" },
  { name: "ROLE", uid: "role" },
  { name: "STATUS", uid: "activeStatus" },
];

export default function AllUsersTable({ allUsersData }: any) {
  const renderCell = React.useCallback((user: any, columnKey: React.Key) => {
    const cellValue = user[columnKey as any];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{
              radius: "lg",
              src: user.petProfilePhoto,
            }}
            name={user.name}
          >
            {user.name}
          </User>
        );
      case "email":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      case "activeStatus":
        return (
          <Chip
            className="capitalize"
            size="sm"
            variant="flat"
            color={statusColorMap[user.activeStatus]}
          >
            {cellValue}
          </Chip>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={allUsersData}>
        {(pet: any) => (
          <TableRow key={pet.id}>
            {(columnKey) => <TableCell>{renderCell(pet, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
