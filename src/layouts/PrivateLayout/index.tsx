import PrivateHeader from "@/components/Header/PrivateHeader";
import SideNav from "@/components/SideNav";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div className="private_layout flex">
      {/* ----- */}
      <aside>
        <SideNav />
      </aside>
      {/* ----- */}
      <main className="flex flex-col w-full">
        <header className="px-4 py-5">
          <PrivateHeader />
        </header>
        {/* ------ */}
        <section className="main_content">
          <div className="relative flex flex-col max-w-[1154px] min-h-[calc(100vh-60px)] mx-auto px-4">
            {/* Page content */}
            <Outlet />
          </div>
        </section>
      </main>
      {/* ----- */}
    </div>
  );
}

export default PrivateLayout;