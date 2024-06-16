import React from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

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

const HomePagePetCard = ({ pet }: any) => {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        alt={`${pet.name} ${pet.species}`}
        className="object-cover"
        // height={200}
        src={pet.petProfilePhoto}
        // width={300}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <h3 className="text-md text-black">{`${pet.name}
        ${pet.breed}`}</h3>
        <Link
          href={`/pets/${pet.id}`}
          // href="/pets"
          className="text-tiny text-white bg-black/20 inline-block py-2 px-4 rounded-xl shadow-md hover:shadow-none"
        >
          Details
        </Link>
        {/* <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          Details
        </Button> */}
      </CardFooter>
    </Card>
  );
};

export default HomePagePetCard;
