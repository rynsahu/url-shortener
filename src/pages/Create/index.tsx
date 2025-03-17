import PrivatePageContainer from "@/components/ui/common/PrivatePageContainer";
import CreateLink from "@/components/Forms/CreateLinkForm";
import { useNavigate } from "react-router-dom";
import { useCallback, useMemo } from "react";

const CreatePage = () => {
  const navigate = useNavigate();

  const handleActionBtnClick = useCallback(() => {
    navigate('/home');
  }, [navigate]);

  const actionBtn = useMemo(() => ({
    label: 'Home',
    onActionBtnClick: handleActionBtnClick
  }), [handleActionBtnClick]);

  return (
    <PrivatePageContainer 
      heading="Create a link"
      subHeading="You can create 1000 more links this month."
      size="md"
      actionBtn={actionBtn}
    >
        <CreateLink />
    </PrivatePageContainer>
  );
}
 
export default CreatePage;