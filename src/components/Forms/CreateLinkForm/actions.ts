import { createShortUrl } from "@/services/urlShortener";
import { CREATE_LINK_FORM_FIELD, CreateLinkActionState } from "./types";
import { generateHashId } from "@/lib/utils";

export const createLinkAction = async (_: unknown, queryData: FormData): Promise<CreateLinkActionState> => {
  const destination = queryData.get(CREATE_LINK_FORM_FIELD.DESTINATION) as string;
  const title = queryData.get(CREATE_LINK_FORM_FIELD.TITLE) as string;
  const customBackHalf = queryData.get(CREATE_LINK_FORM_FIELD.CUSTOM_BACK_HALF) as string; 

  if (!destination) {
    return { success: false, message: '*Destination is required', };
  }

  const { success, error } = await createShortUrl({ 
    title, 
    longUrl: destination, 
    shortUrlId: customBackHalf || generateHashId() 
  });
  
  if (!success) {
   return { success: false, error: { message: error?.message || 'An unknown error occurred' } };
  }

  return { success: true, error: null  };
}