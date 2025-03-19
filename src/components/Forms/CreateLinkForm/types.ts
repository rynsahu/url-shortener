export interface CreateLinkActionState {
  success: boolean;
  message?: string;
  error?: { message: string } | null;
}

export const CREATE_LINK_FORM_FIELD = {
  DESTINATION: 'destination',
  TITLE: 'title',
  DOMAIN: 'domain',
  CUSTOM_BACK_HALF: 'customBackHalf',
} as const;
