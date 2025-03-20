import { getUrls } from "@/services/urlShortener";
import { useFetch } from "@/hooks/useFetch";
import React, { useMemo } from "react";
import { Url } from "@/types/apiResponse";
import { Loader } from "lucide-react";

const DataNotFoundAlert = React.lazy(() => import('../ui/DataNotFoundAlert'));
const LinkDetailsCard = React.lazy(() => import('./LinkDetailsCard'))

const LinksList = () => {
  const { data, loading } = useFetch({ queryFn: getUrls });

  const renderLink = useMemo(() => {
    if (!loading && !data?.length) return (
      <DataNotFoundAlert
        title="No links found"
        description="You haven't created any links yet. Click on the button below to create one."
        actionBtnText="Create Link"
        actionBtnLink="/links/create"
      />
    );

    return data?.map((link: Url) => (
      <LinkDetailsCard key={link.id} link={link} />
    ));
  }, [data, loading]);

  return (
    <div className="flex flex-col gap-6 w-full">
      {renderLink}

      {loading && <Loader className="self-center mt-10 animate-spin" />}
    </div>
  );
}

export default React.memo(LinksList);