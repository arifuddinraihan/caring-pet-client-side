import { Button } from "@nextui-org/react";
import { cookies } from "next/headers";
import Image from "next/image";

const MyProfileInformation = async () => {
  const res = await fetch(`${process.env.LOCAL_URL}/profile/me`, {
    headers: {
      AUTHORIZATION: cookies().get("token")?.value || "",
    },
  });

  const { data: user } = await res.json();

  const { name, profilePhoto, email } = user;

  //   console.log(user);

  return (
    <div className="my-12 flex flex-col gap-2 justify-items-center">
      <div className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
        <Image
          src={profilePhoto ? profilePhoto : ""}
          alt={name ? name : "alt text"}
          className="w-full h-48 rounded-t-md"
          width={100}
          height={48}
        />
        <div className="pt-3 ml-4 mr-4 mb-4">
          <h3 className="text-xl text-gray-900">{name ? name : ""}</h3>
          <p className="text-gray-400 text-sm mt-1">{email ? email : ""}</p>
        </div>
        <Button className="mb-4" type="button" size="md">
          Edit Profile
        </Button>
      </div>
    </div>
  );
};

export default MyProfileInformation;
