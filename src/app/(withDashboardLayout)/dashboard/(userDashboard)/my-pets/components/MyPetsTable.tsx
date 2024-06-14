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
  APPROVED: "success",
  REJECTED: "danger",
  PENDING: "warning",
};

const columns = [
  { name: "NAME", uid: "name" },
  { name: "BREED", uid: "breed" },
  { name: "Medical", uid: "medicalHistory" },
  { name: "STATUS", uid: "status" },
];

export default function MyPetsTable({ userAdoptionsData }: any) {
  const adoptionPetList = userAdoptionsData.map((userPet: any) => {
    const { pet, status } = userPet;
    return { ...pet, status };
  });

  const renderCell = React.useCallback((pet: any, columnKey: React.Key) => {
    const cellValue = pet[columnKey as any];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{
              radius: "lg",
              src: pet.petProfilePhoto,
            }}
            description={pet.location}
            name={pet.name}
          >
            {pet.name}
          </User>
        );
      case "breed":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <div className="flex flex-row gap-1">
              <p className="text-bold text-sm capitalize text-default-400">
                {pet.species}
              </p>
              <p className="text-bold text-sm capitalize text-default-400">
                age : {pet.age}
              </p>
            </div>
          </div>
        );
      case "medicalHistory":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            size="sm"
            variant="flat"
            color={statusColorMap[pet.status]}
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
      <TableBody items={adoptionPetList}>
        {(pet: any) => (
          <TableRow key={pet.id}>
            {(columnKey) => <TableCell>{renderCell(pet, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
