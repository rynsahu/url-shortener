export interface LoginActionState {
  success: boolean;
  message?: string;
  error?: { message: string } | null;
}

export const LOGIN_FORM_FIELD = {
  EMAIL: 'email',
  PASSWORD: 'password',
} as const;
