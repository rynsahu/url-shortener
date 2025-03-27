import { useFetch } from "@/hooks/useFetch";
import { getLongUrlByShortUrlId } from "@/services/urlShortener";
import { useParams } from "react-router-dom";

const ShortUrlId = () => {
  const { shortUrlId } = useParams();
  const { data, loading } = useFetch({ queryFn: () => getLongUrlByShortUrlId(shortUrlId as string) })

  if (!loading && data?.long_url) window.location.href = data.long_url;

  return (
    <div className="h-screen text-sm p-4">Redirection...</div>
  );
}

export default ShortUrlId;