import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root_layout flex flex-col min-h-screen text-zinc-950">
      <Outlet />
    </div>
  );
}

export default RootLayout;