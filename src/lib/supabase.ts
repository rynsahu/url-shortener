/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { toast } from 'sonner';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function supabaseQuery<T>(
  queryFunction: (query: SupabaseClient) => any
): Promise<{ data: T | null; success: boolean; error: { code: string; message: string } }> {
  try {
    const { data, error } = await queryFunction(supabase);

    if (error) {
      toast.error(error.message);
      return { data: null, success: false, error };
    }

    return { data, success: true, error: { code: '', message: '', } };
  } catch (error: any) {
    toast.error('Something went wrong, please try again later.');
    return { data: null, success: false, error };
  }
}

export default supabase;
