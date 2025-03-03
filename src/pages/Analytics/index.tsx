import MainPage from "@/components/common/PrivatePageContainer";

const AnalyticsPage = () => {
  return (
    <MainPage 
      heading="Analytics"
      subHeading="You can create 1000 more links this month."
      actionBtn={{ label: 'Create Link' }}
    >
      <p>Body</p>
    </MainPage>
  );
}

export default AnalyticsPage;