import PrivateHeader from "@/components/ui/common/Header/PrivateHeader";
import SideNav from "@/components/ui/common/SideNav";
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
        <header className="px-4 py-5 border-b border-zinc-200">
          <PrivateHeader />
        </header>
        {/* Page content */}
        <section className="main_content relative w-full flex flex-col min-h-[calc(100vh-61px)] mx-auto">
          <Outlet />
        </section>
      </main>
      {/* ----- */}
    </div>
  );
}

export default PrivateLayout;