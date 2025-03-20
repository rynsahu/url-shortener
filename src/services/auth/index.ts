import supabase, { supabaseQuery } from "@/lib/supabase"
import { AuthCredentials } from "./types";

export const signUpUser = async () => {
  const data = supabase.auth.signInWithOtp({
    email: 'rynsahu@gmail.com',
  })

  return data;
}

export const loginUser = async ({ email, password }: AuthCredentials) => {
  return supabaseQuery(query => query.auth.signInWithPassword({
    email: email,
    password: password,
  }));
}
