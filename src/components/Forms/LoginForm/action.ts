import { loginUser } from "@/services/auth";
import { LOGIN_FORM_FIELD, LoginActionState } from "./type";

const LoginAction = async(_: unknown, data: FormData): Promise<LoginActionState> => {
  const email = data.get(LOGIN_FORM_FIELD.EMAIL) as string;
  const password = data.get(LOGIN_FORM_FIELD.PASSWORD) as string;

  console.log('Attempting login with:', { email, password });

  if (!email || !password) {
    return { success: false, message: 'Email and password are required', error: null };
  }

  const { success, error } = await loginUser({ email, password });

  if (!success) {
    return { success: false, message: '', error };
  }

  return { success: true, message: 'Login successful', error: null };
}

export default LoginAction;
