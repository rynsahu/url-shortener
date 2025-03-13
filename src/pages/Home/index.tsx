import PrivatePageContainer from "@/components/ui/common/PrivatePageContainer";
import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCreateLinkClick = useCallback(() => {
    navigate('/links');
  }, [navigate]);

  const actionBtn = useMemo(() => ({
    label: 'Links',
    onActionBtnClick: handleCreateLinkClick
  }), [handleCreateLinkClick]);

  return (
    <PrivatePageContainer 
      heading="Home"
      subHeading="You can create 1000 more links this month."
      actionBtn={actionBtn}
    >
      <div>Body</div>
    </PrivatePageContainer>
  );
}

export default HomePage;