import MainPage from "@/components/common/MainPage";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <MainPage 
      heading="Home"
      subHeading="You can create 1000 more links this month."
      actionBtn={{ 
        label: 'Create Link',
        handleActionBtnClick: () => navigate('/links/create')
      }}
    >
      <p>Body</p>
    </MainPage>
  );
}

export default HomePage;