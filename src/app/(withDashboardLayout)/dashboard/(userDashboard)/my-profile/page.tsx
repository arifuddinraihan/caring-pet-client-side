import { cookies } from "next/headers";
import MyProfileInformation from "./components/MyProfileInformation";

const MyProfilePage = async () => {
  const res = await fetch(`${process.env.LOCAL_URL}/profile/me`, {
    headers: {
      AUTHORIZATION: cookies().get("token")?.value || "",
    },
  });

  const { data: user } = await res.json();

  const { name, profilePhoto, email } = user;

  return (
    <section className="flex flex-col gap-10 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8 my-auto">
      <div className="text-center space-y-4">
        <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
          Welcome to
          <span className="text-indigo-600"> Your Profile</span>
        </h1>
        <MyProfileInformation
          name={name}
          profilePhoto={profilePhoto}
          email={email}
        />
      </div>
    </section>
  );
};

export default MyProfilePage;
