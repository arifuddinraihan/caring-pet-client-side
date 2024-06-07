"use Server";

export const registerUser = async (pre: FormData, formData: FormData) => {
  // ------------- MUST ADD THE BACKEND URL FOR REGISTER USER ------------- //
  try {
    const formattedData = JSON.stringify(Object?.fromEntries(formData));
    const severUrl = process.env.LOCAL_URL
    console.log(severUrl)
    const res = await fetch(`${process.env.LOCAL_URL}/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: formattedData,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

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
