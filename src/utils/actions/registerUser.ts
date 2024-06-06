"use Server";

export const registerUser = async (pre: FormData, formData: FormData) => {
  // ------------- MUST ADD THE BACKEND URL FOR REGISTER USER ------------- //
  try {
    const formattedData = JSON.stringify(Object?.fromEntries(formData));
    const res = await fetch(`${process.env.BACKEND_URL}/register`, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-type": "application/json",
      },
      body: formattedData,
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

// export async function signUpUser(pre: FormData, formData: FormData) {
//   try {
//     const formattedData = JSON.stringify(Object?.fromEntries(formData));
//     const res = await fetch(`${process.env.serverUrl}/auth/register`, {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: formattedData,
//     });
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }
