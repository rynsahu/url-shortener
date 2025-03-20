import { supabaseQuery } from "@/lib/supabase"
import { CreateShortUrl } from "./types";

export const getUrls = async () => {
  return await supabaseQuery(query => query.from('url').select('*').order('created_at', { ascending: false }));
}

export const createShortUrl = async ({ title, longUrl, shortUrlId }: CreateShortUrl) => {
  return await supabaseQuery(query => query.from('url').insert([
    { 'title': title, 'long_url': longUrl, 'short_url_id': shortUrlId }
  ]));
}