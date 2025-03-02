import MainPage from "@/components/common/MainPage";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const navigate = useNavigate();

  return (
    <MainPage 
      heading="Create a link"
      subHeading="You can create 1000 more links this month."
      actionBtn={{ 
        label: 'Home',
        handleActionBtnClick: () => navigate('/home')
      }}
    >
      <p>Body</p>
    </MainPage>
  );
}
 
export default CreatePage;