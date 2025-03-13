import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <Link to="/home" className="text-blue-500">Home</Link>
    </div>
  );
}

export default LandingPage;