import MainPage from "@/components/common/MainPage";

const LinksPage = () => {
  return (
    <MainPage 
      heading="Links"
      subHeading="You can create 1000 more links this month."
      actionBtn={{ label: 'Create Link' }}
    >
      <p>Body</p>
    </MainPage>
  );
}

export default LinksPage;