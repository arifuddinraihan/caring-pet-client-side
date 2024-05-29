"use Server";

export const registerUser = async (data: any) => {
  // ------------- MUST ADD THE BACKEND URL FOR REGISTER USER ------------- //
  const res = await fetch(``, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  const userInfo = await res.json();

  return userInfo;
};
