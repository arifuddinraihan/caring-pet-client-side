"use Server";

export const loginUser = async (pre: FormData, formData: FormData) => {
  // MUST ADD THE BACKEND URL FOR LOGIN USER
  const formattedData = JSON.stringify(Object?.fromEntries(formData));
  const res = await fetch(`${process.env.BACKEND_URL}/login`, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "content-type": "application/json",
    },
    body: formattedData,
  });

  const userInfo = await res.json();

  return userInfo;
};
