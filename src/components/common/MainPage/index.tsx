import { Button } from "@/components/ui/button";

interface MainPageProps {
  heading: string;
  subHeading?: string;
  children: React.ReactElement;
  actionBtn?: {
    label: string;
    handleActionBtnClick?: () => void;
  };
}
 
const MainPage: React.FC<MainPageProps> = ({ children, heading, subHeading, actionBtn }) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <section className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">{heading}</h1>
          {actionBtn && (
            <Button onClick={actionBtn.handleActionBtnClick}>
              {actionBtn.label}
            </Button>
          )}
        </div>
        {subHeading && <p className="text-sm text-zinc-600">{subHeading}</p>}
      </section>
      <section className="flex flex-col w-full">
        {children}
      </section>
    </div>
  );
}
 
export default MainPage;