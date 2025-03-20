export interface SignupActionState {
  success: boolean;
  message?: string;
  error?: { message: string } | null;
}

export const SIGNUP_FORM_FIELD = {
  EMAIL: 'email',
  PASSWORD: 'password',
} as const;
