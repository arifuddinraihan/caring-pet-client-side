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

// const statusColorMap: any = {
//   APPROVED: "success",
//   REJECTED: "danger",
//   PENDING: "warning",
// };

// {
//     id: '6a97d1bd-8dfe-4db1-8b81-bbd948ec4eda',
//     name: 'Luna',
//     petProfilePhoto:
//       'https://images.unsplash.com/photo-1606208427954-aa8319c4815e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     morePetPhoto: [],
//     species: 'Cat',
//     breed: 'Maine Coon',
//     age: 2,
//     size: 'Large',
//     location: 'Shelter PQR',
//     description:
//       'Luna is a gentle and affectionate Maine Coon. She loves being petted and lounging around.',
//     temperament: 'Affectionate Gentle',
//     medicalHistory: 'Spayed, up to date on vaccinations.',
//     adoptionRequirements:
//       'Luna would do well in a calm home where she can relax and be pampered.',
//     createdAt: '2024-06-08T02:12:43.000Z',
//     updatedAt: '2024-06-08T02:12:43.000Z'
//   }

const columns = [
  { name: "NAME", uid: "name" },
  { name: "BREED", uid: "breed" },
  { name: "LOCATION", uid: "location" },
  { name: "TEMPERAMENT", uid: "temperament" },
  { name: "MEDICAL", uid: "medicalHistory" },
  //   { name: "DESCRIPTION", uid: "description" },
  //   { name: "ADOPTION REQUIREMENTS", uid: "adoptionRequirements" },
];

export default function AllPetsTable({ allPetsData }: any) {
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
            description={pet.species}
            name={pet.name}
          >
            {pet.name}
          </User>
        );
      case "breed":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <div className="flex flex-col gap-1">
              <p className="text-bold text-sm capitalize text-default-400">
                Age : {pet.age}
              </p>
              <p className="text-bold text-sm capitalize text-default-400">
                Size : {pet.size}
              </p>
            </div>
          </div>
        );
      case "location":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      case "temperament":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      case "medicalHistory":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      //   case "description":
      //     return (
      //       <div className="flex flex-col">
      //         <p className="text-bold text-sm capitalize">{cellValue}</p>
      //       </div>
      //     );
      //   case "adoptionRequirements":
      //     return (
      //       <div className="flex flex-col">
      //         <p className="text-bold text-sm capitalize">{cellValue}</p>
      //       </div>
      //     );
      //   case "status":
      //     return (
      //       <Chip
      //         className="capitalize"
      //         size="sm"
      //         variant="flat"
      //         // color={statusColorMap[pet.status]}
      //       >
      //         {cellValue}
      //       </Chip>
      //     );
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
      <TableBody items={allPetsData}>
        {(pet: any) => (
          <TableRow key={pet.id}>
            {(columnKey) => <TableCell>{renderCell(pet, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
