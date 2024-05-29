"use Server";

export const loginUser = async (data: any) => {
  // MUST ADD THE BACKEND URL FOR LOGIN USER
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
