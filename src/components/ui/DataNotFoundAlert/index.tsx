import { Link } from "react-router-dom";
import { Alert, AlertTitle, AlertDescription } from "../alert";
import { Button } from "../button";

interface DataNotFoundAlertProps {
  title: string;
  description: string;
  actionBtnText?: string;
  actionBtnLink?: string;
  actionBtnOnClick?: () => void;
}
 
const DataNotFoundAlert: React.FC<DataNotFoundAlertProps> = ({ title, description, actionBtnText, actionBtnLink, actionBtnOnClick }) => {
  return (
    <Alert className="flex flex-col justify-center items-center p-4">
      <AlertTitle className="text-base">{title || '--'}</AlertTitle>
      <AlertDescription className="flex flex-col gap-4 items-center text-center">
        {description && <p>{description}</p>}
        <Button
          {...(actionBtnOnClick && { onClick: actionBtnOnClick })}
        >
          {actionBtnLink && !actionBtnOnClick && <Link to={actionBtnLink}>{actionBtnText}</Link>}
          {!actionBtnLink && actionBtnText}
        </Button>
      </AlertDescription>
    </Alert>
  );
}
 
export default DataNotFoundAlert;