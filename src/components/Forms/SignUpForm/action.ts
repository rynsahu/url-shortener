import { loginUser } from "@/services/auth";
import { SIGNUP_FORM_FIELD, SignupActionState } from "./type";

const signupAction = async(_: unknown, data: FormData): Promise<SignupActionState> => {
  const email = data.get(SIGNUP_FORM_FIELD.EMAIL) as string;
  const password = data.get(SIGNUP_FORM_FIELD.PASSWORD) as string;

  if (!email || !password) {
    return { success: false, message: 'Email and password are required', error: null };
  }

  const { success, error } = await loginUser({ email, password });

  if (!success) {
    return { success: false, message: 'Signup failed', error };
  }

  return { success: true, message: 'Signup successful', error: null };
}

export default signupAction;
