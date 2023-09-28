import { useState } from "react";
import { useEffect } from "react";

export default async function FetchMeData() {
  const token = sessionStorage.getItem("token");
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/2306-ftb-et-web-am/users/me`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result);
    const userData = result;
    return userData;
  } catch (err) {
    console.error(err);
  }
}
