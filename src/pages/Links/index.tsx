import LinksList from "@/components/LinksList";
import PrivatePageContainer from "@/components/ui/common/PrivatePageContainer";
import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const LinksPage = () => {
  const navigate = useNavigate();

  const handleCreateLinkBtnClick = useCallback(() => {
    navigate('/links/create');
  }, [navigate]);

  const actionBtn = useMemo(() => ({
    label: 'Create Link',
    onActionBtnClick: handleCreateLinkBtnClick,
  }), [handleCreateLinkBtnClick]);

  return (
    <PrivatePageContainer 
      heading="Links"
      subHeading="You can create 1000 more links this month."
      actionBtn={actionBtn}
    >
      <LinksList />
    </PrivatePageContainer>
  );
}

export default LinksPage;