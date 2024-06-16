import { Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Metadata, ResolvingMetadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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

type TProps = {
  params: { id: string };
};

const PetDetailsPage = async ({ params }: TProps) => {
  const res = await fetch(`${process.env.LOCAL_URL}/pets/${params?.id}`, {
    headers: {
      AUTHORIZATION: cookies().get("token")?.value || "",
    },
    next: {
      tags: ["pet"],
    },
  });

  const data = await res.json();

  if (data && !data.success) {
    return redirect("/login");
  }

  //   console.log(data);

  return (
    <div>
      <Card key={data?.id} className="w-full ">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {" "}
            Species: {data?.species}
            Breed: {data?.breed}
          </p>
          {/* <h4 className="text-white font-extrabold text-2xl">{data?.name}</h4> */}
        </CardHeader>
        <Image
          removeWrapper
          alt={`${data?.breed}`}
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={data?.petProfilePhoto}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-white font-bold text-tiny">
              Location: {data?.location}
            </p>
            <p className="text-white text-tiny">
              Description: {data?.description}
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PetDetailsPage;

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;
  // fetch data
  const res = await fetch(`${process.env.LOCAL_URL}/pets/${params?.id}`, {
    headers: {
      AUTHORIZATION: cookies().get("token")?.value || "",
    },
    next: {
      tags: ["pet"],
    },
  });
  const { data } = await res.json();

  return {
    title: data?.species,
  };
}
