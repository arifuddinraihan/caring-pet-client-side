import { cookies } from "next/headers";
import Link from "next/link";
import AllUsersTable from "./components/AllUsersTable";

const UserManagementPage = async () => {
  const myAdoptions = await fetch(
    `${process.env.LOCAL_URL}/profile/all-users`,
    {
      headers: {
        AUTHORIZATION: cookies().get("token")?.value || "",
      },
    }
  );

  const { data: allUsersData } = await myAdoptions.json();

  // console.log(allUsersData);

  return (
    <section className="flex flex-col mx-auto max-w-screen-xl gap-10 pb-4 px-4 sm:px-8 my-auto">
      <div className="text-center space-y-4">
        <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
          Welcome to
          <span className="text-indigo-600 text-center">
            {" "}
            Users Management Page
          </span>
        </h1>
      </div>
      <div className="hidden md:block min-w-full">
        {allUsersData.length > 0 ? (
          <AllUsersTable allUsersData={allUsersData} />
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

export default UserManagementPage;
