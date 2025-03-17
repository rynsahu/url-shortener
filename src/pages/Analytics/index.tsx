import PrivatePageContainer from "@/components/ui/common/PrivatePageContainer";

const AnalyticsPage = () => {
  return (
    <PrivatePageContainer 
      heading="Analytics"
      subHeading="You can create 1000 more links this month."
      actionBtn={{ label: 'Create Link' }}
    >
      <p>Body</p>
    </PrivatePageContainer>
  );
}

export default AnalyticsPage;