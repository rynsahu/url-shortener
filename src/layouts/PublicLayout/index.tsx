import { isUserLoggedIn } from "@/lib/utils";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PublicLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserLoggedIn()) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div className="public_layout bg-[#0b0809] dark min-h-screen text-white">
      <Outlet />
    </div>
  );
}

export default PublicLayout;