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
    <div 
      className="public_layout relative bg-[#0b0809] dark min-h-screen overflow-hidden text-white z-0"
    >
      <div 
        className="absolute z-10 top-[-30%] right-[-10%] h-[100%] w-[50%] rotate-45 blur-[100px] bg-linear-to-b from-[#9AAC9A] from-30% via-[#5A666B] via-[#85969A] to-[black]"
      ></div>
      <div 
        className="absolute z-10 bottom-[-30%] left-[-10%] h-[70%] lg:h-[50%] w-[50%] rotate-45 blur-[100px] bg-linear-to-t from-[#9AAC9A] from-30% via-[#5A666B] via-[#85969A] to-[black]"
      ></div>
      <div className="relative z-20">
        <Outlet />
      </div>
    </div>
  );
}

export default PublicLayout;