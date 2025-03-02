import MainPage from "@/components/common/MainPage";

const HomePage = () => {
  return (
    <MainPage 
      heading="Home"
      subHeading="You can create 1000 more links this month."
      actionBtn={{ label: 'Create Link' }}
    >
      <p>Body</p>
    </MainPage>
  );
}

export default HomePage;