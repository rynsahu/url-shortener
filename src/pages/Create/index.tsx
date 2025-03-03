import PrivatePageContainer from "@/components/common/PrivatePageContainer";
import CreateLink from "@/components/Forms/CreateLink";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const navigate = useNavigate();

  return (
    <PrivatePageContainer 
      heading="Create a link"
      subHeading="You can create 1000 more links this month."
      size="md"
      actionBtn={{ 
        label: 'Home',
        onActionBtnClick: () => navigate('/home')
      }}
    >
        <CreateLink />
    </PrivatePageContainer>
  );
}
 
export default CreatePage;