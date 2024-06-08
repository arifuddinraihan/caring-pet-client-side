import React from "react";
import { User } from "@nextui-org/react";
import { cookies } from "next/headers";

type TUserInfo = {
  name: string;
  role: string;
  profilePhoto: string;
};

const WelcomeUserInfo = async () => {
  // console.log(`${process.env.LOCAL_URL}/profile/me`);
  const res = await fetch(`${process.env.LOCAL_URL}/profile/me`, {
    headers: {
      AUTHORIZATION: cookies().get("token")?.value || "",
    },
  });

  const { data: user } = await res.json();
  // console.log(user);

  const { name, role, profilePhoto } = user;
  return (
    <User
      name={name ? name : "Jane Doe"}
      description={role ? role : "User"}
      avatarProps={{
        src: `${
          profilePhoto
            ? profilePhoto
            : `https://plus.unsplash.com/premium_vector-1682269282372-6d888f3451f1?bg=FFFFFF&q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
        }`,
        style: {
          width: "120px",
          height: "120px",
        },
      }}
    />
  );
};

export default WelcomeUserInfo;
