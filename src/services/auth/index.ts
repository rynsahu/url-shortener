import supabase from "@/lib/supabase"

export const signUpUser = async () => {
  const data = supabase.auth.signInWithOtp({
    email: 'rynsahu@gmail.com',
  })

  return data;
}