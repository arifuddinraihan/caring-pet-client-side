"use server";

import { cookies } from "next/headers";

export async function updateUserPassword(pre: FormData, formData: FormData) {
  try {
    const newFormData = {
      ...Object?.fromEntries(formData),
      currentPassword: Object?.fromEntries(formData).currentPassword,
      newPassword: Object?.fromEntries(formData).newPassword,
    };

    const formattedData = JSON.stringify(newFormData);

    const token = cookies().get("token")?.value;
    const headers = new Headers();
    headers.append("Authorization", token!);
    headers.append("Content-Type", "application/json");

    const res = await fetch(
      `${process.env.LOCAL_URL}/profile/change-password`,
      {
        method: "PUT",
        headers: headers,
        body: formattedData,
      }
    );

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateUserProfile(pre: FormData, formData: FormData) {
  try {
    const newFormData = {
      ...Object?.fromEntries(formData),
      name: Object?.fromEntries(formData).name,
      email: Object?.fromEntries(formData).email,
      profilePhoto: Object?.fromEntries(formData).profilePhoto,
    };

    const formattedData = JSON.stringify(newFormData);

    // console.log(formattedData);

    const token = cookies().get("token")?.value;
    const headers = new Headers();
    headers.append("Authorization", token!);
    headers.append("Content-Type", "application/json");

    const res = await fetch(
      `${process.env.LOCAL_URL}/profile/update-my-profile`,
      {
        method: "PUT",
        headers: headers,
        body: formattedData,
      }
    );

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
