"use server";

import { cookies } from "next/headers";

export const login = async (username: string, password: string) => {
  const response = await fetch("https://api.origamid.online/conta/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (!response.ok) {
    return Response.json({});
  }
  const data = await response.json();

  console.log(response);

  configureCookie(response);
  return data.token;
};

const configureCookie = async (response: Response) => {
  if (!response.ok) {
    return Response.json({});
  }
  const data = await response.json();

  const cookiesParams = {
    httpOnly: true,
    secure: true,
  };

  cookies().set("token", data.token, cookiesParams);

  console.log("token", cookies().get("token"));

  return cookies().get("token");
};

export const getCookie = (key: string) => {
  return cookies().get(key);
};
