import { SupabaseResponse } from "@/types/supabase";
import { useEffect, useState } from "react";

interface FetchProps {
  queryFn: () => Promise<SupabaseResponse>;
}

export function useFetch({ queryFn }: FetchProps) {
  const [data, setData] = useState<SupabaseResponse['data'] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuery = async () => {
      try {
        setLoading(true);
        const { data, error, success } = await queryFn();

        if (!success) setError(error?.message);
        else setData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err?.message);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchQuery();
  }, [queryFn]);

  return { data, error, loading };
}