import { supabaseQuery } from "@/lib/supabase"
import { CreateShortUrl } from "./types";

export const getUrls = async () => {
  const { data } = await supabaseQuery(query => query.from('url').select('*'));

  return data;
}

export const createShortUrl = async ({ title, longUrl, shortUrlId }: CreateShortUrl) => {
  return await supabaseQuery(query => query.from('url').insert([
    { 'title': title, 'long_url': longUrl, 'short_url_id': shortUrlId }
  ]));
}