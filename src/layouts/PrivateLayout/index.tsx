import PrivateHeader from "@/components/ui/common/Header/PrivateHeader";
import SideNav from "@/components/ui/common/SideNav";
import { isUserLoggedIn } from "@/lib/utils";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn()) {
      navigate("/");
    }
  }, [navigate]);
  
  return (
    <div className="private_layout flex">
      {/* ----- */}
      <section>
        <SideNav />
      </section>
      {/* ----- */}
      <main className="flex flex-col w-full">
        <header className="px-4 py-5 border-b border-zinc-200">
          <PrivateHeader />
        </header>
        {/* Page content */}
        <section className="main_content relative w-full flex flex-col h-[calc(100vh-61px)] mx-auto overflow-y-auto">
          <Outlet />
        </section>
      </main>
      {/* ----- */}
    </div>
  );
}

export default PrivateLayout;