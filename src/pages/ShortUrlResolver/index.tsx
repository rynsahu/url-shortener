import { getLongUrlByShortUrlId } from "@/services/urlShortener";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const ShortUrlId = () => {
  const { shortUrlId } = useParams();

  useEffect(() => {
    if (!shortUrlId) {
      toast.error("Invalid URL");
      return;
    }

    const fetchLongUrl = async () => {
      const { data } = await getLongUrlByShortUrlId(shortUrlId);
      if (data) window.location.href = data.long_url;
    };

    fetchLongUrl();
  }, [shortUrlId]);

  return (
    <div className="h-screen text-sm p-4">Redirecting...</div>
  );
}

export default ShortUrlId;