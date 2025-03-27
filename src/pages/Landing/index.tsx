import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex gap-6 items-center justify-center h-screen">
      <Button>
        <Link to="/signup" className="text-blue-500 text-inherit">Sign Up</Link>
      </Button>
      <Button>
        <Link to="/login" className="text-blue-500 text-inherit">Login</Link>
      </Button>
    </div>
  );
}

export default LandingPage;