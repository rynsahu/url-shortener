import { supabaseQuery } from "@/lib/supabase"
import { AuthCredentials } from "./types";
import { setUserLoggedIn } from "@/lib/utils";

export const signUpUser = async ({ email, password }: { email: string; password: string; }) => {
  return await supabaseQuery(query => query.auth.signUp({
    email,
    password,
  }));
}

export const loginUser = async ({ email, password }: AuthCredentials) => {
  const response = await supabaseQuery(query => query.auth.signInWithPassword({
    email: email,
    password: password,
  }));

  if (response.success) setUserLoggedIn(true);

  return response;
}

export const getLoggedInUser = async () => {
  const { data } = await supabaseQuery(query => query.auth.getUser());

  return data?.user ?? null;
}
