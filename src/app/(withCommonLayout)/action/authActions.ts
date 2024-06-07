"use server";

import { cookies } from "next/headers";

export async function loginUser(pre: FormData, formData: FormData) {
  try {
    const formattedData = JSON.stringify(Object?.fromEntries(formData));
    const severUrl = process.env.LOCAL_SERVER_URL;
    const res = await fetch(`${severUrl}/login`, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-type": "application/json",
      },
      body: formattedData,
    });
    const data = await res.json();
    // console.log(data);
    if (data.success) {
      // console.log(data.success);
      cookies().set("token", data.data.token);
      // cookies().set("refreshToken", data.data.refreshToken);
      return data;
    }

    // return {};
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


