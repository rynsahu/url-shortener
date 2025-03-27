import { SHORT_URL_HOST } from "@/constants/navigation"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const generateHashId = (length = 7): string => {
  const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let id = "";
  const randomValues = new Uint8Array(length);

  crypto.getRandomValues(randomValues);

  randomValues.forEach((value) => {
    id += CHARSET[value % CHARSET.length];
  });

  return id;
}

export const getShortUrl = (shortUrlId: string) => {
  return { 
    label: `${SHORT_URL_HOST}/${shortUrlId}`, 
    url: `https://${SHORT_URL_HOST}/${shortUrlId}`
  };
};

export const setUserLoggedIn = (isLoggedIn: boolean) => {
  localStorage.setItem('isUserLoggedIn', JSON.stringify(isLoggedIn));
}

export const isUserLoggedIn = () => {
  const isLoggedIn = localStorage.getItem('isUserLoggedIn');
  return isLoggedIn ? JSON.parse(isLoggedIn) : false;
}
