import MainPage from "@/components/common/MainPage";

const CreatePage = () => {
  return (
    <MainPage 
      heading="Create a link"
      subHeading="You can create 1000 more links this month."
      actionBtn={{ label: 'Home' }}
    >
      <p>Body</p>
    </MainPage>
  );
}
 
export default CreatePage;