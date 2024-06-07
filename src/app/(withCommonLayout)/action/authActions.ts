"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export async function loginUser(pre: any, formData: FormData) {
  try {
    const formattedData = JSON.stringify(Object?.fromEntries(formData));

    const severUrl = process.env.LOCAL_SERVER_URL;
    const res = await fetch(`${severUrl}/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: formattedData,
    });

    const data = await res.json();

    if (data.success) {
      cookies().set("token", data.data.token);
      return data;
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(pre: FormData, formData: FormData) {
  try {
    const formattedData = JSON.stringify(Object?.fromEntries(formData));
    const severUrl = process.env.LOCAL_SERVER_URL;
    const res = await fetch(`${severUrl}/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: formattedData,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export const userInfo = async () => {
  const token = cookies().get("token")?.value;
  let decodedData = null;
  if (token) {
    decodedData = (await jwtDecode(token)) as any;

    return {
      email: decodedData.email,
      role: decodedData.role,
      id: decodedData.id,
    };
  } else {
    return null;
  }
};

export const logOut = async () => {
  cookies().delete("token");
};

export const getCooke = async (cooke: string) => {
  return cookies().get(cooke)?.value;
};
