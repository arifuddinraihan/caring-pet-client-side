import { cookies } from "next/headers";
import AllPetsTable from "./components/AllPetsTable";
import Link from "next/link";
import { redirect } from "next/navigation";

const PetsManagementPage = async () => {
  const myAdoptions = await fetch(`${process.env.LOCAL_URL}/pets`, {
    headers: {
      AUTHORIZATION: cookies().get("token")?.value || "",
    },
  });

  const { data: allPetsData } = await myAdoptions.json();

  if (!allPetsData) {
    return redirect("/login");
  }

  return (
    <section className="flex flex-col mx-auto max-w-screen-xl gap-10 pb-4 px-4 sm:px-8 my-auto">
      <div className="text-center space-y-4">
        <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
          Welcome to
          <span className="text-indigo-600 text-center">
            {" "}
            Pets Management Page
          </span>
        </h1>
      </div>
      <div className="hidden md:block min-w-full">
        {allPetsData.length > 0 ? (
          <AllPetsTable allPetsData={allPetsData} />
        ) : (
          <p className="text-gray-500 text-center">
            You do not have any pet listing yet.
            <br />
            Adopt a pet now
            <span className="text-indigo-600">
              {" "}
              <Link href="/pets">Click here</Link>{" "}
            </span>{" "}
          </p>
        )}
      </div>
    </section>
  );
};

export default PetsManagementPage;
