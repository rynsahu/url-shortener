import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const RootLayout = () => {
  return (
    <div className="root_layout flex flex-col min-h-screen text-zinc-950">
      <Outlet />
      <Toaster richColors />
    </div>
  );
}

export default RootLayout;