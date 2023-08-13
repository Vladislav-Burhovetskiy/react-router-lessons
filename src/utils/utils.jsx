import { redirect } from "react-router-dom";

export async function reqiureAuth() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    throw redirect("/login");
  }
}
