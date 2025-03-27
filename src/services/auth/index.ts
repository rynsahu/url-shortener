import { supabaseQuery } from "@/lib/supabase"
import { AuthCredentials } from "./types";

export const signUpUser = async ({ email, password }: { email: string; password: string; }) => {
  return supabaseQuery(query => query.auth.signUp({
    email,
    password,
  }));
}

export const loginUser = async ({ email, password }: AuthCredentials) => {
  return supabaseQuery(query => query.auth.signInWithPassword({
    email: email,
    password: password,
  }));
}
