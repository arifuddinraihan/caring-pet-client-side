import { cookies } from "next/headers";
import MyPetsTable from "./components/MyPetsTable";
import Link from "next/link";
import { redirect } from "next/navigation";

const MyPetsPage = async () => {
  const myProfile = await fetch(`${process.env.LOCAL_URL}/profile/me`, {
    headers: {
      AUTHORIZATION: cookies().get("token")?.value || "",
    },
  });

  const { data: user } = await myProfile.json();

  if (!user) {
    redirect("/login");
  }

  const { id } = user;

  const myAdoptions = await fetch(
    `${process.env.LOCAL_URL}/adoption-requests/${id}`,
    {
      headers: {
        AUTHORIZATION: cookies().get("token")?.value || "",
      },
    }
  );

  const { data: userAdoptionsData } = await myAdoptions.json();

  // console.log(userAdoptionsData);

  return (
    <section className="flex flex-col gap-10 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8 my-auto">
      <div className="text-center space-y-4">
        <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
          Welcome to
          <span className="text-indigo-600"> Your Pets Listing</span>
        </h1>
      </div>
      <div className="hidden md:block">
        {id && userAdoptionsData.length > 0 ? (
          <MyPetsTable userAdoptionsData={userAdoptionsData} />
        ) : (
          <p>
            Your pet listing is empty visit
            <Link
              href="/pets"
              className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
            >
              pets page
            </Link>{" "}
            to list your new pet.
          </p>
        )}
      </div>
    </section>
  );
};

export default MyPetsPage;
